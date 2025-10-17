import { useState } from 'react'
import FeedCard from '@components/FeedCard'
import initialFeedItems from '@data/index'
import CreateFeed from '@components/CreateFeed'

interface FeedItem {
  id: number
  avatarUrl: string
  author: string
  timeAgo: number
  text: string
}

export default function Feed() {
  const [feedItems, setFeedItems] = useState<FeedItem[]>(initialFeedItems)
  

  return (
  <div className='flex flex-col gap-6'>
    <CreateFeed feedItems={feedItems} setFeedItems={setFeedItems} />
    {feedItems.map((item: FeedItem) => (
      <FeedCard key={item.id}
        {...item}
      />
    ))}
  </div>
  )
}


