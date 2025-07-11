'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import NavbarComponent from './NavbarComponent';

export default function NavbarWrapper() {
    const pathname = usePathname();
    if(pathname === '/dashboard' ){
        return null;  // Do not render NavbarComponent for admin route 
    }
  return (
    <NavbarComponent/>
  )
}
