import { Block } from 'payload'

export const ProjectsIntro: Block = {
  slug: 'projectsIntro',
  labels: { singular: 'Projects Intro', plural: 'Projects Intros' },
  fields: [
    { name: 'tagline', type: 'text', localized: true },
    { name: 'headline', type: 'text', required: true, localized: true },
    { name: 'paragraph', type: 'textarea', localized: true },
  ],
}
