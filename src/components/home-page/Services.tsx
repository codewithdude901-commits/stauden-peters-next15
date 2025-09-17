interface Card {
  headline: string
  text: string
}

interface Props {
  tagline: string
  headline: string
  cards: Card[]
}

const SplitWords = ({ word }: { word: string }) => {
  const SplitWords = word.split(' ')
  return (
    <h2 className="text-xl font-semibold flex flex-wrap">
      <span className="text-priColor mr-2">{SplitWords[0]} </span>
      {SplitWords.slice(1).join(' ')}
    </h2>
  )
}

const Services = ({ tagline, headline, cards }: Props) => {
  return (
    <div className="padding py-12 md:py-16 lg:py-24 flex flex-col justify-center items-center px-6">
      {/* section1 */}
      <div className=" flex flex-col text-center">
        {/* <p className="mb-2 font-semibold text-blue-900">Rooted in Excellence, Growing Trust</p> */}
        <p className="mb-2 font-semibold text-blue-900">{tagline}</p>
        <h2 className="text-3xl font-semibold lg:font-bold lg:text-4xl mb-10 text-priColor">
          {headline}
        </h2>
        {/* <h2 className="text-3xl font-semibold lg:font-bold lg:text-4xl mb-10 text-priColor">
          Commitment to Quality and Trust
        </h2> */}
      </div>

      {/* section2 */}
      <div className="flex justify-center flex-wrap gap-4 text-justify">
        <div
          className="relative max-w-[440px] p-4 px-10 
                   shadow-[0_1px_10px_0px_rgba(0,0,0,0.3)]
                   min-h-[200px] md:min-h-[250px] rounded-2xl 
                   before:content-[''] before:absolute before:left-0  before:bg-blue-900 before:w-1.5 
                   before:h-full before:rounded-md before:top-0 overflow-hidden hover:before:scale-y-50 before:transition-transform before:duration-500 ease-linear "
        >
          <div>
            <div className="flex gap-4 items-center mb-2">
              <div className="bg-blue-900 h-12 min-w-12 flex justify-center items-center rounded-lg">
                <img src="/icon1.png" alt="" className="size-8" />
              </div>
              <SplitWords word={cards[0].headline} />
            </div>

            <p className="mb-4 text-muted-foreground  text-sm xl:text-base leading-7">
              {cards[0].text}
            </p>
          </div>
        </div>

        <div
          className="relative flex max-w-[440px]  p-4 px-10  
                   shadow-[0_1px_10px_0px_rgba(0,0,0,0.3)]
                    min-h-[200px] md:min-h-[250px] rounded-2xl 
                   before:content-[''] before:absolute before:left-0  before:bg-blue-900 before:w-1.5 
                   before:h-full before:rounded-md before:top-0 overflow-hidden hover:before:scale-y-50 before:transition-transform before:duration-500 ease-linear "
        >
          <div>
            <div className="flex gap-4 items-center mb-2">
              <div className="bg-blue-900  h-12 min-w-12 p-1  flex justify-center items-center rounded-lg">
                <img src="/icon2.png" alt="" className="h-9 object-cover" />
              </div>
              <SplitWords word={cards[1].headline} />
            </div>

            <p className="mb-4 text-muted-foreground  text-sm xl:text-base leading-7 ">
              {cards[1].text}
            </p>
          </div>
        </div>

        <div
          className="relative max-w-[440px]  p-4 px-10 
                   shadow-[0_1px_10px_0px_rgba(0,0,0,0.3)]
                    min-h-[200px] md:min-h-[250px] rounded-2xl 
                   before:content-[''] before:absolute before:left-0  before:bg-blue-900 before:w-1.5 
                   before:h-full before:rounded-md before:top-0 overflow-hidden hover:before:scale-y-50 before:transition-transform before:duration-500 ease-linear "
        >
          <div>
            <div className="flex gap-4 items-center mb-2">
              <div className="bg-blue-900 h-12 min-w-12  flex justify-center items-center rounded-lg">
                <img src="/icon3.png" alt="" className="h-7 object-cover " />
              </div>
              <SplitWords word={cards[2].headline} />
            </div>

            <p className="mb-4 text-muted-foreground  text-sm xl:text-base leading-7">
              {cards[2].text}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
