import { postRevalidate } from '@/lib/postRevalidate'
import { GlobalConfig } from 'payload'

export const Contact: GlobalConfig = {
  slug: 'contact',
  access: { read: () => true },
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
  
    // Address Section
    {
      name: 'address',
      type: 'group',
      fields: [
        { name: 'line1', type: 'text' },
        { name: 'line2', type: 'text' },
        { name: 'line3', type: 'text' },
        { name: 'phone', type: 'text' },
        { name: 'email', type: 'email' },
      ],
    },

    // Social Media
    {
      name: 'socials',
      type: 'group',
      fields: [
        { name: 'facebook', type: 'text' },
        { name: 'instagram', type: 'text' },
        { name: 'linkedIn', type: 'text' },
        { name: 'youtube', type: 'text' },
      ],
    },

    // Functional settings
    {
      name: 'formSettings',
      type: 'group',
      fields: [
        { name: 'toEmail', type: 'text', required: true }, // Resend recipient
        { name: 'subjectPrefix', type: 'text', defaultValue: '[Website Contact]' },
      ],
    },
  ],
}
