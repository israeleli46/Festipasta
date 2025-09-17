// app/login/page.tsx
"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { ArrowLeft, Ticket, Star, Users, Check } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    
    console.log('it does')
    e.preventDefault();
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/view", // redirection après login
      
    });
  }

  return (
    <div>
      {/* Header */}
      <header className="bg-white border-b border-festival-grey-light ">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-festival-green hovner:text-festival-green-dark transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Retour au festival</span>
          </Link>
        </div>
      </header>
      <h1 className="text-center font-bold text-3xl mt-15">Entrer votre login administrateur</h1>
    
    <div className="flex items-center justify-center h-screen">
      
      
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow w-80"
      >
        <h1 className="text-xl font-bold mb-4">Se connecter</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border w-full p-2 mb-3"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border w-full p-2 mb-3"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white w-full py-2 rounded"
        >
          Connexion
        </button>
      </form>
    </div>
    </div>
  );
}
