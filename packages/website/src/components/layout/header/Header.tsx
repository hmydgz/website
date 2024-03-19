import { ErrorBoundary } from "@/components/common/ErrorBoundary"
import { FC } from "react"
import { clsx } from 'clsx'
import Image from "next/image"
import style from './header.module.css'
import { UserAuth } from "./internal/UserAuth";

export const Header: FC = () => {
  return (<ErrorBoundary>
    <HeaderCtx />
  </ErrorBoundary>)
}

const HeaderWrapper: FCC = ({ children }) => {
  return (
    <div className="relative">
      <div className={clsx('absolute inset-0 z-[1] backdrop-blur-md backdrop-saturate-150 border-b', style.bg)}></div>
      <div className="relative z-[2] max-w-5xl mx-auto">{children}</div>
    </div>
  )
}

const HeaderCtx: FC = () => {
  return <header className="sticky top-0 left-0 w-full z-[2]">
    <HeaderWrapper>
      <div className="flex items-center py-3 px-5">
        <Image src={'https://avatars.githubusercontent.com/u/56059675?v=4'} height={40} width={40} alt="" className="rounded-full" />
        <div className="flex-1"></div>
        <div>
          <UserAuth />
        </div>
      </div>
    </HeaderWrapper>
  </header>
}