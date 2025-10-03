'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icons } from './Icons'
import LocaleSwitcherMobile from './LocaleSwitcherMobile'
import MobileNavDE from './MobileNavDE'

const MenuItemsDE = [
  { name: 'home', link: `/` },
  { name: 'Über uns', link: `/about` },
  { name: 'Standorte', link: `/standorte` },
  { name: 'Produkte', link: `/produkte` },
  { name: 'Projekte', link: `/projekte` },
  { name: 'Kontakt', link: `/kontakt` },
]

const HeaderDE = () => {
  const pathname = usePathname()
  return (
    <nav className={cn('fixed z-40 top-0 inset-x-0 bg-white shadow-sm')}>
      <div className="padding h-16 lg:h-[65px] flex items-center justify-between">
        <div>
          <Link href={`/`}>
            <Icons.logo />
          </Link>
        </div>

        {/* Menu items */}
        <div className="lg:flex divide-x hidden ">
          {MenuItemsDE.map((menu) => {
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

        <div className="flex gap-2 items-center">
          {/* <div className="hidden lg:flex">
            <LocaleSwitcher />
          </div> */}
          <div>
            <LocaleSwitcherMobile />
          </div>
          <div className="lg:hidden">
            <MobileNavDE />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default HeaderDE
