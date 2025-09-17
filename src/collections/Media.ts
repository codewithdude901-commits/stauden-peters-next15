import { APIError, type CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },

  upload: {
    disableLocalStorage: true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: false,
      localized: true,
    },
  ],
  hooks: {
    beforeChange: [
      async ({ req, data }) => {
        const maxSizeInBytes = 4000000 // 4MB
        if (data && data.filesize > maxSizeInBytes) {
          throw new APIError(`File exceeds the maximum size of ${maxSizeInBytes / 1000000}MB`, 400)
        }
        return data
      },
    ],
  },
}
