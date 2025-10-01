import LocationIndex from '@/components/locations-page/LocationIndex'
import { fetchGlobal, fetchCollection } from '@/lib/fetchFromCMS'
import type { LocationsIndex, Location } from '@/payload-types'

export default async function LocationsPageDE() {
  const intro = await fetchGlobal<LocationsIndex>('locationsIndex', 'de')
  const locations = await fetchCollection<Location>('locations', 'de')

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
