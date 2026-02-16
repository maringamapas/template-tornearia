import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Gerente de Produção",
    company: "Metalúrgica Aurora",
    content:
      "A Prime Tornearia superou nossas expectativas em qualidade e prazo. As peças chegaram com acabamento impecável e dentro do cronograma. Parceria sólida!",
    rating: 5,
  },
  {
    name: "Fernanda Lima",
    role: "Engenheira Mecânica",
    company: "Indústria Paranaense",
    content:
      "Excelente atendimento técnico. A equipe entendeu perfeitamente nosso desenho e entregou peças com tolerâncias perfeitas. Recomendo sem hesitar.",
    rating: 5,
  },
  {
    name: "Roberto Alves",
    role: "Diretor Industrial",
    company: "Agro Equipamentos PR",
    content:
      "Trabalhamos com a Prime há mais de 3 anos. A consistência na qualidade e a pontualidade nas entregas são impressionantes. Nosso fornecedor número um.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="bg-accent py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Depoimentos
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-accent-foreground md:text-4xl">
            <span className="text-balance">
              O que nossos clientes dizem
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-accent-foreground/60">
            A confiança dos nossos parceiros é o nosso maior reconhecimento.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="rounded-2xl border border-accent-foreground/10 bg-accent-foreground/5 p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 backdrop-blur-sm animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={`star-${testimonial.name}-${i}`}
                    className="h-5 w-5 fill-primary text-primary transition-transform duration-300 hover:scale-125"
                  />
                ))}
              </div>
              <blockquote className="mt-4 leading-relaxed text-accent-foreground/90">
                {`"${testimonial.content}"`}
              </blockquote>
              <div className="mt-6 border-t border-accent-foreground/10 pt-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-orange-400 text-lg font-bold text-primary-foreground shadow-lg transition-transform duration-300 hover:scale-110">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-accent-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-accent-foreground/70">
                      {testimonial.role} - {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
