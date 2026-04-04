import { NextResponse } from "next/server";
import { db } from "@/app/lib/db";
import { parseEnv } from "util";


 export async function GET(req: Request) {
  try{
    const rows = await db.query("SELECT * FROM commandes");

    return NextResponse.json(
      {message:rows[0]},
      {status:200}
    )
  }catch(error){
    console.error(error);
    return NextResponse.json(
      {message:error},
      {status:500}
    )
  }
 }


export async function POST(req: Request) {
  const connection = await db.getConnection();

  try {
    const {
      nom,
      image,
      id_client,
      produits = [] // On initialise à un tableau vide si non fourni
    } = await req.json();

    // Validation des champs obligatoires
    if (!nom || !id_client) {
      return NextResponse.json(
        { message: "nom et id_client sont obligatoires" },
        { status: 400 }
      );
    }

    await connection.beginTransaction();

    // Insertion de la commande
    const [result]: any = await connection.query(
      `INSERT INTO commandes (nom, image, id_client) VALUES (?, ?, ?)`,
      [nom, image || null, id_client]
    );

    const commandeId = result.insertId;

    // Insertion des produits liés si le tableau n'est pas vide
    if (produits.length > 0) {
      for (const produit of produits) {

        // Validation minimale pour chaque produit
        if (!produit.produit_id || !produit.quantite || !produit.prixU) {
          await connection.rollback();
          connection.release();
          return NextResponse.json(
            { message: "Chaque produit doit avoir produit_id, quantite et prixU" },
            { status: 400 }
          );
        }

        const prixTotal = produit.quantite * produit.prixU;

        await connection.query(
          `
          INSERT INTO commande_produits
          (commande_id, produit_id, quantite, prixU, prixTotal)
          VALUES (?, ?, ?, ?, ?)
          `,
          [
            commandeId,
            produit.produit_id,
            produit.quantite,
            produit.prixU,
            prixTotal
          ]
        );
      }
    }

    await connection.commit();
    connection.release();

    return NextResponse.json(
      { message: "Commande créée avec succès", id: commandeId },
      { status: 201 }
    );

  } catch (error: any) {
    await connection.rollback();
    connection.release();

    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}