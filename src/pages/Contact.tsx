import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Schema } from "@/components/Schema";
import { generateBreadcrumbSchema } from "@/lib/schema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MessageCircle, Clock } from "lucide-react";

export default function Contact() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: window.location.origin },
    { name: 'Contact', url: window.location.href }
  ]);

  return (
    <div className="min-h-screen">
      <Schema schema={breadcrumbSchema} />
      {/* Breadcrumbs */}
      <nav className="container mx-auto px-4 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li>/</li>
          <li aria-current="page" className="text-muted-foreground">Contact</li>
        </ol>
      </nav>

      <main id="main-content">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-20 overflow-hidden mb-12">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/images/contact-hero-image.jpg" 
              alt="" 
              className="w-full h-full object-cover"
              aria-hidden="true"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          {/* Content Overlay */}
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Get in Touch</h1>
              <p className="text-xl text-white/90">
                We're here to help with any questions about our products or services.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <Mail className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    support@accessible.com
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Response within 24 hours
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Phone className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    1-800-XXX-XXXX
                  </p>
                  <p className="text-xs text-muted-foreground">
                    24/7 Support Available
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <MessageCircle className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Live Chat</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    Chat with our team
                  </p>
                  <Button variant="outline" className="w-full">
                    Start Chat
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Clock className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Hours</h3>
                  <div className="text-sm space-y-1">
                    <p className="text-muted-foreground">
                      <strong>Customer Support:</strong> 24/7
                    </p>
                    <p className="text-muted-foreground">
                      <strong>Pro Services:</strong> Mon-Fri, 9am-5pm ET
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="contact-name">Name <span className="text-destructive">*</span></Label>
                        <Input 
                          id="contact-name" 
                          required 
                          className="h-12" 
                          aria-required="true"
                        />
                      </div>
                      <div>
                        <Label htmlFor="contact-email">Email <span className="text-destructive">*</span></Label>
                        <Input 
                          id="contact-email" 
                          type="email" 
                          required 
                          className="h-12"
                          aria-required="true"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="contact-subject">Subject <span className="text-destructive">*</span></Label>
                      <Select required>
                        <SelectTrigger id="contact-subject" className="h-12">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="product">Product Question</SelectItem>
                          <SelectItem value="order">Order Support</SelectItem>
                          <SelectItem value="pro">Pro Inquiry</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="contact-message">Message <span className="text-destructive">*</span></Label>
                      <Textarea 
                        id="contact-message" 
                        required 
                        rows={6}
                        aria-required="true"
                      />
                    </div>

                    <Button type="submit" className="w-full h-12 text-lg">
                      Send Message
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      By submitting, you agree to our <Link to="/policies/privacy" className="underline">Privacy Policy</Link>
                    </p>
                  </form>
                </CardContent>
              </Card>

              {/* FAQ Link */}
              <div className="mt-6 p-6 bg-muted/40 rounded-lg">
                <h3 className="font-semibold mb-2">Need Quick Answers?</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Check our FAQ for answers to common questions about products, shipping, and more.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/faq">View FAQ</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
}
