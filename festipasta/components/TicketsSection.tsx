import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Users, Ticket, Trophy } from "lucide-react";
import Link from "next/link";

const TicketsSection = () => {
  const tickets = [
    {
      name: "Pass Standard",
      price: "25 000",
      currency: "FCFA",
      icon: Ticket,
      description: "",
      features: [
        "Une flûte de champagne 🍾 alcoolisée/non/ vin / 1 cocktail 🍹 ",
        "1 personnes",
        "1 plat de 10.000 FCFA ",
        "1 bouteilles d’eau céleste",
        "1 sucrerie"
      ],
      popular: false,
      color: "bg-gray-100"
    },
    {
      name: "Pass Family",
      price: "100 000",
      currency: "FCFA",
      icon: Star,
      description: "Accès prioritaire, zones exclusives, et rencontre avec les chefs",
      features: [
      "Une bouteille de champagne 🍾 alcoolisée/non/ vin / 5 cocktail 🍹 ",
        "5 personnes",
        "5 plats de 7.500 FCFA",
        "3 bouteilles d’eau céleste ",
        "5 sucreries"
      ],
      popular: true,
      color: "bg-festival-green-light"
    },
    {
      name: "Pass VIP",
      price: "50 000",
      currency: "FCFA",
      icon: Trophy,
      description: "",
      features: [
       "1 bouteille de champagne 🍾 alcoolisée ou non/ vin / 3 cocktail 🍹",
        "3 personnes",
        "3 plats de 5.000 FCFA",
        "2 bouteilles d’eau céleste",
        "3 sucreries"
      ],
      popular: false,
      color: "bg-pink-200"
    }
  ];

  return (
    <section id="tickets" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Réservez Votre Place
          </h2>
          <p className="text-lg text-festival-grey max-w-2xl mx-auto">
            Ne manquez pas cette opportunité unique de plonger dans le monde des pâtes ! 
            Réservez vos billets dès aujourd'hui pour profiter des tarifs avantageux.
          </p>
        </div>

        <div className="flex flex-col w-full gap-5 px-3 xl:flex-row md:flex-col-1 sm:flex-col-1">
          {tickets.map((ticket, index) => (
            <Card key={index} className={`relative border-0 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${ticket.color}`}>
              {ticket.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-festival-green text-white px-4 py-1">
                  Plus Populaire
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <ticket.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">{ticket.name}</CardTitle>
                <div className="text-3xl font-bold text-festival-green">
                  {ticket.price} <span className="text-lg font-normal text-festival-grey">{ticket.currency}</span>
                </div>
                <p className="text-festival-grey">{ticket.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {ticket.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-festival-green mt-0.5 flex-shrink-0" />
                      <span className="text-festival-grey text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/reservation">
                  <Button 
                    variant={ticket.popular ? "festival" : "outline"} 
                    className="w-full mt-6"
                    size="lg"
                  >
                    Réserver maintenant
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-festival-grey mb-4">
            Questions sur la billetterie ? Contactez-nous au +225 07 47 31 11 41
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-festival-grey">
            <span>✓ Paiement sécurisé</span>
            <span>✓ Billets électroniques</span>
            <span>✓ Remboursement possible</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketsSection;