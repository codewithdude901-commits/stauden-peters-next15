'use client'

import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import BlurImage from '../BlurImage'

interface CarouselProps {
  slides: string[]
  className?: string
  slidesPerView?: number
  breakpoints?: { [key: number]: { slidesPerView: number } }
  spaceBetween?: number
}

const CarouselLoc = ({ slides, className, breakpoints, spaceBetween }: CarouselProps) => {
  return (
    <>
      <div>
        <Swiper
          spaceBetween={spaceBetween ? spaceBetween : 0}
          // slidesPerView={slidesPerView}
          // loop={true}
          centeredSlides={false}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination
          modules={[Navigation, Pagination, Autoplay]}
          breakpoints={breakpoints}
          className={className}
        >
          {slides.map((image, index) => (
            <SwiperSlide key={index} className="max-h-[600px] overflow-hidden rounded-xl">
              <BlurImage
                src={image}
                alt={'slider image'}

                width={1920}
                height={1080}
                className="object-cover "
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default CarouselLoc
