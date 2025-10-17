import React from 'react'
import Avatar from '@ui/Avatar'
import EmojiBadge from '@ui/EmojiBadge'
import IconButton from '@ui/IconButton'
import { Name, Timestamp, Paragraph } from '@ui/Text'
import TimeAgo from '@ui/TimeAgo'

type FeedCardProps = {
  avatarUrl: string
  author: string
  timeAgo: number | string
  text: string
}

export default function FeedCard({ avatarUrl, author, timeAgo, text }: FeedCardProps) {

  const notImplemented = (e?: React.MouseEvent) => {
    e?.preventDefault()
    console.log('function not implemented')
    alert('function not implemented')
  }

  return (
    <div className="w-full max-w-[720px] rounded-xl bg-gray-50 px-2 pt-2 pb-4 transition-all duration-200 hover:shadow-xl">
      <div className="bg-white rounded-xl p-2 bg-gray-100 border border-gray-100">
        <div >
          <div className='flex gap-3'>
            <Avatar src={avatarUrl} alt={author} />
            <div className="flex-1">
              <div className="flex flex-col">
                <Name>{author}</Name>
                <Timestamp>
                  {typeof timeAgo === 'number' ? (
                    <TimeAgo epochMs={timeAgo} />
                  ) : (
                    timeAgo
                  )}
                </Timestamp>
              </div>
            </div>
          </div>
          <div className="mt-2 flex items-start gap-3">
            <EmojiBadge onClick={notImplemented} />
            <Paragraph className="flex-1">
              {text}
            </Paragraph>
          </div>
        </div>

      </div>
      <div className="mt-4 flex items-center gap-2">
        <IconButton ariaLabel="like" onClick={notImplemented}>
          {/* heart outline (rounded) */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61c-1.86-1.86-4.88-1.86-6.74 0L12 6.67l-2.1-2.06c-1.86-1.86-4.88-1.86-6.74 0-1.86 1.86-1.86 4.88 0 6.74L12 21l8.84-9.52c1.86-1.86 1.86-4.88 0-6.87z"/>
          </svg>
        </IconButton>
        <IconButton ariaLabel="comment" onClick={notImplemented}>
          {/* rounded chat bubble with two lines */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 20l-3 2v-4a8 8 0 0 1-2-5.5C2 7.47 5.58 4 10 4h4c4.42 0 8 3.47 8 8s-3.58 8-8 8H7z"/>
            <path d="M8.5 10.75h7"/>
            <path d="M8.5 14h5"/>
          </svg>
        </IconButton>
        <IconButton ariaLabel="send" onClick={notImplemented}>
          {/* paper plane */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 2 11 13"/>
            <path d="M22 2 15 22l-4-9-9-4 20-7z"/>
          </svg>
        </IconButton>
      </div>
    </div>
  )
}


