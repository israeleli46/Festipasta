"use client"
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { useSession ,signOut} from "next-auth/react";
import { Lock } from "lucide-react";

const FestivalHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [choose, setChoose] = useState(false);
 const { data: session } = useSession();

  const navItems = [
  
    { label: " Au Programme", href: "#program" },
        { label: "Infos Pratiques", href: "#info" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-card z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <div className="font-bold text-xl text-festival-green">
            <Link href="/" id="home">
               Festival des Pâtes
            </Link>
         
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-festival-grey hover:text-festival-green transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Link href="/reservation" >
              <Button variant="festival" size="sm">
                Réserver
              </Button>
            </Link>
             <Link href="/stand" id="stands-button" className="text-festival-grey hover:text-festival-green transition-colors">
              <Button variant="ghost" size="sm" >
                Réserver votre stand
              </Button>
            </Link>
           
        {session ? (
        <div>
          Bonjour {session.user?.name} !
          
          <Button className="bg-gray-300 text-white px-4 py-2 full-rounded hover:bg-red-500" size="sm" onClick={() => signOut()}>Déconnexion</Button>
          
        </div>
      ) : (
        <div>
          <Link href="/admin">
          <Button className="bg-gray-300 text-white px-4 py-2 full-rounded hover:bg-red-500" size="sm">Admin <Lock size={18} /></Button></Link>
        </div>
      )}
        
            
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-festival-grey-light">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-festival-grey hover:text-festival-green transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4">
              <Link href="/reservation">
                <Button variant="festival" size="sm" className="w-full">
                  Réserver
                </Button>
              </Link>
              <Link id="stands-button" href="/Stands">
                <Button variant="ghost" size="sm" className="w-full mt-2 text-festival-grey hover:text-festival-green transition-colors" onClick={() => setChoose(!choose)}>
                  Réserver votre stand
                </Button>
              </Link>
               {session ? (
        <div className="text-center mt-3">
          Bonjour {session.user?.name} !
          
          <Button className="bg-gray-300 text-white px-4 py-2 full-rounded hover:bg-red-500" size="sm" onClick={() => signOut()}>Déconnexion</Button>
          
        </div>
      ) : (
        <div className="text-center mt-4 ">
          <Link href="/admin">
          <Button className="bg-gray-300 text-white px-4 py-2 full-rounded hover:bg-red-500" size="sm">Admin <Lock size={12} /></Button></Link>
        </div>
      )}
            </div>
           
          </div>
        )}
      </div>
    </header>
  );
};

export default FestivalHeader;