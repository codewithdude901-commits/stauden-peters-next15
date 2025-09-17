import { GlobalConfig } from 'payload'
import { Hero } from '../blocks/Hero'
import { Story } from '../blocks/Story'
import { Features } from '../blocks/Features'
import { Services } from '../blocks/Services'
import { Video } from '../blocks/Video'
import { Testimonials } from '../blocks/Testimonials'

export const Home: GlobalConfig = {
  slug: 'home',
  access: { read: () => true },
  fields: [
    // {
    //   name: 'seo',
    //   type: 'group',
    //   localized: true,
    //   fields: [
    //     { name: 'title', type: 'text', required: true },
    //     { name: 'description', type: 'textarea' },
    //     {
    //       name: 'ogImage',
    //       type: 'upload',
    //       relationTo: 'media',
    //     },
    //   ],
    // },
    {
      name: 'sections',
      type: 'blocks',
      blocks: [Hero, Story, Features, Services, Video, Testimonials],
    },
  ],
}
