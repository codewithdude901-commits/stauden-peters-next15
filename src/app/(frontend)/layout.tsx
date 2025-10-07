import React from 'react'
import './globals.css'

export const revalidate = 86400

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return <>{children}</>
}
