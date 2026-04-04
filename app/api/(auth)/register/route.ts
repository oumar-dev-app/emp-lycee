import { NextResponse } from "next/server";
import { db } from "@/app/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { nom, prenom, email, telephone, password } = await req.json();

    // Vérification des champs obligatoires
    if (!email || !password) {
      return NextResponse.json(
        { message: "Champ obligatoire" },
        { status: 400 }
      );
    }

    // Vérifier si l'utilisateur existe déjà
    const [rows]: any = await db.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (rows.length > 0) {
      return NextResponse.json(
        { message: "User existe déjà !" },
        { status: 400 }
      );
    }

    // Hash du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insertion de l'utilisateur
    await db.query(
      `INSERT INTO users (nom, prenom, email, telephone, password)
       VALUES (?, ?, ?, ?, ?)`,
      [nom, prenom, email, telephone, hashedPassword]
    );

    return NextResponse.json(
      { message: "User créé avec succès !" },
      { status: 200 }
    );

  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}