// import ProductsPageContent from './ProductsPageContent'
import ProductIndex from '@/components/products/ProductIndex'
import { fetchCollectionByCategory, fetchGlobal } from '@/lib/fetchFromCMS'
import { ProductsIndex } from '@/payload-types'

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; page?: string }>
}) {
  const category = (await searchParams).category || 'elegrass' // Default to 'elerose'
  const page = parseInt((await searchParams).page || '1', 10)
  const sanitizedPage = isNaN(page) || page < 1 ? 1 : page

  const intro = await fetchGlobal<ProductsIndex>('productsIndex', 'de')
  // const productData = await fetchCollection<Product>('products', 'de')
  const productData = await fetchCollectionByCategory('products', 'de', category, page)

  return (
    <>
      {/*@ts-expect-error */}
      <ProductIndex introData={intro} productData={productData} locale="de" />
    </>
  )
}
