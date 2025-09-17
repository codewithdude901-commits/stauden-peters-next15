import { Block } from 'payload'

export const Story: Block = {
  slug: 'story',
  labels: { singular: 'Story', plural: 'Stories' },
  fields: [
    { name: 'tagline', type: 'text', localized: true },
    { name: 'headline', type: 'text', required: true, localized: true },
    // { name: 'subtitle', type: 'text', localized: true },
    { name: 'paragraph1', type: 'textarea', required: true, localized: true },
    { name: 'paragraph2', type: 'textarea', localized: true },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    // {
    //   name: 'alt',
    //   type: 'text',
    //   required: false,
    //   localized: true,
    // },
  ],
}
