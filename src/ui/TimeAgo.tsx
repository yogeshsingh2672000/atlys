import React, { useEffect, useState } from 'react'
import { formatTimeAgo } from '@utils/time'

type Props = {
  epochMs: number
  className?: string
}

function TimeAgoBase({ epochMs, className = '' }: Props) {
  const [, setTick] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setTick(t => (t + 1) % 1_000_000), 10_000)
    return () => clearInterval(id)
  }, [])

  return <span className={className}>{formatTimeAgo(epochMs)}</span>
}

const TimeAgo = React.memo(TimeAgoBase)
export default TimeAgo


