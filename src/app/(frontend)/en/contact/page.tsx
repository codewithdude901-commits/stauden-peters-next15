import EnquiryForm from '@/components/EnquiryForm'
import { fetchGlobal } from '@/lib/fetchFromCMS'
import { Contact } from '@/payload-types'
import Link from 'next/link'

import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt, FaYoutube } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'

const Page = async () => {
  const contactData = await fetchGlobal<Contact>('contact', 'en')

  if (!contactData) return null

  return (
    <section className="mt-10 lg:mt-14 py-12 md:py-16 lg:py-20 max-w-[1536px] mx-auto px-4">
      <div className="">
        <div className="text-center max-w-3xl mx-auto">
          <p className="mb-2 font-semibold text-blue-900 ">
            Have Questions? We’re Rooted in Solutions.
          </p>

          <h2 className="text-3xl font-semibold lg:font-bold lg:text-4xl mb-2 text-priColor">
            Contact Us
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10 md:gap-0 md:mt-10">
          {/* left section */}
          <div className="flex flex-col sm:px-8 py-10  text-sm xl:text-base">
            {/* address section */}

            <div className=" space-y-4 pb-4 flex flex-col text-muted-foreground">
              <div>
                <p className="font-semibold text-blue-900 mb-2">Address</p>
                <div className="flex gap-2">
                  <FaLocationDot size={18} />
                  <span className="mx-2 -mt-1">
                    <p>{contactData.address?.line1}</p>
                    <p>{contactData.address?.line2}</p>
                    <p>{contactData.address?.line3}</p>
                  </span>
                </div>
              </div>
              <div className="">
                <p className="font-semibold text-blue-900 mb-2">Phone</p>
                <div className="flex gap-2  items-center">
                  <FaPhoneAlt size={14} />
                  <Link
                    href={`tel:${contactData.address?.phone}`}
                    className="flex gap-2 items-center
                  "
                  >
                    <p className="mx-2">{contactData.address?.phone}</p>
                  </Link>
                </div>
              </div>
              <div className="">
                <p className="font-semibold text-blue-900 mb-2">E-Mail</p>
                <div className="flex gap-2 items-center">
                  <IoMdMail size={16} />
                  <Link
                    href={`mailto:${contactData.address?.email}`}
                    className="inline-block gap-2  items-center "
                  >
                    <span className="mx-2 ">{contactData.address?.email}</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* social icons */}

            <div>
              <p className="font-semibold text-blue-900 my-2">Social Media</p>
              <div className="flex gap-6 items-center mt-4 -mx-1.5 text-muted-foreground">
                {contactData.socials?.linkedIn && (
                  <Link
                    className="mx-1.5  transition-colors duration-150 transform hover:text-blue-600"
                    href=""
                    target="_blank"
                  >
                    <FaLinkedinIn size={22} />
                  </Link>
                )}

                {contactData.socials?.facebook && (
                  <Link
                    className="mx-1.5  transition-colors duration-300 transform hover:text-blue-600"
                    href="https://www.facebook.com/share/19koHdj1Us/?mibextid=wwXIfr"
                    target="_blank"
                  >
                    <FaFacebookF size={20} />
                  </Link>
                )}

                {contactData.socials?.instagram && (
                  <Link
                    className="mx-1.5 -400 transition-colors duration-300 transform hover:text-blue-600"
                    href="https://www.instagram.com/stauden_peters?igsh=bnE5d3h6d2lqejBl"
                    target="_blank"
                  >
                    <AiFillInstagram size={24} />
                  </Link>
                )}

                {contactData.socials?.youtube && (
                  <Link
                    className="mx-1.5 transition-colors duration-300 transform hover:text-blue-600"
                    href=""
                    target="_blank"
                  >
                    <FaYoutube size={24} />
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* right section */}
          <div className="w-full px-4 py-10 sm:px-8 mx-auto rounded-lg shadow-2xl max-w-4xl shadow-gray-300/50">
            <h6 className="font-semibold pb-4 text-blue-900 text-center">
              What would you like to ask?
            </h6>
            <EnquiryForm locale="en" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page
