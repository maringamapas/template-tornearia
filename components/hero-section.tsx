import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      <Image
        src="/images/hero-tornearia.jpg"
        alt="Maquina de tornearia CNC em operacao com faiscas de precisao"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-accent/80" />

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto max-w-7xl px-4 py-32 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 animate-fade-in backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Usinagem de Precisão em Maringá - PR
              </span>
            </div>

            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-6xl lg:text-7xl animate-slide-up">
              <span className="text-balance">
                Precisão que transforma{" "}
                <span className="text-primary bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">metal em solução</span>
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Tornearia, fresagem e usinagem CNC com qualidade superior,
              pontualidade na entrega e preços competitivos para sua indústria.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <a
                href="https://wa.me/5544999324635?text=Olá! Gostaria de solicitar um orçamento de site."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="gap-2 bg-gradient-to-r from-primary to-orange-400 px-8 text-primary-foreground hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  <Phone className="h-5 w-5" />
                  Fale Conosco pelo WhatsApp
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              >
                <span><strong>44 99932-4635</strong></span>
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-8 border-t border-primary-foreground/10 pt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="transition-transform duration-300 hover:scale-110">
                <span className="font-display text-3xl font-bold text-primary bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                  15+
                </span>
                <p className="text-sm text-primary-foreground/70">
                  Anos de experiência
                </p>
              </div>
              <div className="h-10 w-px bg-primary-foreground/20" />
              <div className="transition-transform duration-300 hover:scale-110">
                <span className="font-display text-3xl font-bold text-primary bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                  500+
                </span>
                <p className="text-sm text-primary-foreground/70">
                  Projetos entregues
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
