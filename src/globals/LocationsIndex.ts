import { GlobalConfig } from 'payload'
import { LocationsIntro } from '../blocks/LocationsIntro'

export const LocationsIndex: GlobalConfig = {
  slug: 'locationsIndex',
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
      blocks: [LocationsIntro],
    },
  ],
}
