import { CollectionConfig } from 'payload';

export const ProductCategories: CollectionConfig = {
  slug: 'productCategories',
  access: { read: () => true },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      // localized: true, // e.g. "Bäume" vs "Trees"
    },
    // {
    //   name: 'slug',
    //   type: 'text',
    //   required: true,
    //   unique: true,
    //   localized: true,
    // },
  ],
};
