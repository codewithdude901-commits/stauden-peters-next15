import { fetchGlobal } from '@/lib/payloadClient'
import { Contact } from '@/payload-types'
import Link from 'next/link'
import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'

// MIDDLE LINKS DATA
interface ItemType {
  id: number
  link: string[]
  name: string[]
}

const itemsDe: ItemType[] = [
  {
    id: 1,
    name: ['home', 'Über uns', 'Standorte', 'Produkte'],
    link: ['home', '/about', '/standorte', '/produkte'],
  },
  {
    id: 2,
    name: ['Projekte', 'Kontakt'],
    link: ['/projekte', '/kontakt'],
  },
]

const FooterDE = async () => {
  const footerData = await fetchGlobal<Contact>({ slug: 'contact', locale: 'de' })

  if (!footerData) return null
  return (
    <div className="bg-[#010c24] relative padding">
      <div className="mx-auto  px-4 sm:px-6  lg:px-8">
        <div className="pt-20 pb-16 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          {/* COLUMN-1 */}

          <div className="col-span-4 md:col-span-12 lg:col-span-4">
            <div className="flex flex-col">
              <img src={'/logo_white.png'} alt="logo" className="w-48 pb-8" />
              <div className="flex gap-4 items-center">
                {footerData.socials?.facebook && (
                  <Link
                    className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-600"
                    href={footerData.socials?.facebook}
                    target="_blank"
                  >
                    <FaFacebookF size={20} />
                  </Link>
                )}

                {footerData.socials?.instagram && (
                  <Link
                    className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-600"
                    href={footerData.socials?.instagram}
                    target="_blank"
                  >
                    <AiFillInstagram size={24} />
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* CLOUMN-2/3 */}

          {itemsDe.map((item) => (
            <div key={item.id} className="group relative col-span-2">
              <ul>
                {item.link.map((href, index) => (
                  <li key={index} className="mb-5">
                    <Link
                      href={href === 'home' ? '/' : `${href}`}
                      className="text-white text-sm capitalize mb-6"
                    >
                      {item.name[index]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CLOUMN-4 */}

          <div className="col-span-4">
            <div className="flex gap-2 items-start">
              <img src={'/footer/mask.svg'} alt="mask-icon" width={15} height={15} />
              <div className="text-sm text-white -mt-1">
                <p>{footerData.address?.line1}</p>
                <p>{footerData.address?.line2}</p>
                <p>{footerData.address?.line3}</p>
              </div>
            </div>
            <div className="flex gap-2 mt-6">
              <img src={'/footer/telephone.svg'} alt="telephone-icon" width={15} height={15} />
              <h5 className="text-sm  text-white">{footerData.address?.phone}</h5>
            </div>
            <div className="flex gap-2 mt-6">
              <img src={'/footer/email.svg'} alt="email-icon" width={15} height={15} />
              <h5 className="text-sm  text-white">{footerData.address?.email}</h5>
            </div>
          </div>
        </div>

        {/* All Rights Reserved */}

        <div className="py-10 w-full border-t mx-auto flex justify-between items-center flex-col gap-4">
          <h4 className="text-white text-sm text-center">
            © {new Date().getFullYear()} Stauden Peters. All Rights Reserved.
          </h4>
          <div className="flex justify-center items-center flex-col md:flex-row gap-4">
            <h4 className="text-white text-sm ">
              <Link href="/privacy-policy" target="_blank">
                Datenschutzrichtlinie
              </Link>
            </h4>
            {/* 
            <h4 className="text-white text-sm text-center">
              <Link href="/" target="_blank">
                Allgemeine Geschäftsbedingungen
              </Link>
            </h4> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterDE
