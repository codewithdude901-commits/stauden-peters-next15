import { GlobalConfig } from 'payload'
import { LocationsIntro } from '../blocks/LocationsIntro'
import { postRevalidate } from '@/lib/postRevalidate'

export const LocationsIndex: GlobalConfig = {
  slug: 'locationsIndex',
  access: { read: () => true },
  hooks: {
    afterChange: [
      async ({ doc }) => {
        const paths = ['/standorte', '/en/locations']
        await postRevalidate(paths)
        return doc
      },
    ],
  },
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
      blocks: [LocationsIntro],
    },
  ],
}
