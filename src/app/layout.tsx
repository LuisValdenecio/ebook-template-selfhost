import { type Metadata } from 'next'
import { DM_Sans, Inter } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: {
    template: '%s - DeceptiConf',
    default: 'Host your ebook website TODAY!',
  },
  description:
    'Host your own ebook website and take control of your online presence. Get started today!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full bg-white antialiased',
        inter.variable,
        dmSans.variable,
      )}
    >
      <body className="flex min-h-full">
        <div className="flex w-full flex-col">{children}</div>
        <Toaster />
      </body>
    </html>
  )
}
