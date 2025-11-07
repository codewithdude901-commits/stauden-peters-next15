'use client'
import { useState } from 'react'

import { Sprout, Globe2 } from 'lucide-react'

interface StoryGroup {
  tagline: string
  headline: string
  paragraph: string
}

interface CeoGroup {
  photo: { url: string; alt: string }
  name: string
  position: string
}

interface MissionVisionCard {
  name: string
  text: string
}

interface MissionVisionGroup {
  cards: MissionVisionCard[]
}

interface AboutCombinedBlock {
  story: StoryGroup
  ceo: CeoGroup
  missionVision: MissionVisionGroup
}

const MissionStory = ({ story, ceo, missionVision }: AboutCombinedBlock) => {
  const activeClass =
    'flex flex-col gap-1 items-center text-blue-900  justify-center w-full h-30 transition duration-300 ease-in '
  const updatedClass = activeClass + ' bg-priColor text-white'

  const [div1, setDiv1] = useState(activeClass)
  const [div2, setDiv2] = useState(updatedClass)

  const handleChange1 = () => {
    setDiv1(updatedClass)
    setDiv2(activeClass)
  }
  const handleChange2 = () => {
    setDiv1(activeClass)
    setDiv2(updatedClass)
  }

  return (
    <section className="bg-yellow-50/50 py-12 md:py-16 lg:py-24 padding">
      <div className="flex flex-col">
        <div className="text-center">
          <p className="mb-2 font-semibold text-blue-900 ">{story.tagline}</p>

          <h2 className="text-2xl font-semibold lg:font-bold lg:text-3xl mb-2 text-priColor">
            {story.headline}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 mt-6 justify-center items-center lg:items-start w-full">
          <div className="flex  flex-col gap-6 max-w-5xl">
            <p className="text-muted-foreground text-justify  text-sm leading-7 xl:text-base ">
              {story.paragraph}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-10 mx-auto lg:mx-0">
              <div className="flex flex-col lg:flex-row items-center lg:items-end lg:gap-4">
                <div className="aspect-square w-32 xl:w-36 overflow-hidden rounded-md">
                  <img
                    className="w-full h-full object-cover object-center hover:scale-[102%] transition-all duration-300"
                    src={ceo.photo.url}
                    alt={ceo.photo.alt || 'ceo-image'}
                  />
                </div>
                <div className="flex flex-col text-center lg:text-left">
                  <h2 className="font-semibold text-blue-900 mt-1">{ceo.name}</h2>
                  <p className="text-blue-600 text-sm font-medium">{ceo.position}</p>
                </div>
              </div>
            </div>
          </div>

          <div className=" bg-white sm:min-w-[500px] max-w-3xl w-full h-fit  flex-col gap-2  shadow-[0_1px_10px_0px_rgba(0,0,0,0.3)] rounded-3xl">
            <div className="relative flex justify-between">
              <div onClick={handleChange2} className={`${div2}  rounded-tl-3xl`}>
                <Globe2 className="size-12 stroke-1 " />

                <h4 className=" font-semibold">{missionVision.cards[0].name}</h4>
              </div>
              <div onClick={handleChange1} className={`${div1}  rounded-tr-3xl`}>
                {/* <img className="w-12" src="/mission.png" alt="" /> */}
                <Sprout className="size-12 stroke-1" />
                <h4 className="font-semibold">{missionVision.cards[1].name}</h4>
              </div>

              <hr className="absolute bottom-0 w-full" />
            </div>

            {div1 === updatedClass ? (
              <div className="p-8 text-gray-500 leading-7 text-sm xl:text-base text-justify">
                {missionVision.cards[1].text}
              </div>
            ) : (
              <div className="p-8 text-gray-500 leading-7 text-sm xl:text-base text-justify">
                {missionVision.cards[0].text}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionStory
