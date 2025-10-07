import React from 'react'
import { Media } from '@/payload-types'
import CarouselLoc from './CarouselLoc'

const Gallery = ({ galleryData, locale }: { galleryData: (string | Media)[]; locale: string }) => {
  const className = 'rounded-xl'
  if (galleryData?.length === 0) return null
  return (
    <section className="bg-yellow-50/50 py-12 md:py-16 lg:py-24 padding">
      <p className="mb-2 font-semibold text-blue-900 text-center">
        {locale === 'en' ? ' Timeless Gardens Start Here' : 'Zeitlose Gärten beginnen hier'}
      </p>
      <h2 className="text-2xl font-semibold lg:font-bold lg:text-3xl mb-6 text-priColor text-center">
        {locale === 'en' ? 'Gallery' : 'Galerie'}
      </h2>
      <CarouselLoc
        slides={galleryData.map((image) => (image as Media).url!)}
        className={className}
        spaceBetween={5}
        breakpoints={{
          1280: { slidesPerView: 2 },
        }}
      />
    </section>
  )
}

export default Gallery
