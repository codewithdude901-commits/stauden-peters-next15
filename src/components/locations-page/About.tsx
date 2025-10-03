'use client'

import { Media } from '@/payload-types'
import Image from 'next/image'

const About = ({ location }: { location: any }) => {
  return (
    <div className="padding flex flex-col xl:flex-row gap-10 mt-10 lg:mt-16 py-12 md:py-16 lg:py-24 text-center xl:text-left w-full max-w-[2000px] mx-auto">
      {/* left */}
      <div className="w-full xl:w-1/2">
        <h2 className="text-3xl font-semibold lg:font-bold lg:text-4xl mb-2 text-priColor">
          {location.name}
        </h2>
        <p className="mb-2 font-semibold text-blue-900 ">{location.country}</p>
        <p className="flex-wrap text-muted-foreground text-sm leading-7 xl:text-base text-justify">
          {location.paragraph1}
        </p>
        <br />
        <p className="flex-wrap text-muted-foreground text-sm leading-7 xl:text-base text-justify">
          {location.paragraph2}
        </p>
        <br />
        <p className="flex-wrap text-muted-foreground text-sm leading-7 xl:text-base text-justify">
          {location.paragraph3}
        </p>
      </div>

      {/* right */}

      <div className="w-full xl:w-1/2 2xl:max-h-[550px] rounded-xl overflow-hidden">

        <Image
          src={(location.featuredImage as Media).url!}
          alt={'location image'}
          priority
          width={1920}
          height={1080}
          placeholder="blur"
         blurDataURL="/placeholder.jpg"
          className="h-full object-cover"
        />
      </div>
    </div>
  )
}

export default About
