import { zhCN } from "@clerk/localizations"
import { ClerkProvider } from "@clerk/nextjs"
import { dark } from "@clerk/themes"

export const LayoutProvider: FCC = ({ children }) => {
  return <ClerkProvider localization={zhCN} appearance={{ baseTheme: dark }}>
    { children }
  </ClerkProvider>
}