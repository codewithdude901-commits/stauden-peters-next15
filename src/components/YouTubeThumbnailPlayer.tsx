'use client'
import React, { useState } from 'react'

interface YouTubeThumbnailPlayerProps {
  videoId: string
  autoplay?: boolean
  loop?: boolean
  mute?: boolean
  controls?: boolean
  thumbnail: {
    url: string
    alt: string
  }
  isContentPlaying?: boolean
}

const YouTubeThumbnailPlayer: React.FC<YouTubeThumbnailPlayerProps> = ({
  videoId,
  autoplay = true,
  loop = false,
  mute = true,
  controls = true,
  thumbnail,
  isContentPlaying,
}) => {
  const [isPlaying, setIsPlaying] = useState(isContentPlaying ? true : false)

  const autoplayParam = autoplay ? 'autoplay=1' : ''
  const muteParam = mute ? 'mute=1' : ''
  const loopParam = loop ? `loop=1&playlist=${videoId}` : ''
  const relParam = 'rel=0'
  const controlsParam = controls ? 'controls=1' : 'controls=0'
  const modestBrandingParam = 'modestbranding=1'

  const params = [autoplayParam, muteParam, loopParam, relParam, controlsParam, modestBrandingParam]
    .filter(Boolean)
    .join('&')

  return (
    <div
      className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg cursor-pointer"
      onClick={() => setIsPlaying(true)}
    >
      {isPlaying ? (
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?${params}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          {/* Thumbnail */}
          <img
            src={thumbnail.url}
            alt={thumbnail.alt || 'YouTube Video Thumbnail'}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="white"
                viewBox="0 0 16 16"
              >
                <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l4.5-2.5a.5.5 0 0 0 0-.814l-4.5-2.5z" />
              </svg>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default YouTubeThumbnailPlayer
