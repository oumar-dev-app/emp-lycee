import { NextResponse } from "next/server";
import { db } from "@/app/lib/db";
import bcrypt from "bcryptjs";

export async function GET(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const data = await params;
        const userId = Number(data.id);

        // Vérification de l'ID
        if (isNaN(userId)) {
            return NextResponse.json(
                { message: "ID invalide !" },
                { status: 400 }
            );
        }

        // Requête SQL avec paramètre
        const rows: any = await db.query(
            `SELECT nom, prenom, email, telephone
       FROM users
       WHERE id = ?`,
            [userId]
        );
        
        // Retourne directement l'objet utilisateur
        return NextResponse.json(
            { data: rows[0][0] },
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

export async function DELETE(req: Request,
    { params }: { params: { id: string } }) {
    try {
        const data = await params;
        const userId = Number(data.id);

        if (isNaN(userId)) {
            return NextResponse.json(
                { message: "ID invalide !" },
                { status: 400 }
            )
        }

        // Vérifier si l'utilisateur existe
        const [rows]: any = await db.query(
            "SELECT id FROM users WHERE id = ?",
            [userId]
        );

        if (rows.length === 0) {
            return NextResponse.json(
                { message: "Utilisateur introuvable" },
                { status: 404 }
            );
        }

        // Supprimer l'utilisateur
        await db.query(
            "DELETE FROM users WHERE id = ?",
            [userId]
        );

        return NextResponse.json(
            { message: "User supprimé avec succè !" },
            { status: 200 }
        )

    } catch (error: any) {
        console.log(error);
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        )
    }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = await params;
    const putId = Number(data.id);

    if (isNaN(putId)) {
      return NextResponse.json(
        { message: "ID invalide !" },
        { status: 400 }
      );
    }

    const filtre = await req.json();
    if(filtre["password"]){
        const hashedPassword = await  bcrypt.hash(filtre["password"], 10);
        filtre["password"] = hashedPassword;
    }

    // garder seulement les champs non null
    const fields = Object.keys(filtre).filter((e) => filtre[e] != null);

    if (fields.length === 0) {
      return NextResponse.json(
        { message: "Aucun champ à modifier" },
        { status: 400 }
      );
    }

    // construire la requête dynamique
    const query1 = fields.map((f) => `${f} = ?`).join(", ");
    const query2 = `UPDATE users SET ${query1} WHERE id = ?`;

    const values = [...fields.map((f) => filtre[f]), putId];

    const [result] = await db.query(query2, values);

    console.log(result);

    return NextResponse.json(
      { message: "User modifié avec succès !" },
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