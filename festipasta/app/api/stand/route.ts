import { prisma } from "@/lib/prisma"

import { NextResponse,NextRequest } from "next/server"

export async function POST(request: NextRequest) {
    try {
  const body = await request.json()
  

  const reservationStand = await prisma.stand.create({
    data: {
        structure: body.structure,
        nom: body.nomrep,
        phone: body.phone,
        email: body.email,
        adress: body.adpost,
        lien:body.lien,
        nbrStandist: body.nbrStandist,
        prix: body.prixstand,
        electricite: body.electricite===true,
        besoin: body.autrebesoin,
        
      
       
       
      
    },
    
  })
  console.log(body)

  return NextResponse.json({data:reservationStand}) 
 
} catch (error) {
        console.error("❌ Erreur Prisma :", error)
    return NextResponse.json(
      { error: "Impossible de créer la réservation de stand", details: error },
      { status: 500 }
    )
    }
}

export async function GET(req: Request) {
   try {
    

    const stands = await prisma.stand.findMany({
    orderBy: { createdAt: "desc" }, // filtrage ici
    });

    return NextResponse.json(stands);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}