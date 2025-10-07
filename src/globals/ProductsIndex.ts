import { GlobalConfig } from 'payload'
import { ProductsIntro } from '../blocks/ProductsIntro'
import { postRevalidate } from '@/lib/postRevalidate'

export const ProductsIndex: GlobalConfig = {
  slug: 'productsIndex',
  access: { read: () => true },
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
    // {
    //   name: 'seo',
    //   type: 'group',
    //   localized: true,
    //   fields: [
    //     { name: 'title', type: 'text', required: true },
    //     { name: 'description', type: 'textarea' },
    //     { name: 'ogImage', type: 'upload', relationTo: 'media' },
    //   ],
    // },
    {
      name: 'sections',
      type: 'blocks',
      blocks: [ProductsIntro],
    },
  ],
}
