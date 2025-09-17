import { Block } from 'payload'

export const LocationsIntro: Block = {
  slug: 'locationsIntro',
  labels: { singular: 'Locations Intro', plural: 'Locations Intros' },
  fields: [
    { name: 'tagline', type: 'text', localized: true },
    { name: 'headline', type: 'text', required: true, localized: true },
    { name: 'paragraph1', type: 'textarea', required: true, localized: true },
    { name: 'paragraph2', type: 'textarea', localized: true },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  
  ],
}
