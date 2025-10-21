import CookieBannerEN from '@/components/layout/CookieBannerEN'
import FooterEN from '@/components/layout/FooterEN'
import HeaderEN from '@/components/layout/HeaderEN'
import { Poppins } from 'next/font/google'
import { Toaster } from 'sonner'

import { ProgressBar, ProgressBarProvider } from 'react-transition-progress'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata = {
  description:
    'Stauden Peters stands for sustainable cultivation, reliability, and outstanding plant quality — supplying professional gardeners and landscape designers across Europe.',
  title: 'Stauden Peters – Premium Perennials & Grasses from the Lower Rhine',
  openGraph: {
    title: 'Stauden Peters – Premium Perennials & Grasses from the Lower Rhine',
    description:
      'Stauden Peters stands for sustainable cultivation, reliability, and outstanding plant quality — supplying professional gardeners and landscape designers across Europe.',
    url: 'http://localhost:3000/en',
    siteName: 'Stauden Peters',
    images: [
      {
        url: 'http://localhost:3000/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Stauden Peters - OG Image',
      },
    ],
    type: 'website',
  },
}

export default function LayoutEN({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <ProgressBarProvider>
          <ProgressBar className="fixed h-1 shadow-lg shadow-sky-500/20 bg-sky-500 top-0 z-50" />
          <Toaster richColors />
          <CookieBannerEN />
          <HeaderEN />
          {children}
          <FooterEN />
        </ProgressBarProvider>
      </body>
    </html>
  )
}
