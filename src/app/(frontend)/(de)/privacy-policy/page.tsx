import { fetchGlobal } from '@/lib/fetchFromCMS'
import { PrivacyPolicy } from '@/payload-types'

import RichTextHtml from '@/components/RichText'

const PrivacyPolicyPage = async () => {
  const privacyPolicy = await fetchGlobal<PrivacyPolicy>('privacyPolicy', 'de')

  if (!privacyPolicy) return null

  return (
    <div className="mt-10 lg:mt-14 py-12 md:py-16 lg:py-20 padding min-h-screen">
      <h2 className="text-3xl font-semibold lg:font-bold lg:text-4xl text-center mb-10 underline">
        Datenschutzrichtlinie
      </h2>
      <RichTextHtml data={privacyPolicy.content} />
    </div>
  )
}

export default PrivacyPolicyPage
