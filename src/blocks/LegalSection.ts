import { Block } from 'payload';

export const LegalSection: Block = {
  slug: 'legalSection',
  labels: { singular: 'Legal Section', plural: 'Legal Sections' },
  fields: [
    { name: 'heading', type: 'text', localized: true },
    { name: 'paragraph', type: 'textarea', required: true, localized: true },
  ],
};
