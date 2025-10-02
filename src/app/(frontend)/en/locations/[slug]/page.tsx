import About from '@/components/locations-page/About'
import Gallery from '@/components/locations-page/Gallery'
import ManagerPhoto from '@/components/locations-page/ManagerPhoto'
import TeamLoc from '@/components/locations-page/TeamLoc'
import { fetchDocById } from '@/lib/fetchFromCMS'
import { Location } from '@/payload-types'
import { notFound } from 'next/navigation'
import React from 'react'

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug
  const data = await fetchDocById<Location>('locations', slug, 'en')

  if (!data) return notFound()

  return (
    <div className="min-h-screen">
      <About location={data} />
      {data?.managers && data.managers.length > 0 && <ManagerPhoto data={data} locale="en" />}
      {data.gallery && data.gallery.length > 0 && (
        <Gallery galleryData={data.gallery[0].image} locale="en" />
      )}
      {data.teamImage && <TeamLoc team={data.teamImage} locale="en" />}
    </div>
  )
}

export default Page
