import { CollectionConfig, CollectionSlug } from 'payload'
import { ProductCategories } from './ProductCategories'
import { COLOR } from '@/lib/color'

export const Products: CollectionConfig = {
  slug: 'products',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'scientificName'],
  },
  fields: [
    // Identity
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    // {
    //   name: 'slug',
    //   type: 'text',
    //   required: true,
    //   unique: true,
    //   localized: true,
    // },
    {
      name: 'scientificName',
      type: 'text',
      // required: true, // Latin, same across locales
    },

    // Category
    {
      name: 'category',
      type: 'relationship',
      relationTo: ProductCategories.slug as CollectionSlug,
      required: true,
    },

    // Index card
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    COLOR({
      name: 'thumbnailColor',
      label: 'Thumbnail Color',
      required: true,
      defaultValue: '#875b72',
    }),

    // Detail content
    {
      name: 'gallery',
      type: 'group',

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
      name: 'details',
      type: 'group',
      fields: [
        { name: 'height', type: 'text' },
        { name: 'diameter', type: 'text' },
        { name: 'hardiness', type: 'text' },
        { name: 'light', type: 'text', localized: true },
      ],
    },
    { name: 'description', type: 'textarea', localized: true },

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
