import type { Metadata } from 'next'
import VisitPageClient from './PageClient'

export const metadata: Metadata = {
  title: 'Plan Your Visit',
  description: 'Planning your first visit to Kyrios Family Church in Golf Estate, Lakowe, Ibeju-Lekki? Sunday service at 9:00 AM. Find our location, what to expect, and how to connect.',
  openGraph: {
    title: 'Plan Your Visit | Kyrios Family Church',
    description: 'Planning your first visit to Kyrios Family Church in Golf Estate, Lakowe, Ibeju-Lekki? Sunday service at 9:00 AM. Find our location, what to expect, and how to connect.',
    url: 'https://kyriosfamilychurch.org/visit',
  },
  alternates: {
    canonical: 'https://kyriosfamilychurch.org/visit',
  },
}

export default function VisitPage() {
  return <VisitPageClient />
}
