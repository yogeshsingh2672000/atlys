import React, { useMemo, useState } from 'react'
import { useAuthGate } from '@components/AuthGate'
import ToolbarButton from '@ui/ToolbarButton'
import FooterIcon from '@ui/FooterIcon'

type FeedItem = {
  id: number
  avatarUrl: string
  author: string
  timeAgo: string
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
      timeAgo: 'just now',
      text: content,
    }
    setFeedItems(prev => [newItem, ...prev])
    setText('')
  }

  return (
    <div className="w-full max-w-[720px] rounded-3xl bg-white p-3 shadow-xl ring-1 ring-black/5">
      {/* Toolbar */}
      <div className="flex items-center gap-2 px-2 pb-2">
        {/* Paragraph dropdown */}
        <button
          onClick={notImplemented}
          className="cursor-pointer h-9 rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 hover:bg-slate-50 active:scale-[0.98] transition"
        >
          Paragraph ▾
        </button>

        {/* Formatting buttons */}
        <ToolbarButton onClick={notImplemented} label="bold">
          <b>B</b>
        </ToolbarButton>
        <ToolbarButton onClick={notImplemented} label="italic">
          <i>I</i>
        </ToolbarButton>
        <ToolbarButton onClick={notImplemented} label="underline">
          <u>U</u>
        </ToolbarButton>
        <ToolbarButton onClick={notImplemented} label="unordered list">
          <div className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            <span className="h-0.5 w-4 bg-current" />
          </div>
          <div className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            <span className="h-0.5 w-4 bg-current" />
          </div>
        </ToolbarButton>
        <ToolbarButton onClick={notImplemented} label="ordered list">
          <div className="flex items-center gap-1">
            <span className="text-[11px]">1.</span>
            <span className="h-0.5 w-4 bg-current" />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[11px]">2.</span>
            <span className="h-0.5 w-4 bg-current" />
          </div>
        </ToolbarButton>

        {/* Code */}
        <ToolbarButton onClick={notImplemented} label="code">
          <span className="font-mono text-xs">{'<>'}</span>
        </ToolbarButton>

        {/* Spacer */}
        <div className="ml-auto flex items-center gap-2">
          {/* Count box */}
          <div className="h-8 min-w-10 rounded-lg border border-slate-200 bg-white px-2 text-sm text-slate-600 grid place-items-center">
            {charCount}
          </div>

          {/* Trash */}
          <button
            onClick={notImplemented}
            className="cursor-pointer h-8 w-8 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-100 active:scale-95 grid place-items-center transition"
            aria-label="delete"
            title="delete"
          >
            🗑️
          </button>
        </div>
      </div>

      {/* Input area */}
      <div className="flex items-start gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 focus-within:ring-2 focus-within:ring-slate-200">
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
        <div className="flex items-center gap-2">
          <FooterIcon onClick={notImplemented} label="add">
            +
          </FooterIcon>
          <FooterIcon onClick={notImplemented} label="voice">
            🎤
          </FooterIcon>
          <FooterIcon onClick={notImplemented} label="attach">
            📎
          </FooterIcon>
        </div>

        <button
          onClick={() => requireAuth(onSend)}
          disabled={!text.trim()}
          className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-white shadow hover:bg-indigo-700 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition"
        >
          <span>Send</span>
          <span className="text-base">➤</span>
        </button>
      </div>
    </div>
  )
}
