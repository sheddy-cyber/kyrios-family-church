import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnnouncementBanner from '@/components/AnnouncementBanner'

const BASE_URL = 'https://kyriosfamilychurch.org'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Kyrios Family Church — Life in All Its Fullness | Lagos, Nigeria',
    template: '%s | Kyrios Family Church',
  },
  description: 'Kyrios Family Church is a growing, Spirit-filled community in Golf Estate, Lakowe, Ibeju-Lekki, Lagos. Join us every Sunday at 9:00 AM for worship, teaching, and genuine community.',
  keywords: ['church in Ibeju-Lekki', 'church Lakowe', 'Kyrios Family Church', 'Sunday service Ibeju-Lekki', 'church Golf Estate Lakowe', 'Christian church Lagos Nigeria', 'Spirit-filled church Lagos', 'church near Lekki Lagos'],
  authors: [{ name: 'Kyrios Family Church' }],
  creator: 'Kyrios Family Church',
  publisher: 'Kyrios Family Church',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  icons: {
    icon: [
      { url: '/favicon.ico',    sizes: 'any' },
      { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: BASE_URL,
    siteName: 'Kyrios Family Church',
    title: 'Kyrios Family Church — Life in All Its Fullness',
    description: 'A Spirit-filled community in Ibeju-Lekki, Lagos. Join us every Sunday — worship, teaching, and genuine community awaits you.',
    images: [{ url: '/kyrios-logo.jpg', width: 1200, height: 630, alt: 'Kyrios Family Church' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kyrios Family Church',
    description: 'A Spirit-filled community in Ibeju-Lekki, Lagos. Join us every Sunday.',
    images: ['/kyrios-logo.jpg'],
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    // Add your Google Search Console verification code here when ready:
    // google: 'your-verification-code',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Local Business structured data — helps Google show church info in search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Church',
              name: 'Kyrios Family Church',
              description: 'A Spirit-filled community rooted in faith, built on love, and called to serve — life in all its fullness.',
              url: BASE_URL,
              logo: `${BASE_URL}/kyrios-logo.jpg`,
              image: `${BASE_URL}/kyrios-logo.jpg`,
              telephone: '+234-806-004-6003',
              email: 'hello@kyriosfamily.org',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Golf Estate, Lakowe',
                addressLocality: 'Ibeju-Lekki',
                addressRegion: 'Lagos',
                addressCountry: 'NG',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 6.4283,
                longitude: 3.4159,
              },
              openingHoursSpecification: [
                { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday',    opens: '09:00', closes: '12:30' },
                { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '18:30', closes: '20:30' },
                { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '17:00' },
              ],
              sameAs: [
                'https://facebook.com/KyriosFamilyChurch',
                'https://instagram.com/kyrios.church',
                'https://youtube.com/@kyriosfamilychurch',
              ],
            }),
          }}
        />
      </head>
      <body>
        <AnnouncementBanner />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
