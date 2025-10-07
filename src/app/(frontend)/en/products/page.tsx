
import ProductIndex from '@/components/products/ProductIndex'
import { fetchCollectionByCategory, fetchGlobal } from '@/lib/payloadClient'

import { ProductsIndex } from '@/payload-types'

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; page?: string }>
}) {
  const category = (await searchParams).category || 'elegrass' // Default to 'elerose'
  const page = parseInt((await searchParams).page || '1', 10)
  const sanitizedPage = isNaN(page) || page < 1 ? 1 : page

  const intro = await fetchGlobal<ProductsIndex>({ slug: 'productsIndex', locale: 'en' })

  const productData = await fetchCollectionByCategory('products', 'en', category, sanitizedPage)

  if (!intro || !productData) {
    return <div>Content loading...</div>
  }

  return (
    <>
      <ProductIndex introData={intro} productData={productData} locale="en" />
    </>
  )
}
