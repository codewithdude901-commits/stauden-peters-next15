'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function CookieBannerDE() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const handleConsent = (choice: 'accepted' | 'rejected') => {
    localStorage.setItem('cookie_consent', choice)
    setVisible(false)
    // Optionally trigger callback to enable/disable scripts
  }

  if (!visible) return null

  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg z-50 animate-slide-up',
      )}
    >
      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-lg font-semibold mb-2">🍪 Wir legen Wert auf Ihre Privatsphäre</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          Wir verwenden Cookies und ähnliche Technologien, um:
        </p>
        <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 mb-4">
          <li>Verbessern Sie Ihr Surferlebnis</li>
          <li>Analysieren Sie den Website-Verkehr und die Leistung</li>
          <li>Zeigen Sie personalisierte Anzeigen und Empfehlungen</li>
          <li>Verstehen Sie das Benutzerverhalten, um Funktionen zu verbessern</li>
        </ul>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
          Durch Klicken &quot;Akzeptieren&quot;, Sie stimmen der Speicherung von Cookies auf Ihrem
          Gerät zu, um die Website-Navigation zu verbessern, die Website-Nutzung zu analysieren und
          unsere Marketingbemühungen zu unterstützen.
          <a href="/privacy-policy" className="underline">
            Erfahren Sie mehr in unserer Datenschutzrichtlinie
          </a>
          .
        </p>
        <div className="flex flex-wrap gap-3">
          <Button
            size="sm"
            className="bg-priColor hover:bg-blue-700"
            onClick={() => handleConsent('accepted')}
          >
            Akzeptieren
          </Button>
          <Button size="sm" variant="outline" onClick={() => handleConsent('rejected')}>
            Ablehnen
          </Button>
        </div>
      </div>
    </div>
  )
}
