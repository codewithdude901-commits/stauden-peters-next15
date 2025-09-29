'use client'

import { useMemo } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Check, ChevronDown } from 'lucide-react'

type Locale = 'de' | 'en'

const locales = [
  { code: 'de' as const, label: 'De' },
  { code: 'en' as const, label: 'En' },
]

/**
 * Map top-level DE segments to EN equivalents.
 * Add/change entries to suit your site structure.
 */
const SEGMENT_MAP: Record<string, string> = {
  standorte: 'locations',
  produkte: 'products',
  projekte: 'projects',
  kontakt: 'contact',
  about: 'about',
  // kategorie: 'category', // important for /kategorie/[id] <-> /en/category/[id]
}

const REVERSE_SEGMENT_MAP: Record<string, string> = Object.fromEntries(
  Object.entries(SEGMENT_MAP).map(([de, en]) => [en, de]),
)

/**
 * Remap only the FIRST path segment between locales and keep the rest (ids/slugs) intact.
 * Examples:
 *  - /kategorie/123  -> /en/category/123
 *  - /en/projects/abc -> /projekte/abc
 *  - /               -> /en
 */
function mapPathToLocale(pathname: string, targetLocale: Locale): string {
  if (!pathname) return targetLocale === 'de' ? '/' : '/en'

  // normalize trailing slash (except for root)
  const clean = pathname === '/' ? '/' : pathname.replace(/\/$/, '')
  const isEnglish = clean.startsWith('/en')
  const withoutPrefix = isEnglish ? clean.replace(/^\/en/, '') : clean

  // split into parts ('' => [])
  const parts = withoutPrefix === '' ? [] : withoutPrefix.split('/').filter(Boolean)

  // root
  if (parts.length === 0) return targetLocale === 'de' ? '/' : '/en'

  // remap only the first segment
  const [first, ...rest] = parts

  const mappedFirst =
    targetLocale === 'en' ? (SEGMENT_MAP[first] ?? first) : (REVERSE_SEGMENT_MAP[first] ?? first)

  const rebuilt = [mappedFirst, ...rest].join('/')

  return targetLocale === 'de' ? `/${rebuilt}` : `/en/${rebuilt}`
}

export default function LocaleSwitcher() {
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

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 bg-transparent border-[0.5px]">
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
  )
}
