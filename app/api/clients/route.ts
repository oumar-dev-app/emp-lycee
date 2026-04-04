import { NextResponse } from "next/server";
import { db } from "@/app/lib/db";

// GET
export async function GET() {
  try {

    const rows: any = await db.query("SELECT * FROM clients");

    return NextResponse.json({ data: rows[0] });

  } catch (error) {

    return NextResponse.json(
      { message: "Erreur serveur" },
      { status: 500 }
    );
  }
}

// POST
export async function POST(req: Request) {

  try {

    const { nom, prenom, email, telephoneNumber } = await req.json();

    // validation
    if (!nom || !prenom || !email || !telephoneNumber) {
      return NextResponse.json(
        { message: "Tous les champs sont requis !" },
        { status: 400 }
      );
    }

    // vérifier email
    const [rows]: any = await db.query(
      "SELECT * FROM clients WHERE email=?",
      [email]
    );

    if (rows.length > 0) {
      return NextResponse.json(
        { message: "Client existe déjà" },
        { status: 400 }
      );
    }

    // insertion
    await db.query(
      "INSERT INTO clients (nom, prenom, email, telephoneNumber) VALUES (?, ?, ?, ?)",
      [nom, prenom, email, telephoneNumber]
    );

    return NextResponse.json(
      { message: "Client inséré avec succès !" },
      { status: 200 }
    );

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      { message: "Erreur serveur" },
      { status: 500 }
    );
  }
}