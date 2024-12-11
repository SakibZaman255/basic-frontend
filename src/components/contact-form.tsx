"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    
    // Reset form after submission
    setFormData({
      name: "",
      mobile: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      <div>
        <h2 className="text-4xl font-bold mb-6">Let's Talk</h2>
        <p className="text-gray-600 mb-8">
          Ready to start your next big project? Reach out to us, and let's discuss how we can make it happen.
        </p>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Email</h3>
          <div className="flex items-center gap-3 text-blue-600">
            <div className="bg-blue-50 p-3 rounded-full">
              <Mail className="w-5 h-5" />
            </div>
            <a href="mailto:teachfiqh@gmail.com">teachfiqh@gmail.com</a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Socials</h3>
          <div className="flex gap-4">
            <a href="#" className="bg-blue-50 p-3 rounded-full hover:bg-blue-100 transition-colors">
              <Facebook className="w-5 h-5 text-blue-600" />
            </a>
            <a href="#" className="bg-blue-50 p-3 rounded-full hover:bg-blue-100 transition-colors">
              <Instagram className="w-5 h-5 text-blue-600" />
            </a>
            <a href="#" className="bg-blue-50 p-3 rounded-full hover:bg-blue-100 transition-colors">
              <Linkedin className="w-5 h-5 text-blue-600" />
            </a>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="bg-gray-50 border-0"
        />
        <Input
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Mobile Number"
          required
          className="bg-gray-50 border-0"
        />
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email (Optional)"
          className="bg-gray-50 border-0"
        />
        <Input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
          className="bg-gray-50 border-0"
        />
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          required
          className="bg-gray-50 border-0 min-h-[150px]"
        />
        <Button type="submit" className="w-full bg-black hover:bg-black/90">Send</Button>
      </form>
    </div>
  )
}

