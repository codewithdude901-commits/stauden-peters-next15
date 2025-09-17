import { Block } from 'payload';

export const ProductsIntro: Block = {
  slug: 'productsIntro',
  labels: { singular: 'Products Intro', plural: 'Products Intros' },
  fields: [
    { name: 'tagline', type: 'text', localized: true },
    { name: 'headline', type: 'text', required: true, localized: true },
    { name: 'paragraph', type: 'textarea', localized: true },
  ],
};
