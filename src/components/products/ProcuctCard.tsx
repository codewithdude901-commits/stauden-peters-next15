import { Media, Product } from '@/payload-types'
import Link from 'next/link'
import { CustomImage } from '../CustomImage'

type ProductCardProps = {
  product: Product
  locale: string
}

export const ProductCard = ({ product, locale }: ProductCardProps) => {
  const imageSrc = (product.gallery.image[0] as Media).url!

  return (
    <Link href={locale === 'en' ? `/en/products/${product.id}` : `/produkte/${product.id}`}>
      <div className="bg-white rounded-sm shadow-md hover:shadow-lg transition-shadow max-w-[320px] w-full mx-auto">
        <div className="relative h-72 rounded-t-sm overflow-hidden">
          <CustomImage
            src={imageSrc}
            alt={product.name}
            width="100%"
            height="100%"
            placeholderClass="skeleton-placeholder"
          />
        </div>

        <div className="px-4 pt-1 h-24" style={{ backgroundColor: `${product.thumbnailColor}` }}>
          <h3 className="font-medium mt-2 mb-1 text-white">{product.name}</h3>
          <p className="text-white text-xs italic">{product.scientificName}</p>
        </div>
      </div>
    </Link>
  )
}
