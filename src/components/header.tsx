"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          TECFIQ
        </Link>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        <ul className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 bg-white md:bg-transparent p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-6`}>
          <li><Link href="/" className="hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link href="/services" className="hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
          <li><Link href="/case-studies" className="hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Case Studies</Link></li>
          <li><Link href="/about" className="hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link></li>
        </ul>
        <Button asChild className="hidden md:inline-flex bg-black hover:bg-black/90">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </nav>
    </header>
  )
}

