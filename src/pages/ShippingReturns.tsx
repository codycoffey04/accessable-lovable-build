import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Package, Truck, RefreshCcw, CheckCircle } from "lucide-react";

export default function ShippingReturns() {
  return (
    <div className="min-h-screen">
      <nav className="container mx-auto px-4 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li>/</li>
          <li aria-current="page" className="text-muted-foreground">Shipping & Returns</li>
        </ol>
      </nav>

      <main id="main-content" className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Shipping & Returns Policy</h1>

          {/* Quick Overview */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <Truck className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">Free Shipping</h3>
                <p className="text-sm text-muted-foreground">On orders $50+</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Package className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">Fast Delivery</h3>
                <p className="text-sm text-muted-foreground">5-7 business days</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <RefreshCcw className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">30-Day Returns</h3>
                <p className="text-sm text-muted-foreground">Easy returns & exchanges</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">Fit Guarantee</h3>
                <p className="text-sm text-muted-foreground">Free size exchanges</p>
              </CardContent>
            </Card>
          </div>

          {/* Shipping Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Shipping Information</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Shipping Options</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th scope="col" className="text-left p-4 font-semibold">Method</th>
                        <th scope="col" className="text-left p-4 font-semibold">Delivery Time</th>
                        <th scope="col" className="text-left p-4 font-semibold">Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-4">Standard Shipping</td>
                        <td className="p-4">5-7 business days</td>
                        <td className="p-4">$5.99 (FREE on orders $50+)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4">Expedited Shipping</td>
                        <td className="p-4">2-3 business days</td>
                        <td className="p-4">$12.99</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4">Overnight Shipping</td>
                        <td className="p-4">1 business day</td>
                        <td className="p-4">$24.99</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Processing Time</h3>
                <p className="text-muted-foreground mb-2">
                  Orders are typically processed within 1-2 business days (Monday-Friday, excluding holidays). You will receive a shipping confirmation email with tracking information once your order ships.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Shipping Locations</h3>
                <p className="text-muted-foreground mb-2">
                  We currently ship to all 50 U.S. states and U.S. territories. International shipping is coming soon.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Order Tracking</h3>
                <p className="text-muted-foreground mb-2">
                  Once your order ships, you'll receive a tracking number via email. You can also track your order by logging into your account and viewing your order history.
                </p>
              </div>
            </div>
          </section>

          {/* Returns & Exchanges */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Returns & Exchanges</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">30-Day Return Policy</h3>
                <p className="text-muted-foreground mb-4">
                  We want you to be completely satisfied with your purchase. If you're not happy with your order, you may return unopened products in their original packaging within 30 days of delivery for a full refund.
                </p>
                <p className="text-muted-foreground">
                  <strong>Opened products</strong> can be exchanged for a different size or style within 30 days. We cannot accept returns of opened products for sanitary reasons unless the product is defective.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Free Size Exchanges</h3>
                <p className="text-muted-foreground mb-4">
                  Not the right fit? We offer free exchanges for different sizes. Simply contact us and we'll send you a prepaid return label and ship your replacement at no charge.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">How to Initiate a Return</h3>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li>Contact our customer service team at support@accessible.com or call 1-800-XXX-XXXX</li>
                  <li>Provide your order number and reason for return</li>
                  <li>We'll email you a prepaid return shipping label</li>
                  <li>Pack the item(s) securely in the original packaging</li>
                  <li>Attach the return label and drop off at any USPS location</li>
                  <li>Refunds are processed within 5-7 business days of receiving your return</li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Items That Cannot Be Returned</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Opened products (except for defects or wrong item sent)</li>
                  <li>Items purchased more than 30 days ago</li>
                  <li>Products without original packaging</li>
                  <li>Gift cards</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Defective or Damaged Items</h3>
                <p className="text-muted-foreground mb-4">
                  If you receive a defective or damaged product, please contact us immediately. We'll arrange for a replacement or full refund at no cost to you. Please provide photos of the defect or damage to expedite the process.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Wrong Item Received</h3>
                <p className="text-muted-foreground mb-4">
                  If you receive the wrong item, please contact us right away. We'll send you the correct item and provide a prepaid return label for the incorrect item at no charge to you.
                </p>
              </div>
            </div>
          </section>

          {/* Refund Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Refund Information</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Refunds are processed to the original payment method within 5-7 business days of receiving your return. Please allow an additional 3-5 business days for the refund to appear on your statement, depending on your financial institution.
              </p>
              <p className="text-muted-foreground">
                <strong>Shipping costs:</strong> Original shipping charges are non-refundable unless the return is due to our error (defective product, wrong item sent, etc.).
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <div className="bg-muted/40 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Questions About Your Order?</h3>
            <p className="text-muted-foreground mb-6">
              Our customer service team is here to help 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:support@accessible.com" className="text-primary hover:underline">
                support@accessible.com
              </a>
              <span className="hidden sm:inline">|</span>
              <span>1-800-XXX-XXXX</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
