import { NextResponse } from "next/server";
import { db } from "@/app/lib/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();

        // Vérification des champs
        if (!email || !password) {
            return NextResponse.json(
                { message: "Email et mot de passe requis !" },
                { status: 400 }
            );
        }

        const [rows]: any = await db.query(
            "SELECT * FROM users WHERE email = ?",
            [email]
        );

        // Vérifier si l'utilisateur existe
        if (rows.length === 0) {
            return NextResponse.json(
                { message: "Identifiant incorrect !" },
                { status: 404 }
            );
        }

        const user = rows[0];

        // Vérification du mot de passe
        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            return NextResponse.json(
                { message: "Mot de passe incorrect !" },
                { status: 401 }
            );
        }

        // Génération du token JWT
        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET as string,
            { expiresIn: "1d" }
        );

        

        // Réponse succès
        return NextResponse.json({
            message: "Connexion réussie",
            token,
            user: {
                id: user.id,
                nom: user.nom,
                email: user.email,
            },
        });

    } catch (error: any) {
        console.error(error);

        return NextResponse.json(
            { message: "Erreur serveur" },
            { status: 500 }
        );
    }
}