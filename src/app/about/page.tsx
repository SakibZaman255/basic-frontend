import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import IconCloud from "@/components/ui/icon-cloud";
 
const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];


export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">About TECFIQ</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg mb-6">
              TECFIQ is a leading technology solutions provider, dedicated to empowering businesses with cutting-edge software development, intelligent document processing, and innovative web and mobile applications.
            </p>
            <p className="text-lg mb-6">
              With over a decade of experience and a team of skilled professionals, we've successfully delivered more than 50 projects across various industries, helping our clients achieve their digital transformation goals.
            </p>
            <p className="text-lg">
              Our commitment to excellence, continuous innovation, and client satisfaction sets us apart in the ever-evolving tech landscape.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
           <IconCloud iconSlugs={slugs} />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-center mb-8">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ValueCard
            title="Innovation"
            description="We constantly push the boundaries of technology to deliver cutting-edge solutions."
          />
          <ValueCard
            title="Client-Centric"
            description="Our clients' success is our top priority, and we tailor our solutions to meet their unique needs."
          />
          <ValueCard
            title="Quality"
            description="We maintain the highest standards of quality in every project we undertake."
          />
          <ValueCard
            title="Collaboration"
            description="We believe in the power of teamwork and foster a collaborative environment."
          />
          <ValueCard
            title="Integrity"
            description="We conduct our business with the utmost honesty and transparency."
          />
          <ValueCard
            title="Continuous Learning"
            description="We are committed to staying at the forefront of technological advancements."
          />
        </div>
      </div>
    </div>
  )
}

function ValueCard({ title, description }: { title: string; description: string }) {
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

