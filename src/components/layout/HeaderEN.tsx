'use client'

import { cn } from '@/lib/utils'

import { usePathname } from 'next/navigation'
import { Icons } from './Icons'

import MobileNavEN from './MobileNavEN'
import { Link } from 'react-transition-progress/next'
import LocaleSwitcher from './LocaleSwitcher'


const MenuItemsEN = [
  { name: 'home', link: `/en` },
  { name: 'about', link: `/en/about` },
  { name: 'Locations', link: `/en/locations` },
  { name: 'Products', link: `/en/products` },
  { name: 'Projects', link: `/en/projects` },
  { name: 'Contact', link: `/en/contact` },
]

const HeaderEN = () => {
  const pathname = usePathname()
  return (
    <nav className={cn('fixed z-40 top-0 inset-x-0 bg-white shadow-sm')}>
      <div className="padding h-16 lg:h-[65px] flex items-center justify-between">
        <div>
          <Link href={`/en`}>
            <Icons.logo />
          </Link>
        </div>

        {/* Menu items */}
        <div className="lg:flex divide-x hidden ">
          {MenuItemsEN.map((menu) => {
            const isActive =
              menu.link === '/en'
                ? pathname === '/en' // home only matches root
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

        <div className="flex gap-2 items-center">
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
