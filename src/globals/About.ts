import { MissionStory } from '@/blocks/MissionStory'
import { GlobalConfig } from 'payload'
import { AboutIntro } from '../blocks/AboutIntro'
import { TeamSection } from '../blocks/TeamSection'

export const About: GlobalConfig = {
  slug: 'about',
  access: { read: () => true },
  fields: [
    // {
    //   name: 'seo',
    //   type: 'group',
    //   localized: true,
    //   fields: [
    //     { name: 'title', type: 'text', required: true },
    //     { name: 'description', type: 'textarea' },
    //     { name: 'ogImage', type: 'upload', relationTo: 'media' },
    //   ],
    // },
    {
      name: 'sections',
      type: 'blocks',
      blocks: [AboutIntro, MissionStory, TeamSection],
    },
  ],
}
