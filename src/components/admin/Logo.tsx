'use client'

import Image from 'next/image'
import React from 'react'
import { useTheme } from '@payloadcms/ui'

const CustomLogo: React.FC<Record<string, any>> = () => {
  const { theme } = useTheme()

  const logoSrc = theme === 'dark' ? '/logo_white.png' : '/logo.png'

  return <Image src={logoSrc} width={200} height={50} alt="Logo" />
}

export default CustomLogo
