import { MapPin, Mail, Phone, ArrowRight, Instagram, Facebook, Twitter, Linkedin } from "lucide-react"

export function ContactFooter() {
  return (
    <section className="w-full bg-neutral-900">
      <div className="relative w-full px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          <div className="relative z-10 py-10 sm:py-12 md:py-16">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Left Column - Brand & Contact */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-full bg-white/10 ring-1 ring-white/20 flex items-center justify-center">
                    <span className="text-xl font-bold text-white">P</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white tracking-tight">Prime Tornearia</h3>
                    <p className="text-white/60 text-sm">Precisão e qualidade em usinagem</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-white/60" strokeWidth={1.5} />
                    <span className="text-white/80 text-sm">Maringá, PR • Região Metropolitana</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-white/60" strokeWidth={1.5} />
                    <a href="mailto:contato@primetornearia.com.br" className="text-white/80 hover:text-white transition-colors text-sm">
                      contato@primetornearia.com.br
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-white/60" strokeWidth={1.5} />
                    <a href="tel:+5544999324635" className="text-white/80 hover:text-white transition-colors text-sm">
                      (44) 99932-4635
                    </a>
                  </div>
                </div>

                {/* CTA Button */}
                <a 
                  href="https://wa.me/5544999324635" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-400 hover:to-orange-300 text-white px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Solicite um Orçamento
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </a>
              </div>

              {/* Right Column - Links & Social */}
              <div className="lg:col-span-5">
                <div className="grid grid-cols-2 gap-8">
                  {/* Services Links */}
                  <div>
                    <h4 className="text-white font-medium mb-4">Serviços</h4>
                    <ul className="space-y-2">
                      <li>
                        <a href="#servicos" className="text-white/60 hover:text-white transition-colors text-sm">
                          Tornearia CNC
                        </a>
                      </li>
                      <li>
                        <a href="#servicos" className="text-white/60 hover:text-white transition-colors text-sm">
                          Usinagem
                        </a>
                      </li>
                      <li>
                        <a href="#servicos" className="text-white/60 hover:text-white transition-colors text-sm">
                          Fresamento
                        </a>
                      </li>
                      <li>
                        <a href="#servicos" className="text-white/60 hover:text-white transition-colors text-sm">
                          Projetos Sob Medida
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Quick Links */}
                  <div>
                    <h4 className="text-white font-medium mb-4">Links Rápidos</h4>
                    <ul className="space-y-2">
                      <li>
                        <a href="#inicio" className="text-white/60 hover:text-white transition-colors text-sm">
                          Início
                        </a>
                      </li>
                      <li>
                        <a href="#sobre" className="text-white/60 hover:text-white transition-colors text-sm">
                          Sobre Nós
                        </a>
                      </li>
                      <li>
                        <a href="#diferenciais" className="text-white/60 hover:text-white transition-colors text-sm">
                          Diferenciais
                        </a>
                      </li>
                      <li>
                        <a href="#contato" className="text-white/60 hover:text-white transition-colors text-sm">
                          Contato
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8">
                  <h4 className="text-white font-medium mb-4">Redes Sociais</h4>
                  <div className="flex gap-3">
                    <a 
                      href="#" 
                      className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10 ring-1 ring-white/20 text-white/80 hover:text-white hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-400 transition-all duration-300 hover:scale-110 hover:rotate-12"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-4 w-4" strokeWidth={1.5} />
                    </a>
                    <a 
                      href="#" 
                      className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10 ring-1 ring-white/20 text-white/80 hover:text-white hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-400 transition-all duration-300 hover:scale-110 hover:rotate-12"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-4 w-4" strokeWidth={1.5} />
                    </a>
                    <a 
                      href="#" 
                      className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10 ring-1 ring-white/20 text-white/80 hover:text-white hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-400 transition-all duration-300 hover:scale-110 hover:rotate-12"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-4 w-4" strokeWidth={1.5} />
                    </a>
                    <a 
                      href="#" 
                      className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10 ring-1 ring-white/20 text-white/80 hover:text-white hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-400 transition-all duration-300 hover:scale-110 hover:rotate-12"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" strokeWidth={1.5} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 mt-10 pt-6 max-w-7xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-white/50 text-xs">© 2025 Prime Tornearia. Todos os direitos reservados.</p>
                <div className="flex flex-col sm:flex-row items-center gap-6 text-xs">
                  <a href="#" className="text-white/50 hover:text-white/80 transition-colors">
                    Política de Privacidade
                  </a>
                  <a href="#" className="text-white/50 hover:text-white/80 transition-colors">
                    Termos de Serviço
                  </a>
                  <a 
                    href="https://webstudiomga.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-400 transition-colors"
                  >
                    WebStudio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
