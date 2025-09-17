
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

import HomePage from "../view/page";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login"); 
    console.log('it woks')// pas connecté → login
  }

  if (session.user.role !== "admin") {
    redirect("/view"); // connecté mais pas admin → accueil
  }

  return (
    <div>
    < HomePage/>
    </div>

  )}