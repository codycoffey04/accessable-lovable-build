import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, Package } from "lucide-react";

const kits = [
  {
    id: "pt-kit",
    handle: "physical-therapy-kit",
    name: "Physical Therapy Starter Kit",
    price: "Contact for Pricing",
    description: "Ideal for PT clinics and rehabilitation centers",
    includes: [
      "5 pairs Donning Socks (20-30 mmHg, assorted sizes: S, M, L, XL)",
      "5 pairs Compression Socks (20-30 mmHg, assorted sizes: S, M, L, XL)",
      "Patient education guide (PDF): 'Using Adaptive Compression at Home'",
      "Staff training guide (PDF): 'Teaching Independent Compression Donning'",
      "Product care instructions"
    ],
    skus: [
      { sku: "DS-2030-S", product: "Donning Sock 20-30 mmHg (S)", quantity: "1" },
      { sku: "DS-2030-M", product: "Donning Sock 20-30 mmHg (M)", quantity: "2" },
      { sku: "DS-2030-L", product: "Donning Sock 20-30 mmHg (L)", quantity: "2" },
      { sku: "CS-2030-M", product: "Compression Sock 20-30 mmHg (M)", quantity: "2" },
      { sku: "CS-2030-L", product: "Compression Sock 20-30 mmHg (L)", quantity: "3" }
    ],
    bestFor: "Small PT/OT practices introducing adaptive compression to post-rehab patients"
  },
  {
    id: "senior-kit",
    handle: "senior-living-kit",
    name: "Home Health Agency Kit",
    price: "Contact for Pricing",
    description: "Perfect for home health providers managing multiple patients with mobility limitations",
    includes: [
      "10 pairs Donning Socks (mix of 15-20 and 20-30 mmHg, size-weighted for home health demographics)",
      "10 pairs Compression Socks (20-30 mmHg, assorted sizes)",
      "Home health workflow guide (PDF)",
      "Patient handout template (customizable)",
      "Staff training video access (online)"
    ],
    skus: [
      { sku: "DS-1520-M", product: "Donning Sock 15-20 mmHg (M)", quantity: "3" },
      { sku: "DS-2030-M", product: "Donning Sock 20-30 mmHg (M)", quantity: "3" },
      { sku: "DS-2030-L", product: "Donning Sock 20-30 mmHg (L)", quantity: "4" },
      { sku: "CS-2030-L", product: "Compression Sock 20-30 mmHg (L)", quantity: "4" },
      { sku: "CS-2030-XL", product: "Compression Sock 20-30 mmHg (XL)", quantity: "6" }
    ],
    bestFor: "Home health providers managing multiple patients with mobility limitations"
  },
  {
    id: "distributor-kit",
    handle: "distributor-starter-kit",
    name: "Facility Rotation Kit",
    price: "Contact for Pricing",
    description: "Comprehensive kit for senior living facilities, skilled nursing, rehab centers",
    includes: [
      "20 pairs Donning Socks (20-30 mmHg, higher proportion XL/XXL)",
      "10 pairs Compression Socks (20-30 mmHg, full size range)",
      "Hygiene rotation tracking template (PDF)",
      "Staff training video access (online)",
      "Bulk reorder quick-reference card"
    ],
    skus: [
      { sku: "DS-2030-L", product: "Donning Sock 20-30 mmHg (L)", quantity: "6" },
      { sku: "DS-2030-XL", product: "Donning Sock 20-30 mmHg (XL)", quantity: "8" },
      { sku: "DS-2030-XXL", product: "Donning Sock 20-30 mmHg (XXL)", quantity: "6" },
      { sku: "CS-2030-M", product: "Compression Sock 20-30 mmHg (M)", quantity: "3" },
      { sku: "CS-2030-L", product: "Compression Sock 20-30 mmHg (L)", quantity: "4" },
      { sku: "CS-2030-XL", product: "Compression Sock 20-30 mmHg (XL)", quantity: "3" }
    ],
    bestFor: "Senior living facilities, skilled nursing, rehab centers with ongoing patient needs"
  }
];

export default function ProStarterKits() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <nav className="container mx-auto px-4 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li>/</li>
          <li><Link to="/pro" className="hover:text-primary">AccessAble Pro</Link></li>
          <li>/</li>
          <li aria-current="page" className="text-muted-foreground">Starter Kits</li>
        </ol>
      </nav>

      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
          <div className="container mx-auto px-4 text-center">
            <Package className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Pre-Built Kits for Instant Setup</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Curated assortments for clinics and facilities. Get everything you need in one order.
            </p>
          </div>
        </section>

        {/* Kit Options */}
        <section className="py-16 container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {kits.map((kit) => (
              <Card key={kit.id} className="flex flex-col">
                <CardContent className="p-8 flex flex-col flex-1">
                  <Badge className="w-fit mb-4">{kit.bestFor}</Badge>
                  <h3 className="text-2xl font-bold mb-2">{kit.name}</h3>
                  <p className="text-muted-foreground mb-4">{kit.description}</p>
                  <p className="text-3xl font-bold mb-6">{kit.price}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {kit.includes.map((item, idx) => (
                        <li key={idx} className="flex gap-2 text-sm">
                          <Check className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto space-y-2">
                    <Button className="w-full h-12" asChild>
                      <Link to={`/products/${kit.handle}`}>View Product</Link>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/pro/bulk">Request Quote</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Detailed SKU Breakdown */}
        <section className="py-16 bg-muted/40">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Detailed SKU Breakdown</h2>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {kits.map((kit) => (
                  <AccordionItem key={kit.id} value={kit.id}>
                    <AccordionTrigger className="text-left text-lg font-semibold">
                      {kit.name} - Detailed Contents
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pt-4">
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr className="border-b">
                                <th scope="col" className="text-left p-3 font-semibold">SKU</th>
                                <th scope="col" className="text-left p-3 font-semibold">Product</th>
                                <th scope="col" className="text-left p-3 font-semibold">Details</th>
                              </tr>
                            </thead>
                            <tbody>
                              {kit.skus.map((item, idx) => (
                                <tr key={idx} className="border-b">
                                  <td className="p-3 font-mono text-sm">{item.sku}</td>
                                  <td className="p-3">{item.product}</td>
                                  <td className="p-3 text-sm text-muted-foreground">
                                    {item.sizes || item.quantity}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Custom Kits */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need a Custom Assortment?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Work with our team to build a kit tailored to your facility's specific needs. Mix and match products, sizes, and quantities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/pro/bulk">View Bulk Pricing</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing Note */}
        <section className="py-12 bg-muted/40">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-4">
              <strong>Note:</strong> Starter kit pricing includes volume discounts. The same bulk pricing tiers apply: 15% off for 25–49 units, 20% off for 50–99 units, and 25% off for 100+ units with free shipping.
            </p>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              All starter kits are available for public viewing. <Link to="/pro/login" className="text-primary underline">Login to Pro Portal</Link> for account-specific pricing and bulk ordering.
            </p>
          </div>
        </section>

        {/* Contact Form Anchor */}
        <div id="contact-form" className="py-16 container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Order?</h3>
            <p className="text-muted-foreground mb-6">
              Contact us to request a starter kit or discuss custom options.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
