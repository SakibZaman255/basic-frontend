import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link></li>
            <li><Link href="/case-studies" className="hover:text-blue-600 transition-colors">Case Studies</Link></li>
            <li><Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li><Link href="/services/software-development" className="hover:text-blue-600 transition-colors">Software Development</Link></li>
            <li><Link href="/services/document-processing" className="hover:text-blue-600 transition-colors">Document Processing</Link></li>
            <li><Link href="/services/web-mobile-apps" className="hover:text-blue-600 transition-colors">Web & Mobile Apps</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600 transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Twitter</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Facebook</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="mb-4">Stay updated with our latest news and offers.</p>
          <form className="flex space-x-2">
            <Input type="email" placeholder="Your email" className="flex-grow" />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-200 text-center">
        <p>&copy; 2024 TECFIQ. All rights reserved.</p>
      </div>
    </footer>
  )
}

