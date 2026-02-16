"use client"

import { Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-orange-400 py-24">
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
      <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
        <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-5xl animate-slide-up">
          <span className="text-balance">
            Pronto para dar forma ao seu projeto?
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Entre em contato agora e receba um orçamento personalizado para suas
          peças. Nossa equipe está pronta para transformar suas ideias em
          realidade.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-scale-in" style={{ animationDelay: '0.4s' }}>
          <a
            href="https://wa.me/5544999324635?text=Olá! Gostaria de solicitar um orçamento de site."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className={`gap-2 bg-accent px-10 text-lg text-accent-foreground hover:bg-accent/90 hover:scale-110 hover:shadow-2xl transition-all duration-500 rounded-full ${
                isVisible ? "scale-100" : "scale-95"
              }`}
            >
              <MessageCircle className="h-5 w-5" />
              Chamar no WhatsApp
            </Button>
          </a>
          <a href="tel:+5544999324635">
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-primary-foreground/30 px-10 text-lg text-primary-foreground hover:bg-primary-foreground/10 bg-transparent hover:scale-110 transition-all duration-500 rounded-full backdrop-blur-sm"
            >
              <Phone className="h-5 w-5" />
              (44) 99932-4635
            </Button>
          </a>
        </div>

        <p className="mt-6 text-sm text-primary-foreground/80 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          Resposta em menos de 24h. Orçamento sem compromisso.
        </p>
      </div>
    </section>
  )
}
