import { NextResponse } from "next/server";
import { db } from "@/app/lib/db";

// DELETE
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {

  try {
    const data = await params;
    const deleteId = Number(data.id);

    if (isNaN(deleteId)) {
      return NextResponse.json(
        { message: "ID invalide !" },
        { status: 400 }
      );
    }

    await db.query(
      "DELETE FROM produits WHERE id=?",
      [deleteId]
    );

    return NextResponse.json(
      { message: "Produit supprimé avec succès !" },
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

// PUT
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

    const body = await req.json();

    const fields = Object.keys(body).filter(
      (f) => body[f] != null
    );

    if (fields.length === 0) {
      return NextResponse.json(
        { message: "Aucun champ à modifier !" },
        { status: 400 }
      );
    }

    const query = fields.map(f => `${f}=?`).join(", ");
    const values = fields.map(f => body[f]);

    await db.query(
      `UPDATE produits SET ${query} WHERE id=?`,
      [...values, putId]
    );

    return NextResponse.json(
      { message: "Produit modifié avec succès !" },
      { status: 200 }
    );

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      { message: "Erreur interne" },
      { status: 500 }
    );
  }
}