import { GlobalConfig } from 'payload'
import { ProjectsIntro } from '../blocks/ProjectsIntro'

export const ProjectsIndex: GlobalConfig = {
  slug: 'projectsIndex',
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
      blocks: [ProjectsIntro],
    },
  ],
}
