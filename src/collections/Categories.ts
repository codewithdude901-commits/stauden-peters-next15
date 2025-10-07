import { CollectionConfig, CollectionSlug } from 'payload'
import { ProductCategories } from './ProductCategories'
import { postRevalidate } from '@/lib/postRevalidate'

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
  hooks: {
    afterChange: [
      async ({ doc }) => {
        const paths = ['/', '/en']
        await postRevalidate(paths)
        return doc
      },
    ],
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
