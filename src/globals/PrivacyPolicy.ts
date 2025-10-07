import { postRevalidate } from '@/lib/postRevalidate'
import { GlobalConfig } from 'payload'

export const PrivacyPolicy: GlobalConfig = {
  slug: 'privacyPolicy',
  access: { read: () => true },
     hooks: {
          afterChange: [
            async ({ doc }) => {
              const paths = ['/privacy-policy', '/en/privacy-policy']
              await postRevalidate(paths)
              return doc
            },
          ],
        },
  fields: [

    {
      name: 'content',
      type: 'richText',
      required: true,
      localized: true,
    },
  ],
}
