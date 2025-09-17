"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Ticket, Star, Users, Check } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";
import { toast } from "sonner"
import { useRouter } from "next/navigation";



interface ReservationForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  typebillet: string;
  quantity: number;
}

const Reservation = () => {
  const [selectedTicket, setSelectedTicket] = useState("");
   const { register,handleSubmit, setValue, watch, formState: { errors } } = useForm<ReservationForm>();
  
    const router = useRouter();



   

 
    

  const tickets = [
    {
      id: "standard",
      name: "Pass Standard 🎫",
      price: 25000,
      icon: Ticket,
       popular: true,
      features: [
        "Une flûte de champagne 🍾 alcoolisée/non/ vin / 1 cocktail 🍹 ",
        "1 personnes",
        "1 plat de 10.000 FCFA ",
        "1 bouteilles d’eau céleste",
        "1 sucrerie"
      ]
    },
    {
      id: "vip",
      name: "Pass VIP 🎫",
      price: 50000,
      icon: Star,
      popular: true,
      features: [
        "1 bouteille de champagne 🍾 alcoolisée ou non/ vin / 3 cocktail 🍹",
        "3 personnes",
        "3 plats de 5.000 FCFA",
        "2 bouteilles d’eau céleste",
        "3 sucreries"
        
      ]
    },
    {
      id: "family",
      name: "Pass Family 🎫",
      price: 100000,
      icon: Users,
      features: [
        "Une bouteille de champagne 🍾 alcoolisée/non/ vin / 5 cocktail 🍹 ",
        "5 personnes",
        "5 plats de 7.500 FCFA",
        "3 bouteilles d’eau céleste ",
        "5 sucreries"
      ]
    }
  ];

  const onSubmit =async (data: ReservationForm) => {
    const res = await fetch("/api/reservation",{
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })

  if (res.ok) {
      
      console.log("Données de réservation:", data);

    console.log("Réservation enregistrée ✅")
    toast.success(`Réservation confirmée ✅
      Merci ${data.firstName} pour votre réservation.
       Un email de confirmation vous a été envoyé.`);
           setTimeout(() => {
        router.push("/");
      }, 3000);
  } else {
    console.error("Erreur lors de la réservation ❌")
    toast.error("Erreur lors de la réservation ❌")
  }
   
    console.log("Données de réservation:", data);
  
  };
  
  // const handleCreateUser = async () => {
  //   if (!email) {
  //     toast.error("Email is required");
  //     return;
  //   }
    
  //   setLoading(true);
  //   try {
  //     await createClient({data});
      
  //     // Reset form
  //     setEmail('');
  //     setName('');
      
  //     toast.success("User created successfully");
      
  //     // Refresh the page data to show the new user
  //     router.refresh();
      
  //   } catch (error) {
  //     console.error('Error creating user:', error);
  //     toast.error((error as Error).message || "Failed to create user");
  //   } 
  // };

  const selectedTicketData = tickets.find(t => t.id === selectedTicket);
  const quantity = watch("quantity") || 1;
  const totalPrice = selectedTicketData ? selectedTicketData.price * quantity : 0;

  return (
    <div className="min-h-screen bg-festival-bg">
      {/* Header */}
      <header className="bg-white border-b border-festival-grey-light ">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-festival-green hovner:text-festival-green-dark transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Retour au festival</span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 ">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Réservation de Places
            </h1>
            <p className="text-lg text-festival-grey">
              Festival des Pâtes d'Abidjan • 29-30 Novembre 2025
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Sélection des billets */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">Choisissez votre Pass</h2>
              
              {tickets.map((ticket) => (
                <Card 
                  key={ticket.id} 
                                className={`cursor-pointer border-2 transition-all duration-200 hover:-translate-y-1 ${
                    selectedTicket === ticket.id 
                      ? 'border-festival-green bg-festival-green-light' 
                      : 'border-festival-grey-light hover:border-festival-green'
                  }`}
                  onClick={() => {
                    setSelectedTicket(ticket.id);
                    setValue("typebillet", ticket.id);
                  }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                          <ticket.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-foreground flex items-center gap-2">
                            {ticket.name}
                            {ticket.popular && (
                              <Badge className="bg-festival-green text-white">Populaire</Badge>
                            )}
                          </CardTitle>
                          <p className="text-2xl font-bold text-festival-green">
                            {ticket.price.toLocaleString()} FCFA
                          </p>
                        </div>
                      </div>
                      {selectedTicket === ticket.id && (
                        <div className="w-6 h-6 bg-festival-green rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-2">
                      {ticket.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-festival-grey">
                          <Check className="w-4 h-4 text-festival-green mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Formulaire de réservation */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Vos informations</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Prénom *</Label>
                        <Input
                        
                          id="lastName"
                         
                          {...register("lastName", { required: "Le prénom est requis" })}
                          className={errors.lastName ? "border-red-500" : ""}
                        />
                        {errors.lastName && (
                          <p className="text-sm text-red-500">{errors.lastName.message}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Nom *</Label>
                        <Input
                        
                          id="firstName"
                         
                          {...register("firstName", { required: "Le nom est requis" })}
                          className={errors.firstName ? "border-red-500" : ""}
                        />
                        {errors.firstName && (
                          <p className="text-sm text-red-500">{errors.firstName.message}</p>
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
                      <Label htmlFor="quantity">Quantité</Label>
                      <Select onValueChange={(value) => setValue("quantity", parseInt(value))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner le nombre" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} Billet{num > 1 ? 's' : ''}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Récapitulatif */}
                    {selectedTicketData && (
                      <div className="border-t border-festival-grey-light pt-6">
                        <h3 className="font-semibold text-foreground mb-3">Récapitulatif</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-festival-grey">Billet:</span>
                            <span className="text-foreground">{selectedTicketData.name}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-festival-grey">Quantité:</span>
                            <span className="text-foreground">{quantity}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-festival-grey">Prix unitaire:</span>
                            <span className="text-foreground">{selectedTicketData.price.toLocaleString()} FCFA</span>
                          </div>
                          <div className="flex justify-between font-bold text-lg pt-2 border-t">
                            <span className="text-foreground">Total:</span>
                            <span className="text-festival-green">{totalPrice.toLocaleString()} FCFA</span>
                          </div>
                        </div>
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      variant="festival" 
                      size="lg" 
                      className="w-full"
                      disabled={!selectedTicket}
                      
                    >
                      Confirmer la réservation
                    </Button>

                    <p className="text-xs text-festival-grey text-center">
                      En confirmant votre réservation, vous acceptez nos conditions générales de vente.
                      Un email de confirmation vous sera envoyé avec les détails de paiement.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
       <Footer/>
    </div>
   
  );
};

export default Reservation;