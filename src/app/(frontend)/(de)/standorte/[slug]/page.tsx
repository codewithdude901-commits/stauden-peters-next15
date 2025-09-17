import About from '@/components/locations-page/About'
import { fetchDocBySlugWithLocales } from '@/lib/fetchFromCMS'
import { notFound } from 'next/navigation'
import React from 'react'

const Page = async ({ params }: { params: { slug: string } }) => {
  const data = await fetchDocBySlugWithLocales('locations', params.slug, 'de')
//   console.log(data)
  if (!data) return notFound()

  const deSlug = data.slug?.de
  const enSlug = data.slug?.en

  return <div className="min-h-screen">
      <About location={data} />
      {/* {location.managers.length > 0 && <ManagerPhoto location={location} />}
      {location.imageSlider.length > 0 && <Gallery location={location} />}
      {location.teamImage && <TeamLoc location={location} />} */}
    </div>
}

export default Page
