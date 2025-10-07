'use client'

import { Product, ProductsIndex } from '@/payload-types'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ProductCard } from './ProcuctCard'

interface ProductDataProps {
  docs: Product[]
  totalPages: number
  totalDocs: number
  limit: number
  page: number
}

const ProductIndex = ({
  introData,
  productData,
  locale,
}: {
  introData: ProductsIndex
  productData: ProductDataProps
  locale: string
}) => {
  const searchParams = useSearchParams()
  const router = useRouter()

  // Get initial values from URL (or default)
  const initialCategory = searchParams.get('category') || 'elegrass'
  const initialPage = parseInt(searchParams.get('page') || '1', 10)

  const [selectedCategories, setSelectedCategories] = useState<string>(initialCategory)
  const [currentPage, setCurrentPage] = useState<number>(initialPage)
  // const itemsPerPage = 12

  // Update URL when state changes
  useEffect(() => {
    const params = new URLSearchParams()
    params.set('category', selectedCategories)
    params.set('page', String(currentPage))
    router.replace(`?${params.toString()}`, { scroll: false })
  }, [selectedCategories, currentPage, router])

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= productData.totalPages) {
      setCurrentPage(page)
      window.scrollTo({ top: 0, behavior: 'smooth'})
    }
  }

  return (
    <div className="mt-10 lg:mt-14 py-12 md:py-16 lg:py-20 padding min-h-screen">
      {/* Header */}

      {introData.sections && introData.sections.length > 0 && (
        <div className="text-center max-w-7xl mx-auto mb-6 sm:mb-8">
          <p className="mb-2 font-semibold text-blue-900">{introData.sections[0].tagline}</p>
          <h2 className="text-3xl font-semibold lg:font-bold lg:text-4xl mb-2 text-priColor">
            {introData.sections[0].headline}
          </h2>
          <p className="flex-wrap text-muted-foreground text-sm leading-7 xl:text-base">
            {introData.sections[0].paragraph}
          </p>
        </div>
      )}

      {/* Category Filters */}
      <div className="flex sm:gap-2 gap-2 md:gap-6 lg:gap-10 justify-center items-center mb-10">
        {['elegrass', 'elegardens', 'elerose'].map((cat, i) => (
          <div key={cat} className="flex items-center">
            <button
              onClick={() => {
                setSelectedCategories(cat)
                setCurrentPage(1)
              }}
              className={selectedCategories === cat ? 'border-b-2 border-gray-400' : ''}
            >
              <img
                src={`/${cat.replace('ele', '')}.png`}
                alt=""
                className="w-auto h-8 sm:h-10 md:h-12 cursor-pointer"
              />
            </button>
            {i < 2 && <div className="border-r h-10 block ml-2 md:ml-6 lg:ml-10" />}
          </div>
        ))}
      </div>

      {/* Products */}
      <div>
        {productData.docs.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No plants found matching your criteria
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 w-full">
            {productData.docs.map((product) => (
              <ProductCard key={product.id} product={product} locale={locale} />
            ))}
          </div>
        )}
      </div>

      {/* Pagination */}
      {productData.totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Prev
          </button>
          {Array.from({ length: productData.totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === index + 1 ? 'bg-gray-300' : ''
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === productData.totalPages}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}

export default ProductIndex
