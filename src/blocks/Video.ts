import { Block } from 'payload'

export const Video: Block = {
  slug: 'video',
  fields: [
    { name: 'tagline', type: 'text', localized: true },
    { name: 'headline', type: 'text', required: true, localized: true },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },

    { name: 'youtubeId', type: 'text', required: true },
  ],
}
