import { Block } from 'payload'

export const AboutIntro: Block = {
  slug: 'aboutIntro',
  labels: { singular: 'About Intro', plural: 'About Intros' },
  fields: [
    { name: 'tagline', type: 'text', localized: true },
    { name: 'headline', type: 'text', required: true, localized: true },
    { name: 'paragraph', type: 'textarea', required: true, localized: true },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
   
  ],
}
