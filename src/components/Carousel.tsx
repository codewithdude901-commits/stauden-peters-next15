'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { CustomImage } from './CustomImage'

interface CarouselProps {
  slides: string[]
  className?: string
  slidesPerView?: number
  breakpoints?: { [key: number]: { slidesPerView: number } }
  spaceBetween?: number
}

const Carousel = ({
  slides,
  className,
  slidesPerView,
  breakpoints,
  spaceBetween,
}: CarouselProps) => {
  return (
    <>
      <div>
        <Swiper
          spaceBetween={spaceBetween ? spaceBetween : 0}
          slidesPerView={slidesPerView}
          // loop={true}
          centeredSlides={false}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination
          modules={[Navigation, Pagination, Autoplay]}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={breakpoints}
          className={className}
        >
          {slides.map((image, index) => (
            <SwiperSlide key={index}>
              <div className={`max-h-[650px]  w-full h-full items-center justify-center`}>
                {/* <img
                  src={image}
                  alt="slider image"
                  className="block h-full w-full object-cover"
                  width={1200}
                  height={800}
                /> */}

                <CustomImage
                  src={image}
                  alt={'slider image'}
                  width="100%"
                  // height="100%"
                  placeholderClass="skeleton-placeholder"
                  aspectRatio="3/2"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default Carousel
