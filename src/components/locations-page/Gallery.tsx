import React from 'react'
import Carousel from '../Carousel'
import { Media } from '@/payload-types'

const Gallery = ({ galleryData, locale }: { galleryData: (string | Media)[]; locale: string }) => {
  const slidePerView = 1
  const className = 'h-auto rounded-xl'
  if (galleryData?.length === 0) return null
  return (
    <section className="bg-yellow-50/50 py-12 md:py-16 lg:py-24 padding">
      <p className="mb-2 font-semibold text-blue-900 text-center">
        {locale === 'en' ? ' Timeless Gardens Start Here' : 'Zeitlose Gärten beginnen hier'}
      </p>
      <h2 className="text-2xl font-semibold lg:font-bold lg:text-3xl mb-6 text-priColor text-center">
        {locale === 'en' ? 'Gallery' : 'Galerie'}
      </h2>
      <Carousel
        slides={galleryData.map((image) => (image as Media).url!)}
        className={className}
        slidesPerView={slidePerView}
        spaceBetween={5}
        breakpoints={{
          1024: { slidesPerView: 2 },

        }}
      />
    </section>
  )
}

export default Gallery
