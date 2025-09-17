import { Block } from "payload";


export const Services: Block = {
  slug: 'services',
  fields: [
    { name: 'tagline', type: 'text', localized: true },
    { name: 'headline', type: 'text', required: true, localized: true },
    {
      name: 'cards',
      type: 'array',
      minRows: 3,
      maxRows: 6,
      fields: [
        { name: 'headline', type: 'text', required: true, localized: true },
        { name: 'text', type: 'textarea', required: true, localized: true },
      ],
    },
  ],
};
