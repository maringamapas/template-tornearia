"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-accent/98 backdrop-blur-lg shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary">
              <span className="font-display text-lg font-bold text-primary-foreground">
                P
              </span>
            </div>
            <div>
              <span className="font-display text-xl font-bold text-primary-foreground">
                Prime
              </span>
              <span className="block text-xs uppercase tracking-widest text-primary-foreground/70">
                Tornearia
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-2.5 text-sm font-medium text-primary-foreground/80 transition-all duration-300 hover:text-primary hover:bg-primary/10 hover:scale-105"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="https://wa.me/5544999324635"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <Phone className="h-4 w-4" />
                Solicitar Orçamento
              </Button>
            </a>
          </div>

          <button
            type="button"
            className="rounded-md p-2 text-primary-foreground lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="bg-accent/98 backdrop-blur-lg shadow-2xl lg:hidden animate-slide-up">
          <nav className="flex flex-col px-4 pb-6">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="border-b border-accent-foreground/10 py-4 text-sm font-medium text-primary-foreground/80 transition-all duration-300 hover:text-primary hover:pl-2"
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5544999324635"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4"
            >
              <Button className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <Phone className="h-4 w-4" />
                Solicitar Orçamento
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
