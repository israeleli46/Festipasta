"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Briefcase, ShoppingCart, Heart, Gamepad2, ExternalLink } from "lucide-react"

const categories = [
  {
    id: "place",
    title: "Reservation de places",
    description: "Voir les réservations de places",
    icon: ShoppingCart,
    color: "bg-orange-50 text-orange-600 border-orange-200",
    links: [
      { name: "Reservation", url: "/view/reservationplace", description: "" },
      
    ],
  },
 
  {
    id: "stand",
    title: "Reservation de stands",
    description: "Voir les réservations de stand",
    icon: Briefcase,
    color: "bg-purple-50 text-purple-600 border-purple-200",
    links: [
      { name: "Stand", url: "view/reservationstand", description: "" },
    
    ],
  },
  {
    id: "message",
    title: "visualiser les messages",
    description: "Voir les messages recus",
    icon: Users,
    color: "bg-red-50 text-red-600 border-red-200",
    links: [
      { name: "Message", url: "view/msg", description: "" },
    
    ],
  }
]

export function NavigationGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => {
        const IconComponent = category.icon
        return (
          <Card key={category.id} className="group hover:shadow-lg transition-all duration-200 border-border bg-card">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 rounded-lg ${category.color}`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <CardTitle className="text-lg font-bold text-card-foreground">{category.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{category.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-2">
                {category.links.map((link) => (
                  <Button
                    key={link.name}
                    variant="ghost"
                    className="w-full justify-between h-auto p-3 text-left hover:bg-muted/50"
                    asChild
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <div>
                      
                        <div className="text-xs text-muted-foreground">{link.description}</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
