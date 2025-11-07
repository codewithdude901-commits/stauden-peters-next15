'use client'

import { Link } from 'react-transition-progress/next'
import BlurImage from '../BlurImage'

interface Props {
  title: string
  category: string
  image: string
  id: string
  tags?: string
  locale?: string
}

export default function ProjectCard({ title, category, image, id, locale }: Props) {
  return (
    <Link href={locale === 'en' ? `/en/projects/${id}` : `/projekte/${id}`}>
      <div className="bg-white rounded-xl shadow-md">
        <div className="rounded-t-xl overflow-hidden h-64">
          <BlurImage
            src={image}
            alt={title}
            width={1920}
            height={1080}
            className="w-full h-full object-cover object-top "
          />
        </div>

        <div className="p-4">
          <div className="mb-1 text-sm text-blue-900 font-medium">{category}</div>

          <h3 className="text-base font-semibold text-priColor mb-2 truncate">{title}</h3>
        </div>
      </div>
    </Link>
  )
}
