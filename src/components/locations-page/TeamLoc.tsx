import React from 'react'
import Image from 'next/image'
import { Media } from '@/payload-types'

const TeamLoc = ({ team, locale }: { team: Media | string; locale: string }) => {
  return (
    <section className="py-12 md:py-16 lg:py-24 padding">
      <div className=" ">
        <div className="mb-10 text-center">
          <p className="mb-2 font-semibold text-blue-900 ">
            {locale === 'en'
              ? 'United by Passion, Driven by Excellence'
              : 'Durch Leidenschaft vereint, durch Exzellenz angetrieben'}
          </p>

          <h2 className="text-2xl font-semibold lg:font-bold lg:text-3xl mb-2 text-priColor">
            {locale === 'en' ? 'Our Team' : 'Unser Team'}
          </h2>
        </div>

        {/* team Photos */}

        <Image
          src={(team as Media).url!}
          alt="team image"
          width={3000}
          height={2000}
          objectFit="cover"
          className="rounded-xl w-full h-auto max-h-[700px] overflow-hidden mx-auto object-cover"
        />
      </div>
    </section>
  )
}

export default TeamLoc
