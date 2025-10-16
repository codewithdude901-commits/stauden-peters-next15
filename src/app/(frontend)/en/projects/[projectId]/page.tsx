import CarouselProj from '@/components/projects/CarouselProj'
import { fetchById, getCachedPayload } from '@/lib/payloadClient'
import { Media, Project } from '@/payload-types'

export const revalidate = 86400

export async function generateStaticParams() {
  const payload = await getCachedPayload()

  // Fetch all categories (only the fields we need)
  const res = await payload.find({
    collection: 'projects',
  })

  // Map to params
  const params = res.docs.map((project) => ({
    projectId: project.id,
  }))

  return params
}

const ProjectDetailPage = async ({ params }: { params: Promise<{ projectId: string }> }) => {
  const projectId = (await params).projectId
  const project = await fetchById<Project>('projects', projectId, { locale: 'en' })

  if (!project) return null

  const className = 'rounded-md max-h-[650px] overflow-hidden'

  return (
    <div className="min-h-screen padding max-w-[2000px]">
      {/* Project Header */}
      <div className="flex flex-col mt-10 lg:mt-14 pt-12 md:pt-16 lg:pt-20 ">
        <div className="flex flex-col text-center max-w-3xl mx-auto pb-8">
       
          <h2 className="text-3xl font-semibold lg:font-bold lg:text-4xl mb-2 text-priColor">
            {project.title}
          </h2>
         <div className="flex items-center gap-2 sm:gap-4 mx-auto flex-col sm:flex-row">
            <p className="bg-blue-100 px-3 py-1 rounded-full text-sm text-blue-900 text-center ">
              {project.tag}
            </p>
            <p className="text-sm text-center">{project.location}</p>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="mx-auto md:pt-4 lg:pt-6 pb-12">
        <div className="flex flex-col 2xl:flex-row gap-10">
          {/* Main Content */}
          <div className="w-full 2xl:w-1/3">
            <h2 className="text-xl font-bold text-priColor mb-2">Project Overview</h2>
            <p className="flex-wrap text-muted-foreground text-sm xl:text-base leading-7 text-justify">
              {project.paragraph1}
            </p>
            <br />
            <p className="flex-wrap text-muted-foreground text-sm xl:text-base leading-7 text-justify">
              {project.paragraph2}
            </p>
          </div>
          <div className="w-full 2xl:w-2/3  overflow-hidden rounded-md">
            {/* Image Gallery */}
            <section className="mb-10 w-full">
              <h2 className="text-xl font-bold text-priColor mb-4">Project Gallery</h2>
              <div className="w-full">
                <CarouselProj
                  slides={project.gallery.images.map((image) => (image as Media).url!)}
                  className={className}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailPage
