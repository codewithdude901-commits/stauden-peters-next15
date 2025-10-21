import BlurImage from '@/components/BlurImage'
import { fetchById } from '@/lib/payloadClient'
import { Media, Product } from '@/payload-types'
import { IoSunnyOutline } from 'react-icons/io5'
import { PiSnowflakeThin } from 'react-icons/pi'
import { RxHeight, RxWidth } from 'react-icons/rx'

const ProductDetailPage = async ({ params }: { params: Promise<{ productId: string }> }) => {
  const productId = (await params).productId

  const product = await fetchById<Product>('products', productId, { locale: 'en' })

  if (!product) return null
  return (
    <div className="flex flex-col mt-10 lg:mt-14 py-12 md:py-16 lg:py-20 padding">
      <div>
        {/* Main Product Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Image Gallery */}
          <div className="space-y-4 ">
            {/* Main Image */}
            <div className="relative aspect-square rounded-xl overflow-hidden max-w-2xl mx-auto md:mx-0">
              <BlurImage
                src={(product.gallery.image[0] as Media).url!}
                alt={product.name}
                width={800}
                height={800}
                className=" object-contain w-full h-full"
                priority
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div className="border-b border-blue-100 pb-6">
              <h1 className="text-3xl font-bold text-priColor mb-2 text-center md:text-left">
                {product.name}
              </h1>
              <p className="text-lg text-blue-900 text-center md:text-left">
                {product.scientificName}
              </p>
            </div>

            {/* Plant Specifications */}
            <div className="bg-blue-50 md:w-2/3 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-blue-900">Pflanzenspezifikationen</h3>
              {/* <h3 className="text-lg font-semibold mb-3 text-blue-900">
                Plant Specifications
              </h3> */}
              <div className="grid gap-4 text-sm text-muted-foreground">
                <div className="flex justify-between items-center border-b pb-1 ">
                  <div className="flex items-center gap-4">
                    <RxHeight className="h-8 w-8 rounded bg-priColor text-white p-1 " />
                    <span className="capitalize">Höhe:</span>
                  </div>
                  <p>{product.details?.height}</p>
                </div>
                <div className="flex justify-between border-b pb-1 items-center">
                  <div className="flex items-center gap-4">
                    <RxWidth className="h-8 w-8 rounded bg-priColor text-white p-1" />

                    <span className="capitalize">Durchmesser:</span>
                  </div>
                  <p>{product.details?.diameter}</p>
                </div>
                <div className="flex justify-between border-b pb-1 items-center">
                  <div className="flex items-center gap-4">
                    <PiSnowflakeThin className="h-8 w-8 rounded bg-priColor text-white p-1 " />
                    <span className="capitalize">Winterhart:</span>
                  </div>
                  <p>{product.details?.hardiness}</p>
                </div>
                <div className="flex justify-between border-b pb-1 items-center">
                  <div className="flex items-center  gap-4">
                    <IoSunnyOutline className="h-8 w-8 rounded bg-priColor text-white p-1" />
                    <span className="capitalize">Leichte:</span>
                  </div>
                  <p>{product.details?.light}</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <p className="flex-wrap text-muted-foreground text-sm leading-7 text-justify">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
