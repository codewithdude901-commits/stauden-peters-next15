import React from 'react'
import type { LocationsIndex, Media, Location } from '@/payload-types'
import Link from 'next/link'

const LocationIndex = ({
  introData,
  locationData,
  locationH3,
}: {
  introData: LocationsIndex
  locationData: Location[]
  locationH3: string
}) => {
  if (!introData.sections) return null
  const data = introData?.sections[0]
  return (
    <div className="flex flex-col mt-10 lg:mt-14 py-12 md:py-16 lg:py-20 ">
      <div className="flex flex-col text-center max-w-7xl mx-auto pb-8 ">
        <p className="mb-2 font-semibold text-blue-900">{data.tagline}</p>

        <h2 className="text-xl font-semibold lg:font-bold lg:text-4xl mb-2 text-priColor">
          {data.headline}
        </h2>

        <p className="flex-wrap text-muted-foreground text-sm xl:text-base leading-7 px-4">
          {data.paragraph1}
        </p>

        <p className="  flex-wrap text-muted-foreground text-sm  xl:text-base leading-7 px-4">
          {data.paragraph2}
        </p>
      </div>
      {/* image */}
      <div className="h-auto max-h-[670px] max-w-7xl rounded-2xl flex justify-center self-center overflow-hidden mb-12 md:mb-20 mx-4">
        <img
          src={(data.image as Media).url!}
          alt="locations image"
          className="rounded-2xl h-full w-full object-cover"
        />
      </div>
      {/* Locations Grid */}
      <div className="py-12 md:py-16  bg-yellow-50/50">
        <div className="">
          <h3 className="text-xl font-semibold text-blue-500 mb-4 text-center">{locationH3}</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 padding">
            {locationData.map((location) => (
              <Link href={`/en/locations/${location.id}`} key={location.id}>
                <div className="bg-white rounded-xl shadow-md items-stretch h-full">
                  <div className="rounded-t-xl overflow-hidden h-64 border  ">
                    <img
                      src={(location.thumbnail as Media).url!}
                      alt="location"
                      className="hover:scale-[103%] h-full w-full object-cover transition-transform duration-300 "
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="font-semibold text-blue-900 mb-3">{location.name}</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <div className="flex items-start">
                        <span className="mr-2 text-sm">📍</span>
                        <p className="text-sm">{location.address}</p>
                      </div>
                      {location.phone && (
                        <div className="flex items-center">
                          <span className="mr-2 text-sm">📞</span>
                          <p className="text-sm">{location.phone}</p>
                        </div>
                      )}

                      <div className="flex items-start">
                        <span className="mr-2 text-sm">⏰</span>
                        <p className="text-sm">{location.time}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationIndex
