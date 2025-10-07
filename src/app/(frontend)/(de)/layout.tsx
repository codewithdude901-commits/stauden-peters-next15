import CookieBannerDE from '@/components/layout/CookieBannerDE'
import FooterDE from '@/components/layout/FooterDE'
import HeaderDE from '@/components/layout/HeaderDE'
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
    'Stauden Peters steht für nachhaltigen Anbau, Zuverlässigkeit und hervorragende Pflanzenqualität – und beliefert professionelle Gärtner und Landschaftsarchitekten in ganz Europa.',
  title: 'Stauden Peters – Premium Stauden & Gräser vom Niederrhein',
}

export default function LayoutDE({ children }: { children: React.ReactNode }) {
  return (
    <html>
        <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <ProgressBarProvider>
          <ProgressBar className="fixed h-1 shadow-lg shadow-sky-500/20 bg-sky-500 top-0 z-50" />
          <Toaster richColors />
          <CookieBannerDE />
          <HeaderDE />
          {children}
          {/*  <GoTop /> */}
          <FooterDE />
        </ProgressBarProvider>
      </body>
    </html>
  )
}
