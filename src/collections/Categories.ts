import { CollectionConfig, CollectionSlug } from 'payload'
import { ProductCategories } from './ProductCategories'

export const Categories: CollectionConfig = {
  slug: 'categories',
  access: {
    read: () => true, // public read
  },
  labels: { singular: 'Category', plural: 'Categories' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title'],
  },
  fields: [
    { name: 'title', type: 'text' },
    {
      name: 'category',
      type: 'relationship',
      relationTo: ProductCategories.slug as CollectionSlug,
      required: true,
    },
    { name: 'headline', type: 'text', required: true, localized: true },
    { name: 'videoId', type: 'text', required: true },
    { name: 'paragraph1', type: 'textarea', required: true, localized: true },
    {
      name: 'image1',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    { name: 'paragraph2', type: 'textarea', localized: true },
    { name: 'paragraph3', type: 'textarea', localized: true },
    {
      name: 'image2',
      type: 'upload',
      relationTo: 'media',
    },
    { name: 'buttonText', type: 'text', required: true, localized: true },
    // { name: 'buttonLink', type: 'text', required: true },
  ],
}
