import type { Metadata } from 'next'
import AboutPageClient from './PageClient'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Kyrios Family Church — our story, mission, beliefs, and leadership team. Founded in 2019 in Lakowe, Ibeju-Lekki, Lagos.',
  openGraph: {
    title: 'About Us | Kyrios Family Church',
    description: 'Learn about Kyrios Family Church — our story, mission, beliefs, and leadership team. Founded in 2019 in Lakowe, Ibeju-Lekki, Lagos.',
    url: 'https://kyriosfamilychurch.org/about',
  },
  alternates: {
    canonical: 'https://kyriosfamilychurch.org/about',
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
