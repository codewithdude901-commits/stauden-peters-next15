'use client'
import Image from 'next/image'

interface Props {
  tagline: string
  headline: string
  paragraph: string
  image: { url: string; alt: string }
}

const AboutUs = ({ tagline, headline, paragraph, image }: Props) => {
  return (
    <div className="padding flex flex-col xl:flex-row gap-10 mt-10 lg:mt-16 py-12 md:py-16 lg:py-20 text-center xl:text-left w-full mx-auto">
      {/* left side */}
      <div className="w-full xl:w-1/2">
        <p className="mb-2 font-semibold text-blue-900 ">{tagline}</p>
        <h2 className="text-3xl font-semibold lg:font-bold lg:text-4xl mb-2 text-priColor">
          {headline}
        </h2>
        <p className="flex-wrap text-muted-foreground text-sm leading-7 xl:text-base text-justify">
          {paragraph}
        </p>
      </div>

      {/* right side */}
      <div className="w-full xl:w-1/2 max-h-[550px] h-auto rounded-xl overflow-hidden">
        <Image
          src={image.url}
          alt={image.alt || 'photo'}
          priority
          width={1920}
          height={1080}
          placeholder="blur"
          blurDataURL="/placeholder.jpg"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  )
}

export default AboutUs
