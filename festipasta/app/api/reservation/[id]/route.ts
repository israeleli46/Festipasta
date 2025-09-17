import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
 try {
    await prisma.client.delete({ where: { id: params.id } });
    return NextResponse.json({ message: "Suppression réussie" });
  } catch (e) {
    return NextResponse.json({ error: "Erreur suppression" }, { status: 500 });
  }
}

export async function PUT(
    req: NextRequest,
  { params }: { params: { id: string } }
) {
   const body = await req.json();
  try {
    const updated = await prisma.client.update({
      where: { id: params.id },
      data: body,
    });
    return NextResponse.json(updated);
  } catch (e) {
    return NextResponse.json({ error: "Erreur mise à jour" }, { status: 500 });
  }
}

