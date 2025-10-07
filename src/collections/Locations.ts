import { postRevalidate } from '@/lib/postRevalidate'
import { CollectionConfig } from 'payload'

export const Locations: CollectionConfig = {
  slug: 'locations',
  access: {
    read: () => true, // public read
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'country', 'phone'],
  },
  hooks: {
      afterChange: [
        async ({ doc }) => {
          const paths = ['/standorte', '/en/locations', `/standorte/${doc.id}`, `/en/locations/${doc.id}`]
          await postRevalidate(paths)
          return doc
        },
      ],
    },
  fields: [
    // Identity
    {
      name: 'name',
      type: 'text',
      required: true,
      localized: true, // "München" vs "Munich"
    },
    // {
    //   name: 'slug',
    //   type: 'text',
    //   required: true,
    //   unique: true,
    //   localized: true, // SEO-friendly slugs in both DE/EN
    // },

    // Card fields (shown on index)
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },

    { name: 'address', type: 'textarea' }, // multi-line address, non-localized
    { name: 'phone', type: 'text' },
    { name: 'time', type: 'text', localized: true }, // e.g. "Mo–Fr 9–18 Uhr" vs "Mon–Fri 9am–6pm"

    // Detail page content
    {
      name: 'headline',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'country',
      type: 'text',
      required: true,
      // localized: true, // "Deutschland" vs "Germany"
    },
    { name: 'paragraph1', type: 'textarea', localized: true },
    { name: 'paragraph2', type: 'textarea', localized: true },
    { name: 'paragraph3', type: 'textarea', localized: true },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },

    {
      name: 'managers',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
        },
        {
          name: 'position',
          type: 'text',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
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

    {
      name: 'teamImage',
      label: 'Team Image',
      type: 'upload',
      relationTo: 'media',
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
