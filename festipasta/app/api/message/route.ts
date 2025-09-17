import { prisma } from "@/lib/prisma"
import { NextResponse,NextRequest } from "next/server"

export async function POST(request: NextRequest) {
    try {
  const body = await request.json()
  



  const msg = await prisma.message.create({
    data: {
        nom: body.nom,
        email: body.email,
        sujet: body.sujet,
        message: body.message,
    },
    
  })
  console.log(body)

  return Response.json({data:msg}) 
 
} 
catch (error) {
        console.error("❌ Erreur Prisma :", error)
    return NextResponse.json(
      { error: "Impossible d'envoyer ce msg", details: error },
      { status: 500 }
    )
    }
}

export async function GET() {
  try {
    

    const msgs = await prisma.message.findMany({
    orderBy: { createdAt: "desc" }, // filtrage ici
    });

    return NextResponse.json(msgs);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
