'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icons } from './Icons'
import LocaleSwitcher from './LocaleSwitcher'
import MobileNavEN from './MobileNavEN'

const MenuItemsEN = [
  { name: 'home', link: `/` },
  { name: 'about', link: `/about` },
  { name: 'Locations', link: `/locations` },
  { name: 'Products', link: `/products` },
  { name: 'Projects', link: `/projects` },
  { name: 'Contact', link: `/contact` },
]

const HeaderEN = () => {
  const pathname = usePathname()
  return (
    <nav className={cn('fixed z-40 top-0 inset-x-0 bg-white shadow-lg')}>
      <div className="padding h-16 lg:h-[65px] flex items-center justify-between">
        <div>
          <Link href={`/`}>
            <Icons.logo />
          </Link>
        </div>

        {/* Menu items */}
        <div className="lg:flex divide-x hidden ">
          {MenuItemsEN.map((menu) => {
            const isActive =
              menu.link === '/'
                ? pathname === '/' // home only matches root
                : pathname.startsWith(menu.link) // others match prefix

            return (
              <Link
                href={menu.link}
                key={menu.name}
                className={cn(
                  'px-5 text-black hover:text-blue-600 capitalize',
                  isActive && 'font-semibold text-blue-900',
                )}
              >
                {menu.name}
              </Link>
            )
          })}
        </div>

        <div>
          <div className="hidden lg:flex">
            <LocaleSwitcher />
          </div>
          <div className="lg:hidden">
            <MobileNavEN />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default HeaderEN
