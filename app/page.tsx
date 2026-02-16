import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { Section2 } from "@/components/section-2"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { DifferentialsSection } from "@/components/differentials-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { ContactFooter } from "@/components/contact-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Section2 />
        <AboutSection />
        <ServicesSection />
        <DifferentialsSection />
        <TestimonialsSection />
        <CTASection />
        <ContactFooter />
      </main>
      <WhatsAppFloat />
    </>
  )
}
