'use client'

import { FC } from 'react'
import { ErrorBoundary as ErrorBoundaryLib } from 'react-error-boundary'

const FallbackComponent: FC = () => {
  return <div className="flex w-full flex-col py-6 center">
    <span>出了点问题，</span>
    <button onClick={() => window.location.reload()}>刷新页面</button>
  </div>
}

export const ErrorBoundary: FCC = ({ children }) => {
  return (
    <ErrorBoundaryLib
      FallbackComponent={FallbackComponent}
      onError={(err) => console.error(err)}
    >
      {children}
    </ErrorBoundaryLib>
  )
}