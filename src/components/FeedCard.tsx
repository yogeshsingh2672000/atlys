import React from 'react'
import Avatar from '@ui/Avatar'
import EmojiBadge from '@ui/EmojiBadge'
import IconButton from '@ui/IconButton'
import { Name, Timestamp, Paragraph } from '@ui/Text'

type FeedCardProps = {
  avatarUrl: string
  author: string
  timeAgo: string
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
      <div className="bg-white rounded-xl p-2 bg-gray-100">
        <div >
          <div className='flex gap-3'>
            <Avatar src={avatarUrl} alt={author} />
            <div className="flex-1">
              <div className="flex flex-col">
                <Name>{author}</Name>
                <Timestamp>{timeAgo}</Timestamp>
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
          {/* heart */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
          </svg>
        </IconButton>
        <IconButton ariaLabel="comment" onClick={notImplemented}>
          {/* comment bubble */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10z" />
          </svg>
        </IconButton>
        <IconButton ariaLabel="send" onClick={notImplemented}>
          {/* send */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 2L11 13" />
            <path d="M22 2l-7 20-4-9-9-4 20-7z" />
          </svg>
        </IconButton>
      </div>
    </div>
  )
}


