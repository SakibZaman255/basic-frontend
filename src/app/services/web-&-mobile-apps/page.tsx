import { Smartphone, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function WebMobileAppsPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <Smartphone className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-6">Web & Mobile Apps</h1>
            <p className="text-xl text-gray-600">
              Create stunning, responsive applications that work seamlessly across all devices.
            </p>
          </div>

          <div className="grid gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Our Development Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-4">Web Applications</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="text-green-500 w-4 h-4" />
                        Progressive Web Apps (PWA)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="text-green-500 w-4 h-4" />
                        Single Page Applications
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="text-green-500 w-4 h-4" />
                        E-commerce Platforms
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Mobile Applications</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="text-green-500 w-4 h-4" />
                        Native iOS Apps
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="text-green-500 w-4 h-4" />
                        Native Android Apps
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="text-green-500 w-4 h-4" />
                        Cross-platform Apps
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Our Development Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    "User Experience Design",
                    "Responsive Interface Development",
                    "Cross-platform Testing",
                    "Performance Optimization",
                    "Continuous Integration/Deployment"
                  ].map((step, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-green-500 w-5 h-5" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

