import Image from 'next/image'

interface Props {
  tagline: string
  headline: string
  paragraph1: string
  paragraph2: string
  image: {
    url: string
    alt: string
  }
}

const AboutBrief = ({ tagline, headline, paragraph1, paragraph2, image }: Props) => {
  return (
    <>
      <div className="padding flex flex-col xl:flex-row gap-6 py-12 md:py-16 xl:py-24 text-center xl:text-left items-stretch w-full max-w-[2000px] mx-auto">
        {/* left side */}
        <div className="w-full xl:w-1/2">
          {/* <p className="mb-2 font-semibold text-blue-900 ">Our Story</p> */}
          <p className="mb-2 font-semibold text-blue-900 ">{tagline}</p>
          {/* <h2 className="text-3xl font-semibold lg:font-bold lg:text-4xl mb-2 text-priColor">
            Connecting With Nature
          </h2> */}
          <h2 className="text-3xl font-semibold lg:font-bold lg:text-4xl mb-2 text-priColor">
            {headline}
          </h2>
          <p className="flex-wrap text-muted-foreground text-sm xl:text-base leading-7 text-justify">
            {paragraph1}
          </p>

          <br />
          <p className="hidden lg:flex flex-wrap text-muted-foreground text-sm  leading-7 xl:text-base text-justify">
            {paragraph2}
          </p>
        </div>

        {/* right side */}
        <div className="w-full xl:w-1/2 h-auto max-h-[500px] overflow-hidden rounded-xl">
          <Image
            src={image.url}
            alt={image?.alt || 'hero-story-photo'}
            priority
            width={1920}
            height={1080}
            className="w-full h-full rounded-xl object-cover xl:object-left-top "
            placeholder="blur"
            blurDataURL="/placeholder.jpg"
          />
        </div>
      </div>
    </>
  )
}

export default AboutBrief
