import { postRevalidate } from '@/lib/postRevalidate'
import { CollectionConfig } from 'payload'

export const ProductCategories: CollectionConfig = {
  slug: 'productCategories',
  access: { read: () => true },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title'],
  },

  hooks: {
    afterChange: [
      async ({ doc }) => {
        const paths = ['/produkte', '/en/products']
        await postRevalidate(paths)
        return doc
      },
    ],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      // localized: true, // e.g. "Bäume" vs "Trees"
    },
    // {
    //   name: 'slug',
    //   type: 'text',
    //   required: true,
    //   unique: true,
    //   localized: true,
    // },
  ],
}
