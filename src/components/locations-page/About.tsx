import { Location, Media } from '@/payload-types'

const About = ({ location }: { location: any }) => {
  console.log(location)
  return (
    <div className="padding flex flex-col xl:flex-row gap-10 mt-10 lg:mt-16 py-12 md:py-16 lg:py-24 text-center xl:text-left w-full max-w-[2000px] mx-auto">
      {/* left */}
      <div className="w-full xl:w-1/2">
        <h2 className="text-3xl font-semibold lg:font-bold lg:text-4xl mb-2 text-priColor">
          {location.name.de}
        </h2>
        <p className="mb-2 font-semibold text-blue-900 ">{location.country.de}</p>
        <p className="flex-wrap text-muted-foreground text-sm leading-7 xl:text-base text-justify">
          {location.paragraph1.de}
        </p>
        <br />
        <p className="flex-wrap text-muted-foreground text-sm leading-7 xl:text-base text-justify">
          {location.paragraph2.de}
        </p>
        <br />
        <p className="flex-wrap text-muted-foreground text-sm leading-7 xl:text-base text-justify">
          {location.paragraph3.de}
        </p>
      </div>

      {/* right */}
      <div className="w-full xl:w-1/2 h-auto">
        <img
          src={(location.featuredImage as Media).url!}
          alt="location image"
          className="w-full h-full rounded-xl object-cover"
        />
      </div>
    </div>
  )
}

export default About
