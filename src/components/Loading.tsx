import Spinner from '@/components/Spinner'

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <Spinner size={48} color="#2563eb" />
      <p className="mt-4 text-sm text-gray-500 font-medium">Loading content...</p>
    </div>
  )
}
