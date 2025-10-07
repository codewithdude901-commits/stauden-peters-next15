import { MissionStory } from '@/blocks/MissionStory'
import { GlobalConfig } from 'payload'
import { AboutIntro } from '../blocks/AboutIntro'
import { TeamSection } from '../blocks/TeamSection'
import { postRevalidate } from '@/lib/postRevalidate'

export const About: GlobalConfig = {
  slug: 'about',
  access: { read: () => true },
  hooks: {
    afterChange: [
      async ({ doc }) => {
        const paths = ['/about', '/en/about']
        await postRevalidate(paths)
        return doc
      },
    ],
  },
  fields: [
    {
      name: 'sections',
      type: 'blocks',
      blocks: [AboutIntro, MissionStory, TeamSection],
    },
  ],
}
