import ProjectCard from '@/components/projects/ProjectCard'
import { fetchCollection, fetchGlobal } from '@/lib/payloadClient'

import { Media, Project, ProjectsIndex } from '@/payload-types'

export default async function Projects() {
  const intro = await fetchGlobal<ProjectsIndex>({ slug: 'projectsIndex', locale: 'de' })
  const projectData = await fetchCollection<Project>('projects', { locale: 'de' })

  if (!intro?.sections || !projectData) return null

  return (
    <div>
      <div className="flex flex-col mt-10 lg:mt-14 py-12 md:py-16 lg:py-20 padding">
        <div className="flex flex-col text-center max-w-7xl mx-auto pb-8">
          <p className="mb-2 font-semibold text-blue-900 ">{intro?.sections[0]?.tagline}</p>

          <h2 className="text-3xl font-semibold lg:font-bold lg:text-4xl mb-2 text-priColor">
            {intro?.sections[0]?.headline}
          </h2>
          {/* <h2 className="text-3xl font-semibold lg:font-bold lg:text-4xl mb-2 text-priColor">
            Our Projects
          </h2> */}
          <p className="flex-wrap text-muted-foreground text-sm leading-7 xl:text-base">
            {intro?.sections[0]?.paragraph}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {projectData.map((item, i) => (
            <div key={i}>
              <ProjectCard
                title={item.title}
                category={item.tag}
                image={(item.thumbnail as Media).url!}
                id={item.id}
                locale="de"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
