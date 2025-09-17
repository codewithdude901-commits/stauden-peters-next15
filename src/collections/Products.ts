import { CollectionConfig, CollectionSlug } from 'payload'
import { ProductCategories } from './ProductCategories'

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
      localized: true, // "Rosenstrauch" vs "Rose Bush"
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      localized: true,
    },
    {
      name: 'scientificName',
      type: 'text',
      required: true, // Latin, same across locales
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
   

    // Detail content
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  
    {
      name: 'details',
      type: 'group',
      fields: [
        { name: 'height', type: 'text', localized: true },
        { name: 'diameter', type: 'text', localized: true },
        { name: 'hardiness', type: 'text', localized: true },
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
