import { Media, Product } from '@/payload-types'
import Link from 'next/link'

type ProductCardProps = {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link href={`/produkte/${product.id}`}>
      <div className="bg-white rounded-sm shadow-md hover:shadow-lg transition-shadow max-w-[320px] w-full mx-auto">
        <div className="relative h-72 rounded-t-sm overflow-hidden">
          <img
            src={(product.gallery.image[0] as Media).url!}
            alt={product.name}
            className="w-full h-full object-cover"
          
          />
        </div>

        <div className="px-4 pt-1 h-24" style={{ backgroundColor: `${product.thumbnailColor}` }}>
          <h3 className="font-medium  mt-2 mb-1 text-white">{product.name}</h3>
          <p className=" text-white text-xs italic">{product.scientificName}</p>
        </div>
      </div>
    </Link>
  )
}
