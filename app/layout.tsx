import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Archivo } from "next/font/google"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
})

export const metadata: Metadata = {
  title: "Prime Tornearia | Usinagem de Precisão em Maringá - PR",
  description:
    "Serviços de tornearia, fresagem e usinagem CNC de alta precisão em Maringá - PR. Qualidade, agilidade e compromisso com prazos. Solicite seu orçamento!",
  openGraph: {
    title: "Prime Tornearia | Usinagem de Precisão em Maringá - PR",
    description:
      "Serviços de tornearia, fresagem e usinagem CNC de alta precisão em Maringá - PR. Qualidade, agilidade e compromisso com prazos. Solicite seu orçamento!",
    type: "website",
    url: "https://siteparatornearia.vercel.app",
    siteName: "Prime Tornearia",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Prime Tornearia - Usinagem de Precisão",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prime Tornearia | Usinagem de Precisão em Maringá - PR",
    description:
      "Serviços de tornearia, fresagem e usinagem CNC de alta precisão em Maringá - PR. Qualidade, agilidade e compromisso com prazos. Solicite seu orçamento!",
    images: ["/og-image.jpg"],
  },
}

export const viewport: Viewport = {
  themeColor: "#f57c00",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${archivo.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
