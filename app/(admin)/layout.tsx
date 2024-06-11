import React, { ReactNode } from 'react'
import Sidebar from '../components/ui/Sidebar/Sidebar'

interface Props {
  children: ReactNode
}

export default function AdminLayout({children}:Props) {
  return (
    <>
    <Sidebar />
     {children}
    </>
  )
}
