import { GlobalConfig } from 'payload'

export const Contact: GlobalConfig = {
  slug: 'contact',
  access: { read: () => true },
  fields: [
    // SEO
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
