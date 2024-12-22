'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'

type CopyLinkButtonProps = {
  url: string
  sign: { id: string, name: string, emoji: string }
  expert: { id: string, name: string }
  children: React.ReactNode
}

export default function CopyLinkButton({ url, sign, expert, children }: CopyLinkButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url)
    setCopied(true)
    if (typeof window !== 'undefined' && 'gtag' in window) {
      // @ts-ignore
      window.gtag('event', 'copy_calendar_link', {
        'zodiac_sign': sign.name,
        'expert': expert.name
      })
    }
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="zodiac-button group relative"
    >
      {copied ? (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 rounded-full">
          <div className="text-center">
            <Check className="w-6 h-6 mb-1 text-green-500 mx-auto" />
            <span className="text-sm text-green-600 font-medium">Скопировано</span>
          </div>
        </div>
      ) : (
        <>
          {children}
          <span className="absolute inset-0 rounded-full bg-pink-100 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
        </>
      )}
    </button>
  )
}

