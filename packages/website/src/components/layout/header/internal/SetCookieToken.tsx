'use client'

import { useUser } from "@clerk/nextjs";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { WEBSITE_COOKIE_TOKEN_KEY } from '@common/config'
import { http } from "@/common/http";


async function createToken(userId: string) {
  const { token } = await http.post<{ token: string }>('/api/auth/token', { body: JSON.stringify({ userId }) })
  return token
}

async function checkToken(userId?: string) {
  try {
    if (!Cookies.get(WEBSITE_COOKIE_TOKEN_KEY) && userId) {
      const token = await createToken(userId)
      Cookies.set(WEBSITE_COOKIE_TOKEN_KEY, token, { expires: 30, sameSite: 'Lax' })
    }
  } catch (error) {
    console.log(error)
  }
}

export function SetCookieToken() {
  const { user } = useUser()
  const userId = user?.id
  useEffect(() => { checkToken(userId) }, [userId])
  return (<></>);
}

export function ClearCookieToken() {
  useEffect(() => {
    if (!Cookies.get('__session')) {
      Cookies.remove(WEBSITE_COOKIE_TOKEN_KEY)
    }
  }, [])
  return (<></>);
}