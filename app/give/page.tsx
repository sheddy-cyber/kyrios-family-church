import type { Metadata } from 'next'
import GivePageClient from './PageClient'

export const metadata: Metadata = {
  title: 'Give',
  description: 'Give to Kyrios Family Church, Lakowe, Ibeju-Lekki. Support our building fund, weekly ministry, and community outreach. Give online or via Providus Bank.',
  openGraph: {
    title: 'Give | Kyrios Family Church',
    description: 'Give to Kyrios Family Church, Lakowe, Ibeju-Lekki. Support our building fund, weekly ministry, and community outreach. Give online or via Providus Bank.',
    url: 'https://kyriosfamilychurch.org/give',
  },
  alternates: {
    canonical: 'https://kyriosfamilychurch.org/give',
  },
}

export default function GivePage() {
  return <GivePageClient />
}
