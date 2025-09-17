'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import { Autoplay, Pagination } from 'swiper/modules'

interface Item {
  photo: {
    url: string
    alt: string
  }
  name: string
  position: string
  text: string
}

interface ItemProps {
  items: Item[]
}

const TestimonialSlider = ({ items }: ItemProps) => {
  // Track expanded states for each testimonial
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({})

  const toggleExpand = (index: number) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }))
  }

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1536: { slidesPerView: 4 },
      }}
      modules={[Autoplay, Pagination]}
      autoplay
      pagination={{ clickable: true }}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="m-2 w-full mx-auto p-6 flex flex-col justify-between bg-white rounded-xl shadow-lg dark:bg-gray-700 hover:scale-[102%] transition duration-200">
            <div className="flex flex-col justify-center items-center text-center">
              <div className="flex flex-col items-center mb-2 gap-2">
                <div className="relative size-20 rounded-full">
                  <span className="absolute bottom-0 right-0 inline-block p-1 text-xs text-white bg-blue-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      className="bi bi-quote"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Z" />
                    </svg>
                  </span>
                  <img
                    className="object-cover w-full h-full rounded-full"
                    src={item.photo.url}
                    alt={item.photo.alt || 'testimony-image'}
                  />
                </div>
                <div className="info">
                  <h2 className="text-sm font-semibold text-blue-900 dark:text-white capitalize">
                    {item.name}
                  </h2>
                  <span className="block text-xs text-blue-500 capitalize dark:text-blue-300">
                    {item.position}
                  </span>
                </div>
              </div>

              {/* Testimony with line clamp */}
              <p
                className={`text-muted-foreground text-sm leading-7 text-justify transition-all duration-300 ${
                  expanded[index] ? '' : 'line-clamp-6'
                }`}
              >
                {item.text}
              </p>

              {/* Toggle button */}
              {item.text.length > 180 && (
                <button
                  onClick={() => toggleExpand(index)}
                  className="mt-2 text-xs text-blue-500 dark:text-blue-300 hover:underline"
                >
                  {expanded[index] ? 'Show less' : 'Read more'}
                </button>
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default TestimonialSlider
