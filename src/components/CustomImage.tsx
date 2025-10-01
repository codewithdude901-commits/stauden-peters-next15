import { ReactNode, useCallback, useEffect, useState } from 'react'

interface CustomImageProps {
  src: string
  alt: string
  width?: string
  height?: string
  aspectRatio?: string // e.g., '16/9' for responsive height
  placeholderClass?: string
  children?: ReactNode
}

export const CustomImage = ({
  src,
  alt,
  width = '100%',
  height = 'auto',
  aspectRatio,
  placeholderClass = 'skeleton-placeholder',
  children,
}: CustomImageProps) => {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  const handleLoad = useCallback(() => {
    setLoaded(true)
    setError(false)
  }, [])

  const handleError = useCallback(() => {
    setError(true)
  }, [])

  useEffect(() => {
    if (src) {
      const img = new Image()
      img.src = src
      img.onload = handleLoad
      img.onerror = handleError

      return () => {
        img.onload = null
        img.onerror = null
      }
    }
  }, [src, handleLoad, handleError])

  // Calculate dynamic height if aspectRatio provided (e.g., for no fixed parent)
  const dynamicHeight = aspectRatio
    ? `calc(${width} * ${aspectRatio.split('/')[1]} / ${aspectRatio.split('/')[0]})`
    : height

  if (error) {
    return (
      <div className={placeholderClass} style={{ width, height: dynamicHeight }}>
        {children ? children : 'Image failed to load'}
      </div>
    )
  }

  return (
    <div
      style={{
        position: 'relative',
        width,
        height: dynamicHeight,
        ...(aspectRatio && {
          paddingBottom: `${(parseInt(aspectRatio.split('/')[1]) / parseInt(aspectRatio.split('/')[0])) * 100}%`,
        }), // Aspect ratio padding trick
      }}
    >
      {!loaded && <div className={placeholderClass} style={{ position: 'absolute', inset: 0 }} />}
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
      />
    </div>
  )
}
