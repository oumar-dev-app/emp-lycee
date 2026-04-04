import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";

// GET
export async function GET() {
  try {
    const [results] = await db.query('SELECT * FROM category');
    return NextResponse.json({ message: results });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}

// POST
export async function POST(req: Request) {
  try {
    const { nom, couleur } = await req.json();

    if (!nom || !couleur) {
      return NextResponse.json(
        { message: "Le nom et la couleur sont obligatoires !" },
        { status: 400 }
      );
    }

    await db.query(
      "INSERT INTO category (nom, couleur) VALUES (?, ?)",
      [nom, couleur]
    );

    return NextResponse.json(
      { message: "Category créée avec succès !" },
      { status: 200 }
    );

  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}