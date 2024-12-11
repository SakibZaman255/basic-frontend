import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, FileText, Smartphone } from 'lucide-react'
import CaseStudies from "@/components/case-studies"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#30cfd0] to-[#330867] text-white py-32 md:py-48">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Empowering Your Business with Cutting-Edge Technology
          </h1>
          <p className="text-xl mb-8 animate-fade-in-up animation-delay-200">
            TECFIQ delivers innovative solutions to drive your business forward
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 animate-fade-in-up animation-delay-400">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white hover:bg-white hover:text-[#330867]">
              <Link href="/services">Our Solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Code className="w-12 h-12 text-blue-600" />}
              title="Software Development"
              description="Custom software solutions tailored to your business needs"
            />
            <ServiceCard
              icon={<FileText className="w-12 h-12 text-blue-600" />}
              title="Document Processing"
              description="Intelligent document processing and digitization services"
            />
            <ServiceCard
              icon={<Smartphone className="w-12 h-12 text-blue-600" />}
              title="Web & Mobile Apps"
              description="Responsive and user-friendly web and mobile applications"
            />
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <CaseStudies />

      {/* Why Choose TECFIQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose TECFIQ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              title="10+ Years Experience"
              description="A decade of delivering top-notch tech solutions"
            />
            <FeatureCard
              title="50+ Projects Delivered"
              description="Successful projects across various industries"
            />
            <FeatureCard
              title="24/7 Support"
              description="Round-the-clock assistance for our clients"
            />
            <FeatureCard
              title="Cutting-edge Tech"
              description="Leveraging the latest technologies for optimal results"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  // Sanitize the title to generate a URL-friendly slug
  const slug = title.toLowerCase().replace(/ /g, '-'); // Only replace spaces with a hyphen

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="mb-4 transition-transform duration-300 transform group-hover:scale-110">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
        <Link href={`/services/${slug}`} className="inline-flex items-center mt-4 text-blue-600 hover:underline">
          Learn more <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </CardContent>
    </Card>
  )
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
