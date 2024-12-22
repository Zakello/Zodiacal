'use client'
import { Button } from "@/components/ui/button"
import { ChevronDown, Apple, SmartphoneIcon as Android } from 'lucide-react'

export default function Instructions() {
  return (
    <div className="mb-16">
      <h2 className="section-title">
        Как подключить календарь
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card space-y-4 hover:bg-indigo-50 transition-colors duration-300">
          <h3 className="text-xl font-semibold text-indigo-600 flex items-center gap-2">
            <Apple className="w-6 h-6" />
            iOS (iPhone)
          </h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Скопируйте ссылку на календарь</li>
            <li>Откройте приложение календарь</li>
            <li>Выберите "Календари" -&gt; "Добавить Календарь" -&gt; "Добавить подписной календарь"</li>
            <li>Вставьте ссылку и нажмите "Подписаться"</li>
            <li>Подгрузится календарь. Нажмите "Добавить".</li>
          </ol>
          <div className="md:hidden mt-4">
            <Button 
              className="w-full flex items-center justify-center gap-2 btn-primary"
              onClick={() => window.scrollTo({ top: document.getElementById('calendars')?.offsetTop, behavior: 'smooth' })}
            >
              Выбрать календарь
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="card space-y-4 hover:bg-indigo-50 transition-colors duration-300">
          <h3 className="text-xl font-semibold text-indigo-600 flex items-center gap-2">
            <Android className="w-6 h-6" />
            Android
          </h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Скопируйте ссылку на календарь</li>
            <li>Перейдите на calendar.google.com</li>
            <li>Добавьте календарь по URL</li>
          </ol>
          <div className="md:hidden mt-4">
            <Button 
              className="w-full flex items-center justify-center gap-2 btn-primary"
              onClick={() => window.scrollTo({ top: document.getElementById('calendars')?.offsetTop, behavior: 'smooth' })}
            >
              Выбрать календарь
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

