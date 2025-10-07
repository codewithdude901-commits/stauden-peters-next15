import { postRevalidate } from '@/lib/postRevalidate'
import { CollectionConfig } from 'payload'

export const FormSubmissions: CollectionConfig = {
  slug: 'formSubmissions',
  access: {
    read: ({ req }) => {
      return Boolean(req.user)
    },
    create: () => true, // We’ll restrict later with API route
    update: () => false,
    delete: () => false,
  },
  admin: {
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'email', 'createdAt'],
  },

  hooks: {
    afterChange: [
      async ({ doc }) => {
        const paths = ['/kontakt', '/en/contact']
        await postRevalidate(paths)
        return doc
      },
    ],
  },
  fields: [
    { name: 'fullName', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'phone', type: 'text' },
    { name: 'notes', type: 'textarea' },
  ],
}
