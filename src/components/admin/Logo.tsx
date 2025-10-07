import Image from 'next/image'
import React from 'react'

const CustomLogo: React.FC<Record<string, any>> = () => {
  return <Image src={'/logo.png'} width={200} height={50} alt="Logo" />
}

export default CustomLogo
