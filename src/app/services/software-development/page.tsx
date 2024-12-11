import { Code, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SoftwareDevelopmentPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <Code className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-6">Software Development</h1>
            <p className="text-xl text-gray-600">
              Custom software solutions tailored to your business needs, built with cutting-edge technologies and best practices.
            </p>
          </div>

          <div className="grid gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Our Software Development Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    "Requirements Analysis and Planning",
                    "Design and Architecture",
                    "Development and Implementation",
                    "Testing and Quality Assurance",
                    "Deployment and Maintenance"
                  ].map((step, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-green-500 w-5 h-5" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Technologies We Use</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Frontend</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>React.js</li>
                      <li>Next.js</li>
                      <li>Vue.js</li>
                      <li>Angular</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Backend</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Node.js</li>
                      <li>Python</li>
                      <li>Java</li>
                      <li>.NET</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

