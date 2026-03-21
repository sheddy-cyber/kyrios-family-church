import type { Metadata } from 'next'
import SermonsPageClient from './PageClient'

export const metadata: Metadata = {
  title: 'Sermons',
  description: 'Watch and listen to sermons from Kyrios Family Church. Browse our full library of messages by series, speaker, or scripture.',
  openGraph: {
    title: 'Sermons | Kyrios Family Church',
    description: 'Watch and listen to sermons from Kyrios Family Church. Browse our full library of messages by series, speaker, or scripture.',
    url: 'https://kyriosfamilychurch.org/sermons',
  },
  alternates: {
    canonical: 'https://kyriosfamilychurch.org/sermons',
  },
}

export default function SermonsPage() {
  return <SermonsPageClient />
}
