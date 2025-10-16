interface TeamProps {
  tagline: string
  headline: string
  people: {
    name: string
    department: string
    phone: string
    email: string
    photo: {
      url: string
      alt: string
    }
  }[]
}

const Team = ({ tagline, headline, people }: TeamProps) => {
  return (
    <section className="py-12 md:py-16 lg:py-24 padding">
      <div className=" ">
        <div className="mb-10 text-center">
          <p className="mb-2 font-semibold text-blue-900 ">{tagline}</p>

          <h2 className="text-2xl font-semibold lg:font-bold lg:text-3xl mb-2 text-priColor">
            {headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-y-12 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {people.map((person, index) => (
            <div key={index} className="flex flex-col shadow-xl px-4 rounded-b-2xl mx-auto w-full">
              <div className="rounded-md w-28 h-28 overflow-hidden mx-auto  mb-2">
                <img
                  className="w-full h-full  hover:scale-[102%] duration-300 object-cover transition-all"
                  src={person?.photo?.url}
                  alt={person?.photo?.alt || person.name}
                />
              </div>
              <div className=" text-center">
                <div className="flex flex-col">
                  <h2 className="text-sm font-semibold text-blue-900 dark:text-white capitalize">
                    {person.name}
                  </h2>
                  <p className="block text-xs text-blue-500 capitalize dark:text-blue-300">
                    {person.department}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-7">
                    {person.phone}
                  </p>
                  <p className="mb-6 text-xs text-gray-500 dark:text-gray-400">{person.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
