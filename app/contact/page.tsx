import type { Metadata } from 'next'
import ContactPageClient from './PageClient'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Kyrios Family Church in Lakowe, Ibeju-Lekki, Lagos. Send a message, submit a prayer request, or reach us on WhatsApp: 0806 004 6003.',
  openGraph: {
    title: 'Contact Us | Kyrios Family Church',
    description: 'Get in touch with Kyrios Family Church in Lakowe, Ibeju-Lekki, Lagos. Send a message, submit a prayer request, or reach us on WhatsApp: 0806 004 6003.',
    url: 'https://kyriosfamilychurch.org/contact',
  },
  alternates: {
    canonical: 'https://kyriosfamilychurch.org/contact',
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
