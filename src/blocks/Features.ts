import { Block } from 'payload'

export const Features: Block = {
  slug: 'features',
  fields: [
    { name: 'tagline', type: 'text', localized: true },
    { name: 'headline', type: 'text', required: true, localized: true },
    // { name: 'subtitle', type: 'text', localized: true },
    { name: 'paragraph', type: 'textarea', localized: true },
    {
      name: 'cards',
      type: 'array',
      minRows: 3,
      maxRows: 6,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      
        {
          name: 'text',
          type: 'textarea',
          required: true,
          localized: true,
        },
      ],
    },
  ],
}
