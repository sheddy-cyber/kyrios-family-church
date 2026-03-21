import type { Metadata } from 'next'
import EventsPageClient from './PageClient'

export const metadata: Metadata = {
  title: 'Events',
  description: 'Upcoming events at Kyrios Family Church, Lakowe, Ibeju-Lekki — Sunday service at 9:00 AM, Wednesday online prayer, Easter Conference April 3–5, and more.',
  openGraph: {
    title: 'Events | Kyrios Family Church',
    description: 'Upcoming events at Kyrios Family Church, Lakowe, Ibeju-Lekki — Sunday service at 9:00 AM, Wednesday online prayer, Easter Conference April 3–5, and more.',
    url: 'https://kyriosfamilychurch.org/events',
  },
  alternates: {
    canonical: 'https://kyriosfamilychurch.org/events',
  },
}

export default function EventsPage() {
  return <EventsPageClient />
}
