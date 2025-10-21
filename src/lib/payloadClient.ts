// src/lib/payloadClient.ts
import config from '@payload-config'
import { CollectionSlug, getPayload, GlobalSlug } from 'payload'

/**
 * Use Awaited<> here so _payload is the resolved payload instance (BasePayload),
 * not a Promise<BasePayload>. That matches using `await getPayload(...)`.
 */
type PayloadInstance = Awaited<ReturnType<typeof getPayload>>
let _payload: PayloadInstance | null = null

export async function getCachedPayload(): Promise<PayloadInstance> {
  if (_payload) return _payload
  _payload = await getPayload({ config })
  return _payload
}

/* -------------------- Types -------------------- */

export type FetchGlobalOptions = {
  slug: GlobalSlug
  locale?: 'de' | 'en'
  depth?: number
  overrideAccess?: boolean
  showHiddenFields?: boolean
}

export type CollectionOptions = {
  where?: any
  depth?: number
  limit?: number
  page?: number
  sort?: string | string[]
  locale?: 'de' | 'en'
  overrideAccess?: boolean
  showHiddenFields?: boolean
}

export type PayloadFindResult<T> = {
  docs: T[]
  totalDocs: number
  limit: number
  page: number
  totalPages: number
}

/* -------------------- Global helper -------------------- */

export async function fetchGlobal<T = any>({
  slug,
  locale = 'en',
  depth = 3,
  overrideAccess = false,
  showHiddenFields = false,
}: FetchGlobalOptions): Promise<T | null> {
  try {
    const payload = await getCachedPayload()
    const global = await payload.findGlobal({
      slug,
      locale,
      depth,
      overrideAccess,
      showHiddenFields,
    })
    return global as T
  } catch (error) {
    console.error(`Payload fetchGlobal error for "${slug}":`, error)
    return null
  }
}

/* -------------------- Collection helpers -------------------- */

export async function fetchCollection<T = any>(
  collection: CollectionSlug,
  options: CollectionOptions = {},
): Promise<T[] | null> {
  try {
    const payload = await getCachedPayload()
    const res = await payload.find({
      collection,
      ...options,
    })
    return (res?.docs ?? []) as T[]
  } catch (error) {
    console.error(`Payload fetchCollection error for "${collection}":`, error)
    return null
  }
}

/* -------------------- Collection by Category (Local Payload) -------------------- */

export async function fetchCollectionByCategory<T = any>(
  collection: CollectionSlug,
  locale: 'de' | 'en',
  category: string,
  page = 1,
  opts: { limit?: number; sort?: string []} = {},
): Promise<PayloadFindResult<T> | null> {
  try {
    const payload = await getCachedPayload()

    const limit = opts.limit ?? 24
    const sort = opts.sort ?? 'createdAt'

    const res = await payload.find({
      collection,
      locale,
      page,
      limit,
      sort,
      where: {
        'category.title': { equals: category },
      },
    })

    return res as unknown as PayloadFindResult<T>
  } catch (error) {
    console.error(
      `Payload fetchCollectionByCategory error for "${collection}" with category "${category}":`,
      error,
    )
    return null
  }
}

export async function fetchById<T = any>(
  collection: CollectionSlug,
  id: string,
  options: {
    depth?: number
    locale?: 'de' | 'en'
    overrideAccess?: boolean
    showHiddenFields?: boolean
  } = {},
): Promise<T | null> {
  try {
    const payload = await getCachedPayload()
    const res = await payload.findByID({
      collection,
      id,
      ...options,
    })
    return (res as T) ?? null
  } catch (error) {
    console.error(`Payload fetchById error for "${collection}" id="${id}":`, error)
    return null
  }
}

/* -------------------- Single Doc by Category (Local Payload) -------------------- */

export async function fetchDocByCategory<T = any>(
  collection: CollectionSlug,
  category: string,
  locale: 'de' | 'en',
  depth = 3,
): Promise<T | null> {
  try {
    const payload = await getCachedPayload()

    const res = await payload.find({
      collection,
      locale,
      depth,
      limit: 1, // we only need one doc
      where: {
        'category.title': { equals: category },
      },
    })

    return (res.docs?.[0] as T) ?? null
  } catch (error) {
    console.error(
      `Payload fetchDocByCategory error for "${collection}" with category "${category}":`,
      error,
    )
    return null
  }
}

export async function createDoc<T = any>(
  collection: CollectionSlug,
  data: Record<string, any>,
  options: {
    depth?: number
    locale?: 'de' | 'en'
    overrideAccess?: boolean
    showHiddenFields?: boolean
  } = {},
): Promise<T | null> {
  try {
    const payload = await getCachedPayload()
    const res = await payload.create({
      collection,
      data,
      ...options,
    })
    return res as T
  } catch (error) {
    console.error(`Payload createDoc error for "${collection}":`, error)
    return null
  }
}

/* -------------------- Optional helpers -------------------- */

export function _resetPayloadCacheForTests() {
  _payload = null
}
