import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
import { Star, Check } from "lucide-react";

export default function Pro() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <nav className="container mx-auto px-4 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li>/</li>
          <li aria-current="page" className="text-muted-foreground">AccessAble Pro</li>
        </ol>
      </nav>

      <main id="main-content">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <Badge className="mb-4">For Healthcare Professionals</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Trusted by Healthcare Professionals
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Bulk ordering, starter kits, and dedicated support for clinics, facilities, and distributors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-12 px-8" asChild>
                  <a href="#contact-form">Request a Quote</a>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8" asChild>
                  <Link to="/pro/starter-kits">Explore Starter Kits</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Who We Serve</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Physical Therapy Clinics</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2"><Check className="h-5 w-5 text-primary flex-shrink-0" /> Compression for post-rehab patients</li>
                  <li className="flex gap-2"><Check className="h-5 w-5 text-primary flex-shrink-0" /> Donning aids for limited dexterity</li>
                  <li className="flex gap-2"><Check className="h-5 w-5 text-primary flex-shrink-0" /> Educational materials included</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Senior Living Facilities</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2"><Check className="h-5 w-5 text-primary flex-shrink-0" /> Bulk ordering for residents</li>
                  <li className="flex gap-2"><Check className="h-5 w-5 text-primary flex-shrink-0" /> Easy-on designs for staff efficiency</li>
                  <li className="flex gap-2"><Check className="h-5 w-5 text-primary flex-shrink-0" /> Staff training resources</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Medical Supply Distributors</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2"><Check className="h-5 w-5 text-primary flex-shrink-0" /> Wholesale pricing</li>
                  <li className="flex gap-2"><Check className="h-5 w-5 text-primary flex-shrink-0" /> Reliable inventory</li>
                  <li className="flex gap-2"><Check className="h-5 w-5 text-primary flex-shrink-0" /> White-label options available</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-muted/40">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Key Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Bulk Discounts</h3>
                <p className="text-sm text-muted-foreground">Starting at 25+ units</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Dedicated Support</h3>
                <p className="text-sm text-muted-foreground">24/7 account management</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Custom Kits</h3>
                <p className="text-sm text-muted-foreground">Flexible SKUs and assortments</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Fast Shipping</h3>
                <p className="text-sm text-muted-foreground">Reliable delivery</p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-16 container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by 500+ Facilities Nationwide</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "[TESTIMONIAL PLACEHOLDER - Focus on ease of use, patient satisfaction, reliable supply - NO medical claims]"
                  </p>
                  <p className="font-medium">[Clinic Director Name]</p>
                  <p className="text-sm text-muted-foreground">[Facility Name]</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="py-16 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Get Started with AccessAble Pro</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>
              <Card>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Name <span className="text-destructive">*</span></Label>
                        <Input id="name" required className="h-12" aria-required="true" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email <span className="text-destructive">*</span></Label>
                        <Input id="email" type="email" required className="h-12" aria-required="true" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="organization">Organization <span className="text-destructive">*</span></Label>
                        <Input id="organization" required className="h-12" aria-required="true" />
                      </div>
                      <div>
                        <Label htmlFor="role">Role <span className="text-destructive">*</span></Label>
                        <Select required>
                          <SelectTrigger id="role" className="h-12">
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
                      <Label htmlFor="message">Message (Optional)</Label>
                      <Textarea id="message" rows={4} />
                    </div>
                    <Button type="submit" className="w-full h-12 text-lg">
                      Request Information
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

        {/* Quick Links */}
        <section className="py-12 container mx-auto px-4 border-t">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="outline" asChild>
              <Link to="/pro/bulk">Bulk Ordering</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/pro/starter-kits">Starter Kits</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/pro/resources">Resources</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
