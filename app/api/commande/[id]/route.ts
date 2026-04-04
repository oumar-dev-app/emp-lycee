import { NextResponse } from "next/server";
import { db } from "@/app/lib/db";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = await params;
    const commandeId = Number(data.id);

    if (isNaN(commandeId)) {
      return NextResponse.json(
        { message: "ID invalide !" },
        { status: 400 }
      );
    }

    const [rows]: any = await db.query(
      `
      SELECT 
        commandes.id AS commande_id,
        commandes.nom AS commande_nom,
        commandes.total,

        clients.id AS client_id,
        clients.nom AS client_nom,
        clients.prenom,
        clients.telephoneNumber,
        
        produits.id AS produit_id,
        produits.nom AS produit_nom,

        commande_produits.quantite,
        commande_produits.prixU

      FROM commandes

      JOIN clients 
        ON commandes.id_client = clients.id

      LEFT JOIN commande_produits
        ON commandes.id = commande_produits.commande_id

      LEFT JOIN produits
        ON commande_produits.produit_id = produits.id 
        
      WHERE commandes.id = ?
      `,
      [commandeId]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        { message: "Commande introuvable" },
        { status: 404 }
      );
    }

    const commande = {
      id: rows[0].commande_id,
      nom: rows[0].commande_nom,
      total: rows[0].total
    };

    const client = {
      id: rows[0].client_id,
      nom: rows[0].client_nom,
      prenom: rows[0].prenom,
      telephoneNumber: rows[0].telephoneNumber
    };

    const produits = rows
      .filter((row: any) => row.produit_id !== null)
      .map((row: any) => ({
        id: row.produit_id,
        nom: row.produit_nom,
        quantite: row.quantite,
        prixU: row.prixU
      }));

    return NextResponse.json(
      {
        commande,
        client,
        produits
      },
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