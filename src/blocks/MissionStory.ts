import { Block } from 'payload'

export const MissionStory: Block = {
  slug: 'aboutCombined',
  labels: { singular: 'About Combined', plural: 'About Combined Sections' },
  fields: [
    // Story section
    {
      name: 'story',
      type: 'group',
      fields: [
        { name: 'tagline', type: 'text', localized: true },
        { name: 'headline', type: 'text', required: true, localized: true },
        { name: 'paragraph', type: 'textarea', required: true, localized: true },
      ],
    },

    // CEO section
    {
      name: 'ceo',
      type: 'group',
      fields: [
        {
          name: 'photo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        { name: 'name', type: 'text', required: true }, // not localized
        { name: 'position', type: 'text', localized: true },
      ],
    },

    // Mission & Vision
    {
      name: 'missionVision',
      type: 'group',
      fields: [
        {
          name: 'cards',
          type: 'array',
          minRows: 2,
          maxRows: 2,
          fields: [
            { name: 'name', type: 'text', required: true, localized: true },
            { name: 'text', type: 'textarea', required: true, localized: true },
          ],
        },
      ],
    },
  ],
}
