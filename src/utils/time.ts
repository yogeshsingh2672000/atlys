export function formatTimeAgo(epochMs: number): string {
  const now = Date.now()
  const diff = Math.max(0, now - epochMs)

  const sec = Math.floor(diff / 1000)
  if (sec < 15) return `just now`

  if (sec < 60) return `${sec} seconds ago`

  const min = Math.floor(sec / 60)
  if (min < 60) return `${min} ${min === 1 ? 'minute' : 'minutes'} ago`

  const hr = Math.floor(min / 60)
  if (hr < 24) return `${hr} ${hr === 1 ? 'hour' : 'hours'} ago`

  const day = Math.floor(hr / 24)
  if (day < 7) return `${day} ${day === 1 ? 'day' : 'days'} ago`

  const week = Math.floor(day / 7)
  if (week < 4) return `${week} ${week === 1 ? 'week' : 'weeks'} ago`

  const month = Math.floor(day / 30)
  if (month < 12) return `${month} ${month === 1 ? 'month' : 'months'} ago`

  const year = Math.floor(day / 365)
  return `${year} ${year === 1 ? 'year' : 'years'} ago`
}


