'use client'

import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Check, ChevronDown, Globe } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { startTransition, useMemo } from 'react'
import { useProgress } from 'react-transition-progress'

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

export default function LocaleSwitcher() {
  const router = useRouter()
  const pathname = usePathname() ?? '/'
  const searchParams = useSearchParams()
  const isEnglish = pathname.startsWith('/en')
  const currentLocale: Locale = isEnglish ? 'en' : 'de'

  const currentLabel = useMemo(
    () => locales.find((l) => l.code === currentLocale)?.label ?? 'De',
    [currentLocale],
  )

  const startProgress = useProgress()

  const handleSwitch = (locale: Locale) => {
    if (locale === currentLocale) return
    const targetPath = mapPathToLocale(pathname, locale)
    const queryString = searchParams.toString()
    const target = queryString ? `${targetPath}?${queryString}` : targetPath

    startTransition(() => {
      // start visual progress
      startProgress()

      // trigger Next navigation; it returns a Promise (we don't await here
      // because startTransition schedules the update)
      router.push(target)
    })
  }

  return (
    <>
      <div>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center gap-2 bg-transparent border-[0.5px] w-24 lg:w-16 xl:w-24 justify-end"
            >
              <Globe className="size-4 lg:hidden xl:flex" />
              {currentLabel}
              <ChevronDown className="size-4" />
            </Button>
          </PopoverTrigger>

          <PopoverContent align="end" className="w-40">
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
    </>
  )
}