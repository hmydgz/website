import { ErrorBoundary } from "@/components/common/ErrorBoundary"
import { FC } from "react"

export const Header: FC = () => {
  return (<ErrorBoundary>
    <HeaderCtx />
  </ErrorBoundary>)
}

const HeaderCtx: FC = () => {
  return <header>HeaderCtx</header>
}