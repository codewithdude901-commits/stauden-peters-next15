import { Link } from 'react-transition-progress/next'
import { Button } from '../ui/button'
import { SquareArrowOutUpRight } from 'lucide-react'

interface Card {
  image: {
    url: string
    alt: string
  }
  text: string
}

interface Props {
  tagline: string
  headline: string
  paragraph: string
  cards: Card[]
  locale: string
}

const Features = ({ tagline, headline, paragraph, cards, locale }: Props) => {
  return (
    <section className="bg-yellow-50/50 py-12 md:py-16 lg:py-24">
      <div className="  padding">
        <div className="pt-2 flex justify-between gap-6 2xl:gap-24 flex-col 2xl:flex-row ">
          {/* left section */}
          <div className=" 2xl:w-[350px] flex flex-col text-center 2xl:text-left">
            <p className="mb-2 font-semibold text-blue-900 ">{tagline}</p>

            <h2 className="text-3xl font-semibold lg:font-bold lg:text-4xl mb-2 text-priColor">
              {headline}
            </h2>

            <p className=" text-muted-foreground text-sm leading-7 xl:text-base text-justify mx-auto">
              {paragraph}
            </p>
          </div>

          {/* right section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center text-justify">
            <Link
              href={(locale === 'en' && '/en/category/elegrass') || '/category/elegrass'}
              className="w-full max-w-[440px] mx-auto
             bg-white flex flex-col gap-2 p-4 md:p-6 pb-2  rounded-lg transition-all ease-linear duration-300 shadow-lg hover:scale-[101%] "
            >
              <img
                src="/grass.png"
                alt=""
                className="h-auto max-h-12 w-auto max-w-full object-contain"
              />

              <div className=" overflow-hidden">
                <img
                  className=" w-full h-[200px] 2xl:h-[230px]  rounded-md  object-cover"
                  src={cards[0].image.url}
                  alt={cards[0].image.alt || 'category-photo'}
                />
              </div>
              <p className="mb-2 text-muted-foreground text-sm leading-7 xl:text-base">
                {cards[0].text}
              </p>
              <div className="flex-1 flex items-end">
                <Button className="bg-priColor hover:bg-priColor/90 flex gap-2 mb-2">
                  <span>{locale === 'en' ? 'Read More' : 'Mehr lesen'}</span>{' '}
                  <SquareArrowOutUpRight />
                </Button>
              </div>
            </Link>
            <Link
              href={(locale === 'en' && '/en/category/elegardens') || '/category/elegardens'}
              className="w-full max-w-[440px] mx-auto
             bg-white flex flex-col gap-2 p-4 md:p-6 pb-2  rounded-lg transition-all ease-linear duration-300 shadow-lg hover:scale-[101%]"
            >
              <img
                src="/gardens.png"
                alt=""
                className="h-auto max-h-12 w-auto max-w-full object-contain"
              />

              <div className="overflow-hidden">
                <img
                  className=" w-full h-[200px] 2xl:h-[230px]  rounded-md  object-cover"
                  src={cards[1].image.url}
                  alt={cards[1].image.alt || 'category-photo'}
                />
              </div>

              <p className="mb-2 text-muted-foreground text-sm leading-7 xl:text-base">
                {cards[1].text}
              </p>
              <div className="flex-1 flex items-end">
                <Button className="bg-priColor hover:bg-priColor/90 flex gap-2 mb-2">
                  <span>{locale === 'en' ? 'Read More' : 'Mehr lesen'}</span>{' '}
                  <SquareArrowOutUpRight />
                </Button>
              </div>
            </Link>
            <Link
              href={(locale === 'en' && '/en/category/elerose') || '/category/elerose'}
              className="w-full max-w-[440px] mx-auto
             bg-white flex flex-col gap-2 p-4 md:p-6 pb-2  rounded-lg transition-all ease-linear duration-300 shadow-lg hover:scale-[101%] "
            >
              <img
                src="/rose.png"
                alt=""
                className="h-auto max-h-12 w-auto max-w-full object-contain"
              />
              <div className=" overflow-hidden">
                <img
                  className=" w-full h-[200px] 2xl:h-[230px]  rounded-md  object-cover"
                  src={cards[2].image.url}
                  alt={cards[2].image.alt || 'category-photo'}
                />
              </div>

              <p className="mb-2 text-muted-foreground text-sm leading-7 xl:text-base">
                {cards[2].text}
              </p>
              <div className="flex-1 flex items-end">
                <Button className="bg-priColor hover:bg-priColor/90 flex gap-2 mb-2  ">
                  <span>{locale === 'en' ? 'Read More' : 'Mehr lesen'}</span>{' '}
                  <SquareArrowOutUpRight />
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
