// payload/globals/Home.ts
import { postRevalidate } from '@/lib/postRevalidate'
import type { GlobalConfig } from 'payload'
import { Features } from '../blocks/Features'
import { Hero } from '../blocks/Hero'
import { Services } from '../blocks/Services'
import { Story } from '../blocks/Story'
import { Testimonials } from '../blocks/Testimonials'
import { Video } from '../blocks/Video'

export const Home: GlobalConfig = {
  slug: 'home',
  access: { read: () => true },
  hooks: {
    afterChange: [
      async ({ doc }) => {
        const paths = ['/', '/en'] // revalidate homepage
        await postRevalidate(paths)
        return doc
      },
    ],
  },
  fields: [
    {
      name: 'sections',
      type: 'blocks',
      blocks: [Hero, Story, Features, Services, Video, Testimonials],
    },
  ],
}
