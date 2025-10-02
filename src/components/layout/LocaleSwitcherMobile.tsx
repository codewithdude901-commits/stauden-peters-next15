'use client'

import { useEffect, useMemo, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Check, ChevronDown, Globe, X } from 'lucide-react'

type Locale = 'de' | 'en'

const locales = [
  { code: 'de' as const, label: 'De' },
  { code: 'en' as const, label: 'En' },
]

const SEGMENT_MAP: Record<string, string> = {
  standorte: 'locations',
  produkte: 'products',
  projekte: 'projects',
  kontakt: 'contact',
  about: 'about',
}

const REVERSE_SEGMENT_MAP: Record<string, string> = Object.fromEntries(
  Object.entries(SEGMENT_MAP).map(([de, en]) => [en, de]),
)

function mapPathToLocale(pathname: string, targetLocale: Locale): string {
  if (!pathname) return targetLocale === 'de' ? '/' : '/en'

  const clean = pathname === '/' ? '/' : pathname.replace(/\/$/, '')
  const isEnglish = clean.startsWith('/en')
  const withoutPrefix = isEnglish ? clean.replace(/^\/en/, '') : clean

  const parts = withoutPrefix === '' ? [] : withoutPrefix.split('/').filter(Boolean)

  if (parts.length === 0) return targetLocale === 'de' ? '/' : '/en'

  const [first, ...rest] = parts

  const mappedFirst =
    targetLocale === 'en' ? (SEGMENT_MAP[first] ?? first) : (REVERSE_SEGMENT_MAP[first] ?? first)

  const rebuilt = [mappedFirst, ...rest].join('/')

  return targetLocale === 'de' ? `/${rebuilt}` : `/en/${rebuilt}`
}

export default function LocaleSwitcherMobile() {
  const router = useRouter()
  const pathname = usePathname() ?? '/'
  const isEnglish = pathname.startsWith('/en')
  const currentLocale: Locale = isEnglish ? 'en' : 'de'

  const currentLabel = useMemo(
    () => locales.find((l) => l.code === currentLocale)?.label ?? 'De',
    [currentLocale],
  )

  const handleSwitch = (locale: Locale) => {
    if (locale === currentLocale) return
    const target = mapPathToLocale(pathname, locale)
    router.push(target)
  }

  // Mobile sheet state
  const [open, setOpen] = useState(false)

  // Lock body scroll while sheet open
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (open) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [open])

  return (
    <>
      {/* Desktop: original popover (shown md+) */}
      <div className="hidden md:inline-flex">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center gap-2 bg-transparent border-[0.5px]"
            >
              {currentLabel}
              <ChevronDown className="size-4" />
            </Button>
          </PopoverTrigger>

          <PopoverContent align="end" className="w-36">
            {locales.map((locale) => (
              <button
                key={locale.code}
                onClick={() => handleSwitch(locale.code)}
                className="flex items-center w-full px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition"
              >
                {locale.label}
                {currentLocale === locale.code && <Check className="ml-auto size-4 text-primary" />}
              </button>
            ))}
          </PopoverContent>
        </Popover>
      </div>

      {/* Mobile: sheet trigger (shown < md) */}
      <div className="md:hidden">
        <Button
          variant="outline"
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 bg-transparent border-[0.5px] py-0 h-8"
          aria-expanded={open}
          aria-controls="locale-sheet"
        >
          <Globe className="size-4" color="#00477a" strokeWidth={1.75} />
          <span className="sr-only">Open language switcher</span>
          <span className="text-sm">{currentLabel}</span>
        </Button>

        {/* Mobile full-screen sheet */}
        {open && (
          <div
            id="locale-sheet"
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-end"
          >
            {/* overlay */}
            <button
              aria-hidden
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />

            {/* sheet */}
            <div className="relative w-full max-h-[80vh] bg-white dark:bg-black rounded-t-2xl shadow-xl transform transition-transform duration-200 ease-out">
              <div className="flex items-center justify-between px-4 py-3 border-b dark:border-gray-800">
                <div className="flex items-center gap-2">
                  <Globe className="size-4" color="#00477a" strokeWidth={1.75} />
                  <h3 className="text-sm font-medium">Language</h3>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close language selector"
                  className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <X className="size-4" />
                </button>
              </div>

              <div className="px-4 py-4 space-y-2">
                {locales.map((locale) => (
                  <button
                    key={locale.code}
                    onClick={() => {
                      handleSwitch(locale.code)
                      setOpen(false)
                    }}
                    className="flex items-center w-full px-3 py-3 text-base rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  >
                    <span className="mr-2 text-lg">{locale.label}</span>
                    <span className="text-sm text-muted-foreground">
                      {locale.code === 'de' ? 'Deutsch' : 'English'}
                    </span>
                    {currentLocale === locale.code && (
                      <Check className="ml-auto size-4 text-primary" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
