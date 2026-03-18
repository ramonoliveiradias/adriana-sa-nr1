import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2">
            <div className="flex flex-col leading-none">
              <span className="text-lg font-black text-gray-900 tracking-tight leading-tight">SÁ GESTÃO E</span>
              <span className="text-lg font-black text-blue-600 tracking-tight leading-tight">DESENVOLVIMENTO HUMANO</span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 text-sm font-semibold"
              onClick={() => window.open("https://wa.me/5571999334894", "_blank")}
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-gray-600"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 pb-4">
          <div className="px-4 pt-2 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm font-medium text-gray-600 hover:text-gray-900 border-b border-gray-50"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => window.open("https://wa.me/5571999334894", "_blank")}
              >
                Fale Conosco
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}