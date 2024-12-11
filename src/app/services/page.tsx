import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, FileText, Smartphone, Database, Cloud, Lock } from 'lucide-react'

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Code className="w-12 h-12 text-blue-600" />}
            title="Software Development"
            description="We create custom software solutions tailored to your unique business needs. Our team of expert developers uses cutting-edge technologies to build scalable, efficient, and user-friendly applications."
          />
          <ServiceCard
            icon={<FileText className="w-12 h-12 text-blue-600" />}
            title="Document Processing"
            description="Our intelligent document processing services use AI and machine learning to automate data extraction, analysis, and management. We help you digitize and streamline your document workflows for improved efficiency."
          />
          <ServiceCard
            icon={<Smartphone className="w-12 h-12 text-blue-600" />}
            title="Web & Mobile Apps"
            description="We design and develop responsive web applications and mobile apps that provide seamless user experiences across all devices. Our focus is on creating intuitive interfaces and robust functionality."
          />
          <ServiceCard
            icon={<Database className="w-12 h-12 text-blue-600" />}
            title="Data Management"
            description="We offer comprehensive data management solutions, including data warehousing, ETL processes, and business intelligence. Our services help you make informed decisions based on accurate and timely data."
          />
          <ServiceCard
            icon={<Cloud className="w-12 h-12 text-blue-600" />}
            title="Cloud Solutions"
            description="Our cloud experts help you migrate, optimize, and manage your applications and infrastructure in the cloud. We ensure scalability, security, and cost-efficiency for your cloud deployments."
          />
          <ServiceCard
            icon={<Lock className="w-12 h-12 text-blue-600" />}
            title="Cybersecurity"
            description="We provide robust cybersecurity solutions to protect your digital assets from threats. Our services include security audits, penetration testing, and implementation of security best practices."
          />
        </div>
      </div>
    </div>
  )
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="mb-4 transition-transform duration-300 transform group-hover:scale-110">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

