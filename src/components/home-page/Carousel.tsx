'use client'

import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import BlurImage from '../BlurImage'

interface CarouselProps {
  slides: any
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
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const data = slides[0]
  const imagesToRender = isMobile ? data.mobileImage : data.desktopImage

  return (
    <div>
      <Swiper
        spaceBetween={spaceBetween ?? 0}
        slidesPerView={slidesPerView}
        loop={true}
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
        {imagesToRender.map((slide: { url: string; alt: string }, index: number) => (
          <SwiperSlide key={index}>
            <div>
              <BlurImage
                src={slide.url}
                alt={slide.alt}
                priority
                width={1920}
                height={1080}
                className="block h-screen max-h-[calc(100vh-65px)] w-screen object-cover sm:object-left-top"
                // placeholder="blur"
                // blurDataURL={placeholderBlurhash}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Carousel
