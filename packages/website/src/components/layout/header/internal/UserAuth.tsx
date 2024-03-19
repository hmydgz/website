'use client'

import dynamic from "next/dynamic"
import { useUser } from "@clerk/nextjs"
import { UserAuthFormIcon } from "./UserAuthFormIcon"
import { UserArrowLeft } from "@/components/icons/UserArrowLeft"

const UserButton = dynamic(() => import('@clerk/nextjs').then((mod) => mod.UserButton))
const SignedOut = dynamic(() => import('@clerk/nextjs').then((mod) => mod.SignedOut))
const SignInButton = dynamic(() => import('@clerk/nextjs').then((mod) => mod.SignInButton))

export function UserAuth() {
  const { isSignedIn } = useUser()
  if (isSignedIn) {
    return <div className="relative">
      <UserButton afterSignOutUrl="/" />
      <UserAuthFormIcon className="absolute -bottom-1 -right-1" />
    </div>
  }
  return <SignedOut>
    <SignInButton mode="modal">
      <div className="w-8 h-8 rounded-full border border-gray-400/40 flex items-center justify-center text-white/80">
        <UserArrowLeft />
      </div>
    </SignInButton>
  </SignedOut>
}