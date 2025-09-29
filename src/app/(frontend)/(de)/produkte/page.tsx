import { Suspense } from 'react'
// import ProductsPageContent from './ProductsPageContent'
import { fetchCollection, fetchGlobal } from '@/lib/fetchFromCMS'
import { Product, ProductsIndex } from '@/payload-types'
import ProductIndex from '@/components/products/ProductIndex'

export default async function ProductsPage() {
  const intro = await fetchGlobal<ProductsIndex>('productsIndex', 'de')
  const productData = await fetchCollection<Product>('products', 'de')

  console.log(productData)
  return (
    <>
      <ProductIndex introData={intro} productData={productData} />
    </>
  )
}
