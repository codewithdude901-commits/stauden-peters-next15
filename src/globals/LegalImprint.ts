import { GlobalConfig } from 'payload';
import { LegalSection } from '../blocks/LegalSection';

export const LegalImprint: GlobalConfig = {
  slug: 'legalImprint',
  access: { read: () => true },
  fields: [
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
    {
      name: 'sections',
      type: 'blocks',
      blocks: [LegalSection],
    },
  ],
};
