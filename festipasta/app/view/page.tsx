"use client"
import FestivalHeader from "@/components/FestivalHeader";
import { NavigationGrid } from "./navigationgrid";

export default function HomePage() {
  return (
    <div>
    <FestivalHeader/>
    <div className="mt-12 min-h-screen bg-background">
   
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">Dashboard 📊 </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Accédez rapidement à toutes vos ressources administratives et de gestion des réservations.
          </p>
        </div>
        <NavigationGrid />
      </main>
   
    </div>
    </div>
  )
}