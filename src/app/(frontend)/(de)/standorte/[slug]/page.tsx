import About from '@/components/locations-page/About'
import Gallery from '@/components/locations-page/Gallery'
import ManagerPhoto from '@/components/locations-page/ManagerPhoto'
import TeamLoc from '@/components/locations-page/TeamLoc'
import { fetchById } from '@/lib/payloadClient'

import { Location } from '@/payload-types'
import { notFound } from 'next/navigation'
import React from 'react'

export const revalidate = 86400;

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug
  const data = await fetchById<Location>('locations', slug, { locale: 'de' })
  if (!data) return notFound()

  return (
    <div className="min-h-screen">
      <About location={data} />
      {data?.managers && data.managers.length > 0 && <ManagerPhoto data={data} locale="de" />}
      {data.gallery && data.gallery.length > 0 && (
        <Gallery galleryData={data.gallery[0].image} locale="de" />
      )}
      {data.teamImage && <TeamLoc team={data.teamImage} locale="de" />}
    </div>
  )
}

export default Page
