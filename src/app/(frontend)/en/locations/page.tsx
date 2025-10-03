import LocationIndex from '@/components/locations-page/LocationIndex'
import { fetchCollection, fetchGlobal } from '@/lib/payloadClient'

import type { LocationsIndex, Location } from '@/payload-types'

export default async function LocationsPageDE() {
  const intro = await fetchGlobal<LocationsIndex>({ slug: 'locationsIndex', locale: 'en' })
  const locations = await fetchCollection<Location>('locations', { locale: 'en' })

  if (!intro || !locations) {
    return <div>Content loading...</div>
  }

  return (
    <>
      <LocationIndex introData={intro} locationData={locations} locationH3="Visit Us" locale="en" />
    </>
  )
}
