import { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  access: {
    read: () => true, // public
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'tag', 'location'],
  },
  fields: [
    // Identity
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    // {
    //   name: 'slug',
    //   type: 'text',
    //   required: true,
    //   unique: true,
    //   localized: true,
    // },

    // Card fields
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },

    {
      name: 'cardTitle',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'tag',
      type: 'text',
      required: true,
      localized: true, // e.g. “Wohnbau” vs “Residential”
    },

    // Detail page content
    {
      name: 'location',
      type: 'text',
      localized: true,
    },
    {
      name: 'paragraph1',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'paragraph2',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'gallery',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          hasMany: true,
        },
      ],
    },

    // SEO
    // {
    //   name: 'seo',
    //   type: 'group',
    //   localized: true,
    //   fields: [
    //     { name: 'title', type: 'text' },
    //     { name: 'description', type: 'textarea' },
    //     { name: 'ogImage', type: 'upload', relationTo: 'media' },
    //   ],
    // },
  ],
}
