import React, { useMemo, useState } from 'react'
import { useAuthGate } from '@components/AuthGate'
import ToolbarButton from '@ui/ToolbarButton'
import FooterIcon from '@ui/FooterIcon'
import UploadIcon from '@svgs/Upload'
import MicIcon from '@svgs/MicIcon'
import VideoIcon from '@svgs/VideoIcon'
import ListBulletedIcon from '@svgs/ListBulletedIcon'
import ListNumberedIcon from '@svgs/ListNumberedIcon'
import QuotesIcon from '@svgs/QuotesIcon'

type FeedItem = {
  id: number
  avatarUrl: string
  author: string
  timeAgo: number
  text: string
}

type Props = {
  feedItems: FeedItem[]
  setFeedItems: React.Dispatch<React.SetStateAction<FeedItem[]>>
}

export default function CreateFeed({ feedItems, setFeedItems }: Props) {
  const [text, setText] = useState('')
  const { requireAuth } = useAuthGate()

  const notImplemented = (e?: React.MouseEvent) => {
    e?.preventDefault()
    alert('function not implemented')
  }

  const charCount = text.length
  const nextId = useMemo(
    () => (feedItems.length ? Math.max(...feedItems.map(i => i.id)) + 1 : 1),
    [feedItems]
  )

  const onSend = () => {
    const content = text.trim()
    if (!content) return
    const newItem: FeedItem = {
      id: nextId,
      avatarUrl:
        'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=200&auto=format&fit=crop',
      author: 'You',
      timeAgo: Date.now(),
      text: content,
    }
    setFeedItems(prev => [newItem, ...prev])
    setText('')
  }

  return (
    <div className='w-full max-w-[720px] p-2 bg-gray-100 rounded-3xl'>
        <div className="w-full rounded-3xl bg-white p-3 shadow-sm ring-1 ring-black/5">
          {/* Toolbar */}
          <div className="flex items-center gap-2 px-2 pb-2">
            <div className='flex gap-1 bg-gray-100 p-1 rounded-lg'>
            {/* Paragraph dropdown */}
            <button
              onClick={notImplemented}
              className="cursor-pointer mr-6 h-9 rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 hover:bg-slate-50 active:scale-[0.98] transition shadow-sm"
            >
              Paragraph ▾
            </button>
                {/* Formatting buttons */}
                <ToolbarButton onClick={notImplemented} label="bold" className="bg-gray-100 hover:bg-white">
                  <span className="font-semibold">B</span>
                </ToolbarButton>
                <ToolbarButton onClick={notImplemented} label="italic" className="bg-gray-100 hover:bg-white">
                  <span className="italic">I</span>
                </ToolbarButton>
                <ToolbarButton onClick={notImplemented} label="underline" className="bg-gray-100 hover:bg-white">
                  <span className="underline">U</span>
                </ToolbarButton>
                <div className="border-t sm:border-t-0 sm:border-s border-gray-300 "></div>
        
                <ToolbarButton onClick={notImplemented} label="unordered list" className="bg-gray-100 hover:bg-white">
                <ListBulletedIcon/>
                </ToolbarButton>
                <ToolbarButton onClick={notImplemented} label="ordered list" className="bg-gray-100 hover:bg-white">
                  <ListNumberedIcon/>
                </ToolbarButton>
                <div className="border-t sm:border-t-0 sm:border-s border-gray-300 "></div>
                <ToolbarButton onClick={notImplemented} label="code" className="bg-gray-100 hover:bg-white">
                  <QuotesIcon/>
                </ToolbarButton>
                {/* Code */}
                <ToolbarButton onClick={notImplemented} label="code" className="bg-gray-100 hover:bg-white">
                  <span className="font-mono text-xs">{'<>'}</span>
                </ToolbarButton>
            </div>
            {/* Spacer */}
            <div className="ml-auto flex items-center gap-2">
              {/* Count box */}
              <div className="h-8 min-w-10 rounded-lg border border-slate-200 bg-white px-2 text-sm text-slate-600 grid place-items-center shadow-sm">
                {charCount}
              </div>
              {/* Trash */}
              <button
                onClick={notImplemented}
                className="cursor-pointer h-9 w-9 rounded-lg bg-rose-100 text-rose-600 hover:bg-rose-200 active:scale-95 grid place-items-center transition shadow-sm"
                aria-label="delete"
                title="delete"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 6h18"/>
                  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                  <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                  <path d="M10 11v6"/>
                  <path d="M14 11v6"/>
                </svg>
              </button>
            </div>
          </div>
          {/* Input area */}
          <div className="flex items-start mx-[-12px] gap-2 bg-white px-3 py-2 border-b-2 border-slate-200">
            {/* Left emoji inside input */}
            <div className="grid h-7 w-7 place-items-center rounded-full bg-yellow-100 ring-1 ring-black/5">
              <span className="text-lg">😊</span>
            </div>
            <textarea
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder="How are you feeling today?"
              className="min-h-[88px] flex-1 resize-y bg-transparent outline-none placeholder:text-slate-400 text-[15px] leading-6"
            />
          </div>
          {/* Footer actions */}
          <div className="mt-2 flex items-center justify-between px-1">
            <div className="flex items-center gap-3">
              {/* Add button in rounded square with subtle bg */}
              <FooterIcon onClick={notImplemented} label="add" className="h-9 w-9 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200">
                <UploadIcon/>
              </FooterIcon>
              {/* Microphone outline */}
              <FooterIcon onClick={notImplemented} label="voice" className="h-9 w-9 rounded-[10px] text-slate-600 hover:bg-slate-100">
                <MicIcon/>
              </FooterIcon>
              {/* Rounded square clip icon */}
              <FooterIcon onClick={notImplemented} label="attach" className="h-9 w-9 rounded-[10px] rotate-90 text-slate-600 hover:bg-slate-100">
                <VideoIcon/>
              </FooterIcon>
            </div>
            <button
              onClick={() => requireAuth(onSend)}
              disabled={!text.trim()}
              className="cursor-pointer inline-flex items-center justify-center hover:bg-slate-200 rounded-full pl-3 p-2 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition"
              aria-label="send"
              title="Send"
            >
              {/* solid paper plane icon to match reference */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="rgb(79 70 229)" aria-hidden="true">
                <path d="M2.94 3.32a.9.9 0 0 1 1.02-.14l17.7 8.04a.9.9 0 0 1 0 1.64l-17.7 8.04a.9.9 0 0 1-1.24-1.05l2.27-7.38c.08-.27.29-.49.56-.57L13.2 12 6.55 9.1a.9.9 0 0 1-.56-.57L2.72 4.37a.9.9 0 0 1 .22-.99z"/>
              </svg>
            </button>
          </div>
        </div>
    </div>
  )
}
