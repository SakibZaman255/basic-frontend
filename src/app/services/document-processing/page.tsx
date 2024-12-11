import { FileText, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DocumentProcessingPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <FileText className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-6">Document Processing</h1>
            <p className="text-xl text-gray-600">
              Intelligent document processing solutions that automate data extraction and streamline your workflow.
            </p>
          </div>

          <div className="grid gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Our Document Processing Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    "OCR (Optical Character Recognition)",
                    "Automated Data Extraction",
                    "Document Classification",
                    "Form Processing",
                    "Data Validation and Verification"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-green-500 w-5 h-5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Efficiency</h3>
                    <p className="text-gray-600">Reduce manual data entry by up to 90% and process documents faster than ever.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Accuracy</h3>
                    <p className="text-gray-600">Achieve up to 99.9% accuracy in data extraction with our AI-powered solutions.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Cost Savings</h3>
                    <p className="text-gray-600">Significantly reduce operational costs associated with document processing.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Scalability</h3>
                    <p className="text-gray-600">Handle increasing document volumes without adding resources.</p>
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

