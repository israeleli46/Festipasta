import { prisma } from "@/lib/prisma"
import { NextResponse,NextRequest } from "next/server"

export async function POST(request: NextRequest) {
    try {
  const body = await request.json()
  

const existing = await prisma.client.findUnique({
  where: { email: body.email },
});

if (existing) {
  
  return new Response(
    
    JSON.stringify({ error: "Cet email est déjà utilisé !" }),
    { status: 400 },
    
  );
  
}

  const reservation = await prisma.client.create({
    data: {
      nom: body.firstName,
      prenom: body.lastName,
      email: body.email,
        phone: body.phone,
        typebillet: body.typebillet,
        qte: body.quantity,
    },
    
  })
  console.log(body)

  return NextResponse.json({data:reservation}) 
 
} 
catch (error) {
        console.error("❌ Erreur Prisma :", error)
    return NextResponse.json(
      { error: "Impossible de créer la réservation", details: error },
      { status: 500 }
    )
    }
}

export async function GET(req: NextRequest) {
   try {
    

    const reservations = await prisma.client.findMany({
    orderBy: { createdAt: "desc" }, // filtrage ici
    });

    return NextResponse.json(reservations);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
