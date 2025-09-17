import { CollectionConfig } from 'payload'

export const TeamMembers: CollectionConfig = {
  slug: 'teamMembers',
  access: {
    read: () => true, // public
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'department', 'email'],
  },
  fields: [
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
    },

    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'department',
      type: 'text',
      localized: true,
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'email',
      type: 'email',
    },
  ],
}
