'use client'

import Link from 'next/link'
import { CustomImage } from '../CustomImage'

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
          {/* <img
            src={image}
            alt={title}
            className="hover:scale-[103%] object-cover transition-transform duration-300 h-full w-full"
          /> */}
          <CustomImage
            src={image}
            alt={title}
            width="100%"
            height="100%"
            placeholderClass="skeleton-placeholder"
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
