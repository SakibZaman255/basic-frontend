import CaseStudies from "@/components/case-studies"

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Our Case Studies</h1>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
          Explore how we've helped businesses across various industries achieve their goals through innovative technology solutions.
        </p>
        <CaseStudies />
      </div>
    </div>
  )
}

