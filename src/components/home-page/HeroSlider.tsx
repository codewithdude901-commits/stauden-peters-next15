import Carousel from './Carousel'

type HeroSlide = {
  desktopImage: { url: string }
  mobileImage?: { url: string }
  alt: string
}

interface HeroProps {
  slides: HeroSlide[]
  headline: string
  subtitle: string
}

function Headline({ text }: { text: string }) {
  const words = text.split(' ')
  if (words.length <= 2) return <>{text}</>

  return (
    <>
      <h1 className="text-4xl lg:text-5xl 2xl:text-6xl font-semibold mb-2 text-white ">
        {words[0]} {words[1]}
        <br />
        {words.slice(2).join(' ')}
      </h1>
    </>
  )
}

const HeroSlider = ({ headline, subtitle, slides }: HeroProps) => {
  const slidePerView = 1
  const className = 'opacity-80'
  return (
    <>
      <div className="relative">
        <div className="bg-black w-screen">
          <Carousel slides={slides} className={className} slidesPerView={slidePerView} />

          <div className="absolute justify-center inset-0 z-10 flex flex-col w-full items-center text-center padding pointer-events-none">
            <Headline text={headline} />
            <div className=" text-white rounded-md px-4 py-2 flex justify-center items-center text-center mb-3 mx-2">
              <h5 className=" font-light tracking-wide ">{subtitle}</h5>
            </div>
            {/* <Link href={"/about"} className="mt-2">
              <Button className="w-32 bg-blue-600 hover:bg-blue-800 cursor-pointer  font-normal tracking-wide text-white ">
                Mehr lesen
              </Button>
            </Link> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSlider
