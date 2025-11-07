'use client'

import cn from 'clsx'
import { useEffect, useRef, useState } from 'react'

import type { ImgHTMLAttributes } from 'react'

export default function BlurImage(props: ImgHTMLAttributes<HTMLImageElement>) {
  const [isLoading, setLoading] = useState(true)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoading(false)
    }
  }, [])

  return (
    <img
      ref={imgRef}
      {...props}
      loading="eager"
      alt={props.alt}
      className={cn(
        props.className,
        'duration-700 ease-in-out',
        isLoading ? 'scale-[101%] blur-lg' : 'scale-100 blur-0',
      )}
      onLoad={() => setLoading(false)}
    />
  )
}