import type { Metadata } from 'next'
import SermonsPageClient from './PageClient'
import Parser from 'rss-parser'

export const revalidate = 3600 // revalidate at most every hour

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

// Replace this with your actual podcast RSS feed URL
const PODCAST_RSS_URL = process.env.PODCAST_RSS_URL || 'https://feeds.simplecast.com/54nAGcIl' // Placeholder feed (The Daily by NYT as an example, or any other)

export default async function SermonsPage() {
  let sermons: any[] = []
  
  try {
    const parser = new Parser({
      timeout: 5000, // 5 seconds timeout to prevent Next.js build hanging
    })
    const feed = await parser.parseURL(PODCAST_RSS_URL)
    
    sermons = feed.items.map((item: any, index: number) => {
      // Map RSS fields to our UI fields
      return {
        id: item.guid || String(index),
        title: item.title || 'Untitled',
        // Try to extract speaker/series if it's encoded in the title or itunes tags, fallback to defaults
        series: item.itunes?.season ? `Season ${item.itunes.season}` : 'General Series',
        speaker: item.itunes?.author || item.creator || 'Kyrios Family Church',
        date: item.pubDate ? new Date(item.pubDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : '',
        duration: item.itunes?.duration || '00:00',
        scripture: '', // Usually podcasts don't have this as a standard tag, you can add it to descriptions
        description: item.contentSnippet || item.content || '',
        audioUrl: item.enclosure?.url || '',
      }
    })
  } catch (error) {
    console.error('Error fetching podcast feed:', error)
  }

  return <SermonsPageClient initialSermons={sermons} />
}
