import { Metadata } from 'next'
import { zodiacSigns, experts } from '../data'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy } from 'lucide-react'
import CopyLinkButton from '../components/CopyLinkButton'

type Props = {
  params: {
    sign: string
    expert: string
  }
}

export async function generateStaticParams() {
  const paths = []
  for (const sign of zodiacSigns) {
    for (const expert of experts) {
      paths.push({
        sign: sign.id,
        expert: expert.id,
      })
    }
  }
  return paths
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const sign = zodiacSigns.find(s => s.id === params.sign)
  const expert = experts.find(e => e.id === params.expert)
  
  if (!sign || !expert) {
    return {
      title: 'Страница не найдена | ZodiaCal',
    }
  }

  return {
    title: `Гороскоп для знака ${sign.emoji} ${sign.name} по версии ${expert.name}`,
    description: `Астрологический календарь для ${sign.name} с прогнозами от ${expert.name}. Автоматические обновления прогнозов в вашем календаре.`,
  }
}

export default function ZodiacPage({ params }: Props) {
  const sign = zodiacSigns.find(s => s.id === params.sign)
  const expert = experts.find(e => e.id === params.expert)
  
  if (!sign || !expert) {
    return <div>Страница не найдена</div>
  }

  const calendarUrl = expert.calendars[params.sign as keyof typeof expert.calendars]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-gray-600 hover:text-gray-900 mb-8 inline-block">
          ← Вернуться на главную
        </a>
        
        <h1 className="text-3xl font-bold mb-6">
          Гороскоп для знака {sign.emoji} {sign.name} по версии {expert.name}
        </h1>

        <div className="prose max-w-none mb-8">
          <p className="text-xl mb-4">
            Представьте: ваши личные гороскопы прямо в календаре!
          </p>
          <p className="mb-4">
            Прогнозы основаны на вдохновляющих словах {expert.name} из её ежемесячных видео для {sign.name}.
          </p>
          <p>
            Теперь вы всегда будете на одной волне со звёздами — календарь напомнит вам соотнести ваши планы с важными небесными событиями.
          </p>
        </div>

        <Card className="p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Ваша персональная ссылка на календарь:</h2>
          <div className="flex items-center gap-4">
            <input
              type="text"
              readOnly
              value={calendarUrl}
              className="flex-1 p-2 border rounded"
            />
            <CopyLinkButton url={calendarUrl} sign={sign.name} expert={expert.name} />
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Инструкция для iOS (iPhone):</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Скопируйте ссылку на календарь</li>
              <li>Откройте приложение календарь</li>
              <li>Выберите "Календари" -> "Добавить Календарь" -> "Добавить подписной календарь"</li>
              <li>Вставьте ссылку и нажмите "Подписаться"</li>
              <li>Подгрузится календарь. Нажмите "Добавить".</li>
            </ol>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Инструкция для Android:</h3>
            <ol className="list-decimal list-inside space-y-2">
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

