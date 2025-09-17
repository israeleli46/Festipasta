"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { ArrowLeft, Ticket, Star, Users, Check } from "lucide-react";
import { toast } from "sonner"

import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/components/Footer";
import Link from "next/link";


interface ReservationStandForm {
  structure: string;
    email: string;
  phone: string;  
 nomrep: string;
  adpost?: string;
  lien?: string;
  confirm: boolean;
    annule: boolean;
    autrebesoin?: string;
    activite:string;
    typstand:string;
    prixstand?:number;
    nbrStandist:string;
    electricite: boolean;
    besoin:string;
}

const ReservationStand = () => {
  const [selectedTicket, setSelectedTicket] = useState("");
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<ReservationStandForm>();
  const router = useRouter();

const [valid, setValid] = useState(false);

  const tickets = [
    // {
    //   id: "standard",
    //   name: "Billet Standard",
    //   price: 25000,
    //   icon: Ticket,
    //   features: [
    //     "Accès à tous les stands de dégustation",
    //     "Spectacles et animations",
    //     "Accès aux espaces communs",
    //     "Parking inclus"
    //   ]
    // },
    {
      id: "vip",
      name: "Pass VIP",
      price: 45000,
      icon: Star,
      popular: true,
      features: [
        "Tous les avantages du billet standard",
        "Accès prioritaire à tous les événements",
        "Zone VIP avec service premium",
        "Rencontre exclusive avec les chefs",
        "Ateliers de cuisine prioritaires",
        "Cadeau souvenir"
      ]
    },
    // {
    //   id: "family",
    //   name: "Forfait Famille",
    //   price: 60000,
    //   icon: Users,
    //   features: [
    //     "Accès pour 2 adultes + 2 enfants",
    //     "Activités spéciales pour enfants",
    //     "Ateliers familiaux",
    //     "Parking prioritaire",
    //     "10% de réduction sur les achats"
    //   ]
    // }
  ];
  const activitytype=[
     { id: "food", name: "Restauration" },
    { id: "artisan", name: "Artisanat" }, 
    { id: "entertainment", name: "Divertissement" },
    { id: "other", name: "Autre" }
  ];
  const StandCategorie=[
    { id: "Classic", name: "Stand Saveur Local (Classic)" ,prix: 100000,space:"3m² + table ,chaises,mention"},
    { id: "Confort", name: "Stand Saveur Équilibre (Confort)",prix: 200000,space:"6m² + visibilité digitale" }, 
    { id: "Premium", name: "Stand Saveur Prestige (Premium)",prix: 300000,space:" 9‑12m² + media & interview" }
   
  ]
  

  const onSubmit =async (data: ReservationStandForm) => {
     const res = await fetch("/api/stand", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
  if (res.ok) {
     setTimeout(() => {
        router.push("/");
      }, 3000);
      
      console.log("Données de réservation:", data);
    toast.success(
      `Réservation de stand confirmée ✅
      Merci ${data.structure} pour votre réservation de Stand.
       Un email de confirmation vous a été envoyé.`
    )
    
  }
  else {
    toast.error("Erreur lors de la réservation ❌")}
  
    
  };
   const selectedStand = watch("typstand")
  const standDetails = StandCategorie.find((s) => s.name === selectedStand)

 

  return (
    <div className=" h-full bg-[url('/StandResv.png')]" id="stands">
      {/* Header */}
    {/* Header */}
      <header className="bg-white border-b border-festival-grey-light ">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-festival-green hovner:text-festival-green-dark transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Retour au festival</span>
          </Link>
        </div>
      </header>
      {/* Reservation stand Content */}
      
      <div className="container mx-auto px-0 py-12 ">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-4 text-foreground">
              Réservation de Stands
            </h1>
            <p className="text-lg text-gray-200 font-serif font-bold">
              Festival des Pâtes d'Abidjan • 29-30 Novembre 2025
            </p>
          </div>
        <div className="flex w-full justify-between">
         
          <div className="w-full">
      

            {/* Formulaire de réservation */}
            <div className="opacity-95">
              <Card >
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Vos informations</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Nom de la structure / Exposant *</Label>
                        <Input
                          id="structure"
                          {...register("structure", { required: "Le prénom est requis" })}
                          className={errors.structure ? "border-red-500" : ""}
                        />
                        {errors.structure && (
                          <p className="text-sm text-red-500">{errors.structure.message}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="nomrep">Nom et prénom du responsable*</Label>
                        <Input
                          id="nomrep"
                          {...register("nomrep", { required: "Le nom est requis" })}
                          className={errors.nomrep ? "border-red-500" : ""}
                        />
                        {errors.nomrep && (
                          <p className="text-sm text-red-500">{errors.nomrep.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email", { 
                          required: "L'email est requis",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Adresse email invalide"
                          }
                        })}
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="adpost">Addresse postale(facultatif)</Label>
                        <Input
                          id="adpost"
                          {...register("adpost", { })}
                          className={errors.adpost ? "border-red-500" : ""}
                        />
                        {errors.adpost && (
                          <p className="text-sm text-red-500">{errors.adpost.message}</p>
                        )}
                      </div> 
                      <div className="space-y-2">
                        <Label htmlFor="lien">Lien Instagram ou Facebook</Label>
                        <Input
                          id="lien"
                          {...register("lien", { required: "Un compte Facebook ou Instagram est requis" })}
                          className={errors.lien ? "border-red-500" : ""}
                        />
                        {errors.lien && (
                          <p className="text-sm text-red-500">{errors.lien.message}</p>
                        )}
                      </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+225 XX XX XX XX XX"
                        {...register("phone", { required: "Le téléphone est requis" })}
                        className={errors.phone ? "border-red-500" : ""}
                      />
                      {errors.phone && (
                        <p className="text-sm text-red-500">{errors.phone.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="type">Type d’activité *</Label>
                      <Select onValueChange={(value) => setValue("activite", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner l'activité" />
                        </SelectTrigger>
                        <SelectContent>
                          { activitytype.map((id) => (
                            <SelectItem key={id.id} value={id.name.toString()}>
                              {id.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <hr />
                     <div className="space-y-2">
                      <Label htmlFor="type">Type de stand *</Label>
                     <Select onValueChange={(value) => {
   const selectedItem = JSON.parse(value);
   selectedItem.prix = Number(selectedItem.prix);
  setValue("typstand", selectedItem.name);
  setValue("prixstand", selectedItem.prix);

  }}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner le stand qui vous convient" />
                        </SelectTrigger>
                        <SelectContent>
                          { StandCategorie.map((id) => (
                            <SelectItem key={id.id} value={JSON.stringify({ name: id.name, prix: id.prix })}>
                              {id.name}
                              <h2 className="text-gray-400">{id.prix} FCFA</h2>
                            </SelectItem>
                            
                                                      ))}
                          
                        </SelectContent>
                      </Select>
                      {standDetails && (
                        <div>
    <div className="space-y-1 my-3 text-sm text-gray-700">
      <p><strong>Type :</strong> {standDetails.name}</p>
      <p><strong>Prix :</strong> {standDetails.prix} FCFA</p>
      <p><strong>Detail :</strong> {standDetails.space} </p>
    </div> 
       <div className="space-y-3 flex  justify-between">
                      <Label htmlFor="type">Vous confirmez ?</Label> 
                      <span className="font-semibold">OUI</span> 
                      <Checkbox onClick={() => setValid(!valid)}
                        id="confirm"
                        {...register("confirm", { required: "Vous devez confirmer" })}
                        className={errors.confirm ? "border-red-500" : ""}/>
                      {errors.confirm && (
                        <p className="text-sm text-red-500">{errors.confirm.message}</p>
                      )} <span className="font-semibold">NON</span> 
                       <Checkbox
                        id="annule"
                        {...register("annule", { required: "Vous devez refuser" })}
                        className={errors.confirm ? "border-red-500" : ""}/>

                    </div> 
                    </div> 
  )}                     
    </div>
    <hr />
                  {standDetails &&  
                  <div>
                    <h1 className="flex justify-center mb-3 text-gray-400 text-lg font-semibold">
                        Logistique & besoins spécifiques
                    </h1>
                  <div className="space-y-3 mb-3">
                      <Label htmlFor="nbrStandist"> Nombres de personnes dans le stand</Label>
                     <Select onValueChange={(value) => setValue("nbrStandist", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner le nombre de personnes" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} personne{num > 1 ? 's' : ''}
                            </SelectItem>
                          ))}
                        </SelectContent>
                     </Select>
                    </div>
                        <div className="space-y-3 flex justify-between mb-3" >
                      <Label htmlFor="type">Souhaitez-vous un accès à l’électricité ?</Label> 
                      <span className="font-semibold">OUI</span> 
                      <Checkbox 
                     onCheckedChange={(v) => setValue("electricite", !!v)}/>
                      <span className="font-semibold">NON</span> 
                       <Checkbox
                        />

                    </div>  
                    <div className="space-y-2 my-2 xl:mb-3">
                        <Label htmlFor="autrebesoin">Besoins matériels ou emplacement spécifiques</Label>
                        <Textarea
                        placeholder="Décrivez vos besoins spécifiques ici..."
                          id="besoin"
                          {...register("besoin")}
                          
                        />
                 
                      </div>
{valid &&
                      <div>
                        <div className="space-y-3 flex justify-between mb-3">
                         <Label htmlFor="type"></Label> 
                   <span className="text-xs text-festival-grey text-center pr-2 ">“Je confirme avoir pris connaissance du règlement du Festi_Pasta
                         et m’engage à respecter les conditions de participation,
                          ainsi qu’à régler le montant correspondant à ma catégorie de stand.”
                    </span> 
                      <Checkbox
                        id="confirm"
                        {...register("confirm", { required: true })}
                       />
                      </div>  
                        <Button 
                      type="submit" 
                      variant="festival" 
                      size="lg" 
                      className="w-full"
                      
                    >
                      Confirmer la réservation
                    </Button>
                    </div>                 
}
                    </div>
                    }
                    
                  

                    <p className="text-xs text-festival-grey text-center">
                      En confirmant votre réservation, vous acceptez nos conditions générales de vente.
                      Un email de confirmation vous sera envoyé avec les détails de paiement.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
            

          </div>
                {/* <div>
              <Card className="">
                            <img src="./StandResv.png" alt="Stands" className="w-full h-auto rounded-lg " />            
              </Card>
               </div> */}
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ReservationStand;