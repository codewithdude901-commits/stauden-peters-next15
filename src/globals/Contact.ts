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

    // Enquiry Form labels
    {
      name: 'formLabels',
      type: 'group',
      localized: true,
      fields: [
        { name: 'fullName', type: 'text', defaultValue: 'Full Name' },
        { name: 'email', type: 'text', defaultValue: 'Email' },
        { name: 'phone', type: 'text', defaultValue: 'Phone' },
        { name: 'notes', type: 'text', defaultValue: 'Notes' },
        { name: 'submitButton', type: 'text', defaultValue: 'Submit' },
      ],
    },

    // Error messages
    {
      name: 'formErrors',
      type: 'group',
      localized: true,
      fields: [
        { name: 'required', type: 'text', defaultValue: 'This field is required' },
        { name: 'invalidEmail', type: 'text', defaultValue: 'Invalid email address' },
        { name: 'invalidPhone', type: 'text', defaultValue: 'Invalid phone number' },
      ],
    },

    // Success message
    {
      name: 'formSuccess',
      type: 'text',
      localized: true,
      defaultValue: 'Thanks! We will get back to you soon.',
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
