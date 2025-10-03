import LocationIndex from '@/components/locations-page/LocationIndex'
import { fetchCollection, fetchGlobal } from '@/lib/payloadClient'

import type { Location, LocationsIndex } from '@/payload-types'

export default async function LocationsPageDE() {
  const intro = await fetchGlobal<LocationsIndex>({ slug: 'locationsIndex', locale: 'de' })
  const locations = await fetchCollection<Location>('locations', { locale: 'de' })

  if (!intro || !locations) {
    return <div>Content loading...</div>
  }

  return (
    <>
      <LocationIndex
        introData={intro}
        locationData={locations}
        locationH3="Besuchen Sie uns"
        locale="de"
      />
    </>
  )
}
