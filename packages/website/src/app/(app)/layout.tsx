import "../globals.css";
import { LayoutProvider } from '@/components/layout/provider/LayoutProvider';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LayoutProvider>
      <html lang="zh">
        <body>
          {children}
        </body>
      </html>
    </LayoutProvider>
  )
}
