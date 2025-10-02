import { fetchGlobal } from '@/lib/fetchFromCMS'
import { Home } from '@/payload-types'
import HeroSlider from '@/components/home-page/HeroSlider'
import AboutBrief from '@/components/home-page/AboutBrief'
import Features from '@/components/home-page/Features'
import Services from '@/components/home-page/Services'
import VideoSection from '@/components/home-page/VideoSection'
import Testimonials from '@/components/home-page/Testimonials'

export default async function HomePageDE() {
  const home = await fetchGlobal<Home>('home', 'en')

  return (
    <main className="overflow-hidden flex flex-col mt-[65px]">
      {home.sections?.map((block: any, idx: number) => {
        switch (block.blockType) {
          case 'hero':
            return (
              <HeroSlider
                key={idx}
                headline={block.headline}
                subtitle={block.subtitle}
                slides={block.slides.map((s: any) => ({
                  desktopImage: s.desktopImage,
                  mobileImage: s.mobileImage,
                }))}
              />
            )
          case 'story':
            return (
              <AboutBrief
                key={idx}
                tagline={block.tagline}
                headline={block.headline}
                paragraph1={block.paragraph1}
                paragraph2={block.paragraph2}
                image={block.image}
              />
            )

          case 'features':
            return (
              <Features
                key={idx}
                tagline={block.tagline}
                headline={block.headline}
                paragraph={block.paragraph}
                cards={block.cards}
                locale={'en'}
              />
            )

          case 'services':
            return (
              <Services
                key={idx}
                tagline={block.tagline}
                headline={block.headline}
                cards={block.cards}
              />
            )

          case 'video':
            return (
              <VideoSection
                key={idx}
                tagline={block.tagline}
                headline={block.headline}
                thumbnail={block.thumbnail}
                videoId={block.youtubeId}
              />
            )

          case 'testimonials':
            return (
              <Testimonials
                key={idx}
                tagline={block.tagline}
                headline={block.headline}
                items={block.items}
              />
            )

          default:
            return null
        }
      })}
    </main>
  )
}
