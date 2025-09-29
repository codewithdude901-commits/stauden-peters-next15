import About from '@/components/locations-page/About'
import Gallery from '@/components/locations-page/Gallery'
import { fetchDocById } from '@/lib/fetchFromCMS'
import { Location } from '@/payload-types'
import { notFound } from 'next/navigation'
import React from 'react'

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug
  const data = await fetchDocById<Location>('locations', slug, 'en')
  // console.log(data)
  if (!data) return notFound()

  return (
    <div className="min-h-screen">
      <About location={data} />
      {/* {data?.managers?.length > 0 && <ManagerPhoto location={data} />} */}
      {data.gallery && data.gallery.length > 0 && <Gallery galleryData={data.gallery[0].image} />}
      {/* {data.teamImage && <TeamLoc location={data} />} */}
    </div>
  )
}

export default Page
