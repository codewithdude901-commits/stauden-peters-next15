import YouTubeThumbnailPlayer from '@/components/YouTubeThumbnailPlayer'
import { fetchDocByCategory } from '@/lib/payloadClient'

import { Category, Media, ProductCategory } from '@/payload-types'
import { MoveUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const CategoryDetailPage = async ({ params }: { params: Promise<{ categoryId: string }> }) => {
  const categoryId = (await params).categoryId

  const category = await fetchDocByCategory<Category>('categories', categoryId, 'en')

  if (!category) return null

  const className = 'rounded-md max-h-[650px] overflow-hidden object-cover'

  return (
    <div className="min-h-screen padding max-w-[2000px]">
      {/* Project Header */}
      <div className="flex flex-col mt-10 lg:mt-14 pt-12 md:pt-16 lg:pt-20 ">
        <div className="flex flex-col text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold lg:font-bold lg:text-4xl mb-2 text-priColor">
            {category?.title}
          </h2>
          <p className="text-2xl font-semibold lg:font-bold lg:text-3xl mb-2 text-blue-900">
            {category?.headline}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10">
        <YouTubeThumbnailPlayer
          videoId={category.videoId!}
          autoplay
          loop
          mute
          // thumbnail={category.thumbnail}
          controls={false}
          isContentPlaying={true}
        />
      </div>

      {/* Project Details */}
      <div className="mx-auto md:pt-4 lg:pt-6 pb-12 max-w-7xl gap-3 sm:gap-6 flex flex-col">
        <p className="flex-wrap text-muted-foreground text-sm xl:text-base leading-7 text-justify">
          {category?.paragraph1}
        </p>

        <Image
          src={(category.image1 as Media).url!}
          alt={category.title!}
          width={1500}
          height={1000}
          className={className}
          objectFit="cover"
        />
        <p className="flex-wrap text-muted-foreground text-sm xl:text-base leading-7 text-justify">
          {category?.paragraph2}
        </p>
        <p className="flex-wrap text-muted-foreground text-sm xl:text-base leading-7 text-justify">
          {category?.paragraph3}
        </p>
        <Image
          src={(category.image2 as Media).url!}
          alt={category.title!}
          width={1500}
          height={1000}
          className={className}
          objectFit="cover"
        />
        <Link
          href={`/en/products?category=${(category.category as ProductCategory).title}&page=1`}
          className="flex gap-2 items-center text-white hover:bg-blue-400 w-fit bg-blue-500 py-2 px-5 rounded-md mx-auto transition duration-100 ease-in mt-4"
        >
          <p className="inline">{category?.buttonText}</p>
          <MoveUpRight size={16} />
        </Link>
      </div>
    </div>
  )
}

export default CategoryDetailPage
