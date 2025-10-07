import { Location, Media } from '@/payload-types'

const ManagerPhoto = ({ data, locale }: { data: Location; locale: string }) => {
  if (!data.managers) return null

  return (
    <div className="pb-12 md:pb-16 lg:pb-24 w-fit padding">
      <div className="flex flex-row gap-4">
        {data.managers.map((manager) => (
          <div className="flex flex-col" key={manager.name}>
            <div className="aspect-square w-28 xl:w-36 overflow-hidden rounded-md">
              <img
                className="w-full h-full object-cover object-center hover:scale-[102%] transition-all duration-300"
                src={
                  manager.image && (manager.image as Media).url !== null || undefined
                    ? (manager.image as Media).url!
                    : '/placeholder1.jpg'
                }
                alt="manager photo"
              />
            </div>
            <div className="flex flex-col text-center">
              <h2 className=" font-semibold text-blue-900 mt-1">{manager.name}</h2>

              {data?.managers?.length === 1 && (
                <p className="text-blue-600 text-sm font-medium  ">{manager.position}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      {data.managers.length > 1 && (
        <p className="text-blue-600 text-sm font-medium text-center">
          {locale === 'en' ? 'Operations managers' : 'Betriebsleitung'}
        </p>
      )}
    </div>
  )
}

export default ManagerPhoto
