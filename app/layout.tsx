import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })
const playfair = Playfair_Display({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'ZodiaCal – небесные подсказки в твоём календаре',
  description: 'Бесплатный публичный календарь для каждого знака зодиака.',
  metadataBase: new URL('https://zodiacal.pro'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={`${inter.className} ${playfair.variable}`}>
        <div className="flex min-h-screen flex-col bg-gradient-to-b from-purple-50 to-pink-50">
          <main className="flex-1">
            {children}
          </main>
          <footer className="bg-gray-100 py-8 text-center text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} ZodiaCal. Все права защищены.</p>
            <p className="mt-2">Предложения по улучшению и сообщения об ошибках присылайте на ask@zodiacal.pro</p>
          </footer>
        </div>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7TBLYC38D1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7TBLYC38D1');
          `}
        </Script>
      </body>
    </html>
  )
}

