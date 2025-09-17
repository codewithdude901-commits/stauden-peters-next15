import { Block } from 'payload'

export const TeamSection: Block = {
  slug: 'teamSection',
  fields: [
    { name: 'tagline', type: 'text', localized: true },
    { name: 'headline', type: 'text', required: true, localized: true },
    {
      name: 'members',
      type: 'relationship',
      relationTo: 'teamMembers',
      hasMany: true,
    },
  ],
}
