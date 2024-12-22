'use client'
import { zodiacSigns, experts } from './data'
import CopyLinkButton from './components/CopyLinkButton'
import Instructions from './components/Instructions'
import { Star, RefreshCw, UserCheck, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-indigo-600 relative">
          ZodiaCal
          <span className="block text-2xl md:text-3xl text-indigo-600 mt-2">небесные подсказки в твоём календаре</span>
        </h1>
        <p className="text-xl mb-6 text-gray-700">
          Бесплатный публичный календарь для каждого знака зодиака
        </p>
        <p className="text-gray-600 bg-white bg-opacity-50 p-4 rounded-lg shadow-sm">
          Все ключевые события и их описание в вашем календаре из прогнозов ведущих астрологов.
          Вам достаточно просто подписаться на календарь, и все события будут автоматически добавляться в Ваш календарь на телефоне. 
          Без регистраций, смс, оплат.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="card flex flex-col items-center text-center hover:bg-indigo-50 transition-colors duration-300">
          <RefreshCw className="w-16 h-16 text-indigo-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-indigo-600">Автоматические обновления</h3>
          <p className="text-gray-600">Прогнозы появляются в вашем календаре автоматически</p>
        </div>
        <div className="card flex flex-col items-center text-center hover:bg-indigo-50 transition-colors duration-300">
          <UserCheck className="w-16 h-16 text-indigo-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-indigo-600">Экспертные прогнозы</h3>
          <p className="text-gray-600">От ведущих астрологов Angela Pearl и Mariya Kuzmenko</p>
        </div>
        <div className="card flex flex-col items-center text-center hover:bg-indigo-50 transition-colors duration-300">
          <Zap className="w-16 h-16 text-indigo-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-indigo-600">Простая установка</h3>
          <p className="text-gray-600">Работает на всех устройствах без регистрации</p>
        </div>
      </div>

      <Instructions />

      <div id="calendars">
        {experts.map((expert) => (
          <div key={expert.id} className="mb-16">
            <h2 className="section-title">
              {expert.name}
            </h2>
            <div className="zodiac-grid">
              {zodiacSigns.map((sign) => (
                <CopyLinkButton
                  key={sign.id}
                  url={expert.calendars[sign.id]}
                  sign={sign}
                  expert={expert}
                >
                  <span className="zodiac-icon">{sign.emoji}</span>
                  <span className="zodiac-text">{sign.name}</span>
                </CopyLinkButton>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Decorative stars */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <Star
            key={i}
            className="star animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 1.5 + 0.5}rem`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

