'use client'
import { useEffect } from "react"
import Cookies from "js-cookie";
import { WEBSITE_COOKIE_TOKEN_KEY } from "@common/config";

export default function Page() {
  useEffect(() => {
    Cookies.remove(WEBSITE_COOKIE_TOKEN_KEY)
  }, [])
  return <div>403</div>
}