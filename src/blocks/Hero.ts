import { Block } from 'payload'

export const Hero: Block = {
  slug: 'hero',
  labels: { singular: 'Hero', plural: 'Hero Sections' },
  fields: [
    {
      name: 'headline',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      localized: true,
    },
    {
      name: 'slides',
      type: 'array',
      minRows: 1,
      maxRows: 5,
      fields: [
        {
          name: 'desktopImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
          hasMany: true,
        },
        {
          name: 'mobileImage',
          type: 'upload',
          relationTo: 'media',
          hasMany: true,
        },
        // {
        //   name: 'alt',
        //   type: 'text',
        //   required: false,
        //   localized: true,
        // },
      ],
    },
  ],
}
