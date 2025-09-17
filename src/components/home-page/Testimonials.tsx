import TestimonialSlider from './TestimonialSlider'

interface Item {
  photo: {
    url: string
    alt: string
  }
  name: string
  position: string
  text: string
}

interface Props {
  tagline: string
  headline: string
  items: Item[]
}

const Testimonials = ({ tagline, headline, items }: Props) => {

  return (
    <>
      <div className="py-12 md:py-16 lg:py-24">
        <div className="text-center mb-10">
          <p className="mb-2 font-semibold text-blue-900 ">{tagline}</p>

          <h2 className="text-3xl font-semibold lg:font-bold lg:text-4xl mb-2 text-priColor">
            {headline}
          </h2>
        </div>
        <div className="padding mx-auto w-screen  justify-center">
          <TestimonialSlider items={items} />
        </div>
      </div>
    </>
  )
}

export default Testimonials
