'use client'

import YouTubeThumbnailPlayer from '../YouTubeThumbnailPlayer'

interface Props {
  tagline: string
  headline: string
  thumbnail: {
    url: string
    alt: string
  }
  videoId: string
}

const VideoSection = ({ tagline, headline, thumbnail, videoId }: Props) => {
  return (
    <section className="bg-yellow-50/50 py-12 md:py-16 lg:py-24 backdrop-blur-2xl ">
      <div className="flex flex-col justify-center items-center text-center gap-4 z-30  ">
        <div className=" flex flex-col max-w-7xl">
          <p className="mb-2 font-semibold text-blue-900 px-2">{tagline}</p>
          <h2 className="text-3xl font-semibold lg:font-bold lg:text-4xl mb-2 px-2 text-priColor">
            {headline}
          </h2>
        </div>
        <div className="max-w-7xl w-full lg:px-16 px-4">
          <YouTubeThumbnailPlayer videoId={videoId} thumbnail={thumbnail} controls={false} />
        </div>
      </div>
    </section>
  )
}

export default VideoSection
