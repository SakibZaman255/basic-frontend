"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const caseStudies = [
  {
    id: 1,
    title: "E-commerce Platform Overhaul",
    category: "Web Development",
    description: "Redesigned and optimized a large-scale e-commerce platform, resulting in a 40% increase in conversion rates and improved user experience.",
  },
  {
    id: 2,
    title: "AI-Powered Document Processing System",
    category: "Document Processing",
    description: "Implemented an intelligent document processing system for a financial institution, reducing manual data entry by 80% and improving accuracy to 99.9%.",
  },
  {
    id: 3,
    title: "Mobile App for Healthcare Provider",
    category: "Mobile Development",
    description: "Developed a HIPAA-compliant mobile app for a healthcare provider, enabling patients to schedule appointments, view test results, and communicate with doctors securely.",
  },
  // Add more case studies as needed
]

export default function CaseStudies() {
  const [filter, setFilter] = useState("All")

  const filteredCaseStudies = filter === "All" 
    ? caseStudies 
    : caseStudies.filter(study => study.category === filter)

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Case Studies</h2>
        <div className="flex justify-center space-x-4 mb-8">
          <Button 
            onClick={() => setFilter("All")} 
            variant={filter === "All" ? "default" : "outline"}
          >
            All
          </Button>
          <Button 
            onClick={() => setFilter("Web Development")} 
            variant={filter === "Web Development" ? "default" : "outline"}
          >
            Web Development
          </Button>
          <Button 
            onClick={() => setFilter("Document Processing")} 
            variant={filter === "Document Processing" ? "default" : "outline"}
          >
            Document Processing
          </Button>
          <Button 
            onClick={() => setFilter("Mobile Development")} 
            variant={filter === "Mobile Development" ? "default" : "outline"}
          >
            Mobile Development
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCaseStudies.map(study => (
            <Card key={study.id}>
              <CardHeader>
                <CardTitle>{study.title}</CardTitle>
                <CardDescription>{study.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{study.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

