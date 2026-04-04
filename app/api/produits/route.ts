export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { db } from "@/app/lib/db";

// GET
export async function GET() {
  try {

    const [rows] = await db.query("SELECT * FROM produits");

    return NextResponse.json({ message: rows });

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      { message: "Erreur serveur" },
      { status: 500 }
    );
  }
}

// POST
export async function POST(req: Request) {

  try {

    const { nom, description, stocke, image_url } = await req.json();

    if (!nom || !description || !stocke || !image_url) {
      return NextResponse.json(
        { message: "Tous les champs sont requis !" },
        { status: 400 }
      );
    }

    const [rows]: any = await db.query(
      "SELECT * FROM produits WHERE nom=?",
      [nom]
    );

    if (rows.length > 0) {
      return NextResponse.json(
        { message: "Produit existe déjà" },
        { status: 400 }
      );
    }

    await db.query(
      "INSERT INTO produits (nom, description, stocke, image_url) VALUES (?, ?, ?, ?)",
      [nom, description, stocke, image_url]
    );

    return NextResponse.json(
      { message: "Produit inséré avec succès !" },
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