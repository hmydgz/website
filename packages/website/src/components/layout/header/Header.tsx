import { ErrorBoundary } from "@/components/common/ErrorBoundary"
import { FC } from "react"
import { clsx } from 'clsx'
import Image from "next/image"
import style from './header.module.css'
import { UserAuth } from "./internal/UserAuth";

export const Header: FC = () => {
  return (<ErrorBoundary>
    {/* @ts-expect-error */}
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

async function getAvatar() {
  const res = await fetch(`https://api.github.com/users/${process.env.GITHUB_USERNAME}`, { cache: 'force-cache' })
  const { avatar_url } = await res.json()
  return avatar_url
}

const HeaderCtx = async () => {
  const avatarUrl = await getAvatar()
  return <header className="sticky top-0 left-0 w-full z-[2]">
    <HeaderWrapper>
      <div className="flex items-center justify-between py-3 px-5">
        <Image src={avatarUrl} height={40} width={40} alt="" className="rounded-full" />
        <UserAuth />
      </div>
    </HeaderWrapper>
  </header>
}