import type { Metadata } from 'next'
import HomePageClient from './HomePageClient'

export const metadata: Metadata = {
  title: 'Kyrios Family Church — Life in All Its Fullness | Lagos, Nigeria',
  description: 'Kyrios Family Church is a growing, Spirit-filled community in Golf Estate, Lakowe, Ibeju-Lekki, Lagos. Sunday service at 9:00 AM. All are welcome.',
  keywords: ['church in Ibeju-Lekki', 'church Lakowe Lagos', 'Kyrios Family Church', 'Sunday service 9am Lagos', 'Christian church Ibeju-Lekki', 'church Golf Estate Lakowe', 'Spirit-filled church Lagos'],
  alternates: {
    canonical: 'https://kyriosfamilychurch.org',
  },
  openGraph: {
    title: 'Kyrios Family Church — Life in All Its Fullness',
    description: 'A growing Spirit-filled community in Golf Estate, Lakowe, Ibeju-Lekki. Sunday service at 9:00 AM. Wednesday online prayer. All are welcome.',
    url: 'https://kyriosfamilychurch.org',
    images: [{ url: '/kyrios-logo.jpg', width: 1200, height: 630, alt: 'Kyrios Family Church Lagos' }],
  },
}

export default function HomePage() {
  return <HomePageClient />
}
