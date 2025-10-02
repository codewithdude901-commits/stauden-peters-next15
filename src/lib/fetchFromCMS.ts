import { GlobalSlug } from '@/types/globals'

export async function fetchGlobal<T>(slug: GlobalSlug, locale: 'de' | 'en'): Promise<T> {
  const res = await fetch(
    `${process.env.VERCEL_URL}/api/globals/${slug}?locale=${locale}`,
    // { next: { revalidate: 60 } }
  )

  if (!res.ok) {
    throw new Error(`Failed to fetch global: ${slug}`)
  }

  return res.json() as Promise<T>
}

// src/lib/fetchFromCMS.ts
export async function fetchCollection<T>(slug: string, locale: 'de' | 'en'): Promise<T[]> {
  const res = await fetch(
    `${process.env.VERCEL_URL}/api/${slug}?locale=${locale}&limit=25`,
    // { next: { revalidate: 60 } }
  )

  if (!res.ok) throw new Error(`Failed to fetch collection: ${slug}`)

  const data = await res.json()
  return data.docs as T[]
}

export async function fetchCollectionByCategory<T>(
  slug: string,
  locale: 'de' | 'en',
  category: string,
  page: number,
): Promise<T[]> {
  const res = await fetch(
    `${process.env.VERCEL_URL}/api/${slug}?locale=${locale}&limit=12&where[category.title][equals]=${encodeURIComponent(category)}&sort=createdAt&page=${page}`,
    // { next: { revalidate: 60 } }
  )

  if (!res.ok) throw new Error(`Failed to fetch collection: ${slug}`)

  const data = await res.json()

  return data as T[]
}

export async function fetchDocBySlug<T>(
  collection: string,
  slug: string,
  locale: 'de' | 'en',
): Promise<T | null> {
  const res = await fetch(
    `${process.env.VERCEL_URL}/api/${collection}?where[slug][equals]=${slug}&locale=${locale}`,
    // { next: { revalidate: 60 } }
  )

  if (!res.ok) throw new Error(`Failed to fetch doc by slug: ${collection}`)

  const data = await res.json()
  return data.docs?.[0] ?? null
}

export async function fetchDocBySlugWithLocales(
  collection: string,
  slug: string,
  locale: 'de' | 'en',
): Promise<any | null> {
  // 1) fetch resolved doc by slug+locale to get id
  const resolved = await fetchDocBySlug<any>(collection, slug, locale)
  if (!resolved) return null

  const id = resolved.id
  // 2) fetch raw doc by id with depth=0 (no locale) so you get localized objects
  const res = await fetch(
    `${process.env.VERCEL_URL}/api/${collection}/${id}?depth=2&locale=*`,
    // { next: { revalidate: 60 } }
  )

  if (!res.ok) {
    throw new Error(`Failed to fetch ${collection} raw by id: ${id}`)
  }
  const data = await res.json()
  // data will include fields like slug: { de: '...', en: '...' }
  return data
}

export async function fetchDocById<T>(
  collection: string,
  id: string,
  locale: 'de' | 'en',
): Promise<T | null> {
  const res = await fetch(
    `${process.env.VERCEL_URL}/api/${collection}?where[id][equals]=${id}&locale=${locale}`,
    // { next: { revalidate: 60 } }
  )

  if (!res.ok) throw new Error(`Failed to fetch doc by id: ${collection}`)

  const data = await res.json()
  return data.docs?.[0] ?? null
}

export async function fetchDocByCategory<T>(
  collection: string,
  category: string,
  locale: 'de' | 'en',
): Promise<T | null> {
  const res = await fetch(
    `${process.env.VERCEL_URL}/api/${collection}?where[category.title][equals]=${category}&locale=${locale}`,
    // { next: { revalidate: 60 } }
  )

  if (!res.ok) throw new Error(`Failed to fetch doc by id: ${collection}`)

  const data = await res.json()
  return data.docs?.[0] ?? null
}
