import React from 'react'
import Carousel from '../Carousel'
import { Media } from '@/payload-types'

const Gallery = ({ galleryData }: { galleryData: (string | Media)[] }) => {
  console.log('gallery.image', galleryData)
  const slidePerView = 1
  const className = 'h-auto md:h-[400px] rounded-xl'
  if (galleryData?.length === 0) return null
  return (
    <section className="bg-yellow-50/50 py-12 md:py-16 lg:py-24 padding">
      <p className="mb-2 font-semibold text-blue-900 text-center">Timeless Gardens Start Here</p>
      <h2 className="text-2xl font-semibold lg:font-bold lg:text-3xl mb-6 text-priColor text-center">
        Gallery
      </h2>
      <Carousel
        slides={galleryData.map((image) => (image as Media).url!)}
        className={className}
        slidesPerView={slidePerView}
        spaceBetween={5}
        breakpoints={{
          768: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
      />
    </section>
  )
}

export default Gallery
