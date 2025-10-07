import AboutUs from '@/components/about-page/AboutUs'
import MissionStory from '@/components/about-page/MissionStory'
import Team from '@/components/about-page/Team'
import { fetchGlobal } from '@/lib/payloadClient'
import { About } from '@/payload-types'

export default async function AboutPageDE() {
  const about = await fetchGlobal<About>({ slug: 'about', locale: 'de' })

  if (!about) {
    return <div>Inhalt wird geladen...</div>
  }

  return (
    <div className="min-h-screen">
      {about.sections?.map((block: any, idx: number) => {
        switch (block.blockType) {
          case 'aboutIntro':
            return (
              <AboutUs
                key={idx}
                tagline={block.tagline}
                headline={block.headline}
                paragraph={block.paragraph}
                image={block.image}
              />
            )

          case 'aboutCombined':
            return (
              <MissionStory
                key={idx}
                story={block.story}
                ceo={block.ceo}
                missionVision={block.missionVision}
              />
            )

          case 'teamSection':
            return (
              <Team
                key={idx}
                tagline={block.tagline}
                headline={block.headline}
                people={block.members}
              />
            )

          default:
            return null
        }
      })}
    </div>
  )
}
