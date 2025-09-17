"use client";
import { ArrowLeft} from "lucide-react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

interface Client {
 id :string
   nom: string;
  
  email: string;
  sujet: string;
  message: string;
 
  createdAt: string;
}

export default function Reservationplace() {
 const { data, isLoading, error } = useQuery<Client[]>({
    queryKey: ["reservations"],
    queryFn: async () => {
      const res = await fetch("/api/message");
      if (!res.ok) throw new Error("Erreur de récupération");
      return res.json();
    },
  });

  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur: {(error as Error).message}</p>;

  return (
    <div className="p-6">
             <header className="bg-white border-b border-festival-grey-light ">
        <div className="container mx-auto px-4 py-4">
          <Link href="/view" className="inline-flex items-center gap-2 text-festival-green hovner:text-festival-green-dark transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Retour au Dashboard</span>
          </Link>
        </div>
      </header>
      <h1 className="text-xl font-bold mb-4 text-center">Liste des réservations de places</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-blue-100">
            <th className="border px-4 py-2">Nom</th>
           
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Sujet</th>
            <th className="border px-4 py-2">Message</th>
          
            <th className="border px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((res) => (
            <tr key={res.id}>
              <td className="border px-4 py-2">{res.nom}</td>
              
              <td className="border px-4 py-2">{res.email}</td>
              <td className="border px-4 py-2">{res.sujet}</td>
              <td className="border px-4 py-2">{res.message}</td>
            
              
              <td className="border px-4 py-2">
                {new Date(res.createdAt).toLocaleDateString("fr-FR")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

}
