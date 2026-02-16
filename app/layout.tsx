import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Archivo } from "next/font/google"
import { SITE_CONFIG } from "@/src/config/site-config"

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
  title: `${SITE_CONFIG.client.name} | ${SITE_CONFIG.hero.badge}`,
  description: SITE_CONFIG.client.description,
  keywords: SITE_CONFIG.seo.keywords,
  openGraph: {
    title: `${SITE_CONFIG.client.name} | ${SITE_CONFIG.hero.badge}`,
    description: SITE_CONFIG.client.description,
    type: "website",
    url: `https://${SITE_CONFIG.client.domain}`,
    siteName: SITE_CONFIG.client.name,
    images: [
      {
        url: SITE_CONFIG.seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.client.name} - ${SITE_CONFIG.footer.description}`,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.client.name} | ${SITE_CONFIG.hero.badge}`,
    description: SITE_CONFIG.client.description,
    images: [SITE_CONFIG.seo.ogImage],
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
