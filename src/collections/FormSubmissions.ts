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
  fields: [
    { name: 'fullName', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'phone', type: 'text' },
    { name: 'notes', type: 'textarea' },
    { name: 'locale', type: 'select', required: true, options: ['de', 'en'] },
    { name: 'consent', type: 'checkbox', defaultValue: false },
    {
      name: 'meta',
      type: 'group',
      fields: [
        { name: 'ip', type: 'text' },
        { name: 'userAgent', type: 'text' },
        { name: 'referer', type: 'text' },
      ],
    },
  ],
}
