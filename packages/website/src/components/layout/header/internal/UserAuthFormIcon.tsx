'use client'

import { AppleIcon, GitHubBrandIcon, GoogleBrandIcon, MicrosoftIcon } from "@/components/icons"
import { useUser } from "@clerk/nextjs"
import clsx from "clsx"
import { useMemo } from "react"

function getStrategyIcon(strategy: string) {
  switch (strategy) {
    case 'from_oauth_github':
      return GitHubBrandIcon
    case 'from_oauth_google':
      return GoogleBrandIcon
    case 'from_oauth_apple':
      return AppleIcon
    case 'from_oauth_microsoft':
      return MicrosoftIcon
    default:
      return null
  }
}

export const UserAuthFormIcon: FCC = ({ className }) => {
  const { user } = useUser()
  const Icon = useMemo(() => {
    const strategy = user?.primaryEmailAddress?.verification.strategy
    if (!strategy) return null
    return getStrategyIcon(strategy)
  }, [user?.primaryEmailAddress?.verification.strategy])

  if (!Icon) return null

  return <Icon className={clsx(className, 'h-3 w-3')}></Icon>
}