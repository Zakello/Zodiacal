'use client'

import { zodiacSigns, experts } from '../data'
import CopyLinkButton from './CopyLinkButton'
import Link from 'next/link'
import { Star, ArrowLeft } from 'lucide-react'

type Props = {
  sign: string
  expert: string
}

export default function ZodiacPage({ sign, expert }: Props) {
  const signData = zodiacSigns.find(s => s.id === sign)
  const expertData = experts.find(e => e.id === expert)
  
  if (!signData || !expertData) {
    return <div>Страница не найдена</div>
  }

  const calendarUrl = expertData.calendars[sign as keyof typeof expertData.calendars]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-primary hover:text-secondary transition-colors duration-300 flex items-center mb-8">
          <ArrowLeft className="mr-2" /> Вернуться на главную
        </Link>
        
        <h1 className="text-4xl font-bold mb-6 text-primary text-center relative">
          <Star className="absolute -top-6 -left-6 text-accent animate-pulse" size={24} />
          Гороскоп для знака {signData.emoji} {signData.name}
          <Star className="absolute -bottom-6 -right-6 text-accent animate-pulse" size={24} />
        </h1>
        <h2 className="text-2xl font-semibold mb-6 text-center text-secondary">по версии {expertData.name}</h2>

        <div className="prose max-w-none mb-8 text-gray-700">
          <p className="text-xl mb-4">
            Представьте: ваши личные гороскопы прямо в календаре!
          </p>
          <p className="mb-4">
            Прогнозы основаны на вдохновляющих словах {expertData.name} из её ежемесячных видео для {signData.name}.
          </p>
          <p>
            Теперь вы всегда будете на одной волне со звёздами — календарь напомнит вам соотнести ваши планы с важными небесными событиями.
          </p>
        </div>

        <div className="card mb-8">
          <h2 className="text-xl font-semibold mb-4 text-primary">Ваша персональная ссылка на календарь:</h2>
          <div className="flex items-center gap-4">
            <input
              type="text"
              readOnly
              value={calendarUrl}
              className="input"
            />
            <CopyLinkButton url={calendarUrl} sign={signData} expert={expertData}>
              Скопировать ссылку
            </CopyLinkButton>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card space-y-4">
            <h3 className="text-xl font-semibold text-primary">Инструкция для iOS (iPhone):</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Скопируйте ссылку на календарь</li>
              <li>Откройте приложение календарь</li>
              <li>Выберите "Календари" -> "Добавить Календарь" -> "Добавить подписной календарь"</li>
              <li>Вставьте ссылку и нажмите "Подписаться"</li>
              <li>Подгрузится календарь. Нажмите "Добавить".</li>
            </ol>
          </div>

          <div className="card space-y-4">
            <h3 className="text-xl font-semibold text-primary">Инструкция для Android:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Скопируйте ссылку на календарь</li>
              <li>Перейдите на calendar.google.com</li>
              <li>Добавьте календарь по URL</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

