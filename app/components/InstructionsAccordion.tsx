'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function InstructionsAccordion() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors duration-200"
      >
        <span className="text-lg font-semibold">Инструкции по установке</span>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      {isOpen && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card space-y-4">
            <h3 className="text-xl font-semibold text-primary">Инструкция для iOS (iPhone):</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Скопируйте ссылку на календарь</li>
              <li>Откройте приложение календарь</li>
              <li>Выберите "Календари" -&gt; "Добавить Календарь" -&gt; "Добавить подписной календарь"</li>
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
      )}
    </div>
  )
}

