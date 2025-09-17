import HeaderDE from '@/components/layout/HeaderDE'
import { Poppins } from 'next/font/google'
import { Toaster } from 'sonner'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export default function LayoutDE({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={`${poppins.className} antialiased`}>
        <Toaster richColors />
        <HeaderDE />
        {children}
        {/*  <GoTop /> */}
        {/* <FooterDE /> */}
      </body>
    </html>
  )
}
