'use client'

import dynamic from "next/dynamic"
import { UserAuthFormIcon } from "./UserAuthFormIcon"
import { UserArrowLeft } from "@/components/icons/UserArrowLeft"
import { ErrorBoundary } from "@/components/common/ErrorBoundary"
import { ClearCookieToken, SetCookieToken } from "./SetCookieToken"

const UserButton = dynamic(() => import('@clerk/nextjs').then((mod) => mod.UserButton))
const SignedOut = dynamic(() => import('@clerk/nextjs').then((mod) => mod.SignedOut))
const SignInButton = dynamic(() => import('@clerk/nextjs').then((mod) => mod.SignInButton))
const SignedIn = dynamic(() => import('@clerk/nextjs').then((mod) => mod.SignedIn))

export function UserAuth() {
  return <ErrorBoundary>
    <SignedIn>
      <div className="relative">
        <UserButton afterSignOutUrl="/" />
        <UserAuthFormIcon className="absolute -bottom-1 -right-1" />
      </div>
      <SetCookieToken />
    </SignedIn>
    <SignedOut>
      <ClearCookieToken />
      <SignInButton mode="modal">
        <div className="w-8 h-8 rounded-full border border-gray-400/40 flex items-center justify-center text-white/80">
          <UserArrowLeft />
        </div>
      </SignInButton>
    </SignedOut>
  </ErrorBoundary>
}