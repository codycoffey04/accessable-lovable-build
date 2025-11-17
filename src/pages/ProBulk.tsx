import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check } from "lucide-react";

export default function ProBulk() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <nav className="container mx-auto px-4 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li>/</li>
          <li><Link to="/pro" className="hover:text-primary">AccessAble Pro</Link></li>
          <li>/</li>
          <li aria-current="page" className="text-muted-foreground">Bulk Ordering</li>
        </ol>
      </nav>

      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Bulk Ordering Made Simple</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Flexible quantities, competitive pricing, and reliable delivery.
            </p>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Volume Pricing Tiers</h2>
          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th scope="col" className="text-left p-4 font-semibold">Quantity</th>
                    <th scope="col" className="text-left p-4 font-semibold">Discount</th>
                    <th scope="col" className="text-left p-4 font-semibold">Benefits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4">25–49 units</td>
                    <td className="p-4 font-bold text-primary">15% off retail</td>
                    <td className="p-4">Standard shipping</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">50–99 units</td>
                    <td className="p-4 font-bold text-primary">20% off retail</td>
                    <td className="p-4">Priority shipping</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">100+ units</td>
                    <td className="p-4 font-bold text-primary">25% off retail</td>
                    <td className="p-4">Free shipping + dedicated support</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="text-center mt-8">
              <Button size="lg" asChild>
                <a href="#quote-form">Request a Bulk Quote</a>
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-muted/40">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { step: 1, title: "Submit Quote Request", desc: "Fill out the form with your SKU details and quantity needs" },
                { step: 2, title: "Receive Custom Pricing", desc: "Get your personalized quote within 24 hours" },
                { step: 3, title: "Approve & Place Order", desc: "Review and approve your order with flexible payment terms" },
                { step: 4, title: "Fast Fulfillment", desc: "Receive your order in 5–7 business days" }
              ].map((item) => (
                <Card key={item.step}>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">{item.step}</span>
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="faq-1">
                <AccordionTrigger className="text-left">What's the minimum order quantity?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">The minimum order quantity for bulk pricing is 25 units. Orders below 25 units can be placed through our standard shop at retail pricing.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger className="text-left">Can I customize product assortments?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">Yes! We offer flexible SKU selections. You can mix sizes, colors, and compression levels to meet your facility's specific needs. Contact us for custom assortments.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger className="text-left">What payment terms are available?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">We accept all major credit cards, ACH transfers, and purchase orders for qualified accounts. Net-30 terms available for established Pro accounts.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4">
                <AccordionTrigger className="text-left">How long does fulfillment take?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">Standard fulfillment is 5–7 business days from order approval. Rush orders available for an additional fee.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-5">
                <AccordionTrigger className="text-left">Do you offer returns on bulk orders?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">Yes, our 30-day return policy applies to bulk orders. Unopened products in original packaging can be returned for a full refund or exchange.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Quote Form */}
        <section id="quote-form" className="py-16 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Request a Bulk Quote</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours with custom pricing.
                </p>
              </div>
              <Card>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="bulk-name">Name <span className="text-destructive">*</span></Label>
                        <Input id="bulk-name" required className="h-12" aria-required="true" />
                      </div>
                      <div>
                        <Label htmlFor="bulk-email">Email <span className="text-destructive">*</span></Label>
                        <Input id="bulk-email" type="email" required className="h-12" aria-required="true" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="bulk-organization">Organization <span className="text-destructive">*</span></Label>
                        <Input id="bulk-organization" required className="h-12" aria-required="true" />
                      </div>
                      <div>
                        <Label htmlFor="bulk-role">Role <span className="text-destructive">*</span></Label>
                        <Select required>
                          <SelectTrigger id="bulk-role" className="h-12">
                            <SelectValue placeholder="Select role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pt">Physical Therapist</SelectItem>
                            <SelectItem value="ot">Occupational Therapist</SelectItem>
                            <SelectItem value="manager">Facility Manager</SelectItem>
                            <SelectItem value="distributor">Distributor</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="bulk-quantity">Estimated Quantity <span className="text-destructive">*</span></Label>
                      <Select required>
                        <SelectTrigger id="bulk-quantity" className="h-12">
                          <SelectValue placeholder="Select quantity range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="25-49">25–49 units</SelectItem>
                          <SelectItem value="50-99">50–99 units</SelectItem>
                          <SelectItem value="100+">100+ units</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="bulk-message">SKU Details & Special Requirements</Label>
                      <Textarea id="bulk-message" rows={4} placeholder="Please specify sizes, colors, compression levels, and any custom requirements..." />
                    </div>
                    <Button type="submit" className="w-full h-12 text-lg">
                      Request Quote
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      By submitting, you agree to our <Link to="/policies/privacy" className="underline">Privacy Policy</Link>
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
