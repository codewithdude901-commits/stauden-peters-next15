import { Block } from 'payload'

export const Testimonials: Block = {
  slug: 'testimonials',
  fields: [
    { name: 'tagline', type: 'text', localized: true },
    { name: 'headline', type: 'text', required: true, localized: true },
    {
      name: 'items',
      type: 'array',
      fields: [
        {
          name: 'photo',
          type: 'upload',
          relationTo: 'media',
        },

        { name: 'name', type: 'text', required: true }, // not localized
        { name: 'position', type: 'text', localized: true },
        { name: 'text', type: 'textarea', required: true, localized: true },
      ],
    },
  ],
}
