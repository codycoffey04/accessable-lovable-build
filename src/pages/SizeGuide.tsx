import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Ruler, Video } from "lucide-react";

export default function SizeGuide() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <nav className="container mx-auto px-4 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li>/</li>
          <li aria-current="page" className="text-muted-foreground">Size Guide</li>
        </ol>
      </nav>

      <main id="main-content" className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Ruler className="h-16 w-16 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl font-bold mb-4">Compression Sock Sizing Guide</h1>
            <p className="text-xl text-muted-foreground">
              Find your perfect fit with our comprehensive measurement guide.
            </p>
          </div>

          {/* Video Tutorial */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <Video className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold mb-2">Video Tutorial</h2>
                  <p className="text-muted-foreground mb-4">
                    [VIDEO EMBED PLACEHOLDER - "How to Measure for Compression Socks" - Requires captions, transcript, and audio description]
                  </p>
                  <Badge variant="outline">3 min tutorial</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Measurement Instructions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">How to Measure</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-sm text-muted-foreground">[Illustration: Calf Measurement]</span>
                  </div>
                  <h3 className="font-semibold mb-3">Step 1: Measure Calf Circumference</h3>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Sit with your leg relaxed</li>
                    <li>Locate the widest part of your calf</li>
                    <li>Wrap a flexible measuring tape around this point</li>
                    <li>Ensure the tape is snug but not tight</li>
                    <li>Record the measurement in inches</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-sm text-muted-foreground">[Illustration: Ankle Measurement]</span>
                  </div>
                  <h3 className="font-semibold mb-3">Step 2: Measure Ankle Circumference</h3>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Remain seated with leg relaxed</li>
                    <li>Locate the narrowest part of your ankle (just above ankle bone)</li>
                    <li>Wrap the measuring tape around this point</li>
                    <li>Keep the tape level and snug</li>
                    <li>Record the measurement in inches</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Sizing Chart */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Sizing Chart</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-card">
                <thead>
                  <tr className="border-b">
                    <th scope="col" className="text-left p-4 font-semibold">Size</th>
                    <th scope="col" className="text-left p-4 font-semibold">Calf Circumference</th>
                    <th scope="col" className="text-left p-4 font-semibold">Ankle Circumference</th>
                    <th scope="col" className="text-left p-4 font-semibold">Shoe Size (US)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Small (S)</td>
                    <td className="p-4">12-14 inches</td>
                    <td className="p-4">7-9 inches</td>
                    <td className="p-4">Women 5-7, Men 4-6</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Medium (M)</td>
                    <td className="p-4">14-16 inches</td>
                    <td className="p-4">9-11 inches</td>
                    <td className="p-4">Women 7-10, Men 6-9</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Large (L)</td>
                    <td className="p-4">16-18 inches</td>
                    <td className="p-4">11-13 inches</td>
                    <td className="p-4">Women 10-13, Men 9-12</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">X-Large (XL)</td>
                    <td className="p-4">18-20 inches</td>
                    <td className="p-4">13-15 inches</td>
                    <td className="p-4">Women 13+, Men 12-14</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">XX-Large (XXL)</td>
                    <td className="p-4">20-22 inches</td>
                    <td className="p-4">15-17 inches</td>
                    <td className="p-4">Men 14+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Fit Tips */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Fit Tips & Troubleshooting</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">When They Fit Correctly</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✓ Snug but comfortable compression</li>
                    <li>✓ No bunching or wrinkling</li>
                    <li>✓ Heel sits in heel pocket</li>
                    <li>✓ Top band stays in place without rolling</li>
                    <li>✓ No numbness or tingling</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Common Fit Issues</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong>Too tight:</strong> Size up or try lower compression</li>
                    <li><strong>Sliding down:</strong> Size down or adjust application</li>
                    <li><strong>Bunching:</strong> Ensure smooth application from toe up</li>
                    <li><strong>Difficult to put on:</strong> Use a donning aid</li>
                    <li><strong>Between sizes:</strong> Choose the larger size</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Fit Guarantee */}
          <div className="p-8 bg-primary/10 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">30-Day Fit Guarantee</h3>
            <p className="text-lg mb-6">
              Not the right fit? Free exchanges within 30 days. We'll help you find the perfect size.
            </p>
            <Link to="/policies/shipping-returns" className="text-primary hover:underline font-medium">
              View Full Exchange Policy →
            </Link>
          </div>

          {/* Help CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Still unsure about sizing?</p>
            <Link to="/contact">
              <span className="text-primary hover:underline font-medium">Contact our sizing experts →</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
