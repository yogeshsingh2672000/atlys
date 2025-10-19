import React from 'react'

export class ErrorBoundary extends React.Component<React.PropsWithChildren, { error?: Error }> {
  state = { error: undefined as Error | undefined }
  static getDerivedStateFromError(error: Error) { return { error } }
  
  render() {
    if (this.state.error) return <div className="p-6 text-rose-700">Something went wrong.</div>
    return this.props.children
  }
}