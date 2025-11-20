import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Schema } from "@/components/Schema";
import { generateOrganizationSchema, generateBreadcrumbSchema, generateAboutPageSchema } from "@/lib/schema";

export default function About() {
  // Generate schemas
  const organizationSchema = generateOrganizationSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: window.location.origin },
    { name: 'About', url: window.location.href }
  ]);
  const aboutPageSchema = generateAboutPageSchema();

  return (
    <div className="min-h-screen">
      {/* Schema Markup */}
      <Schema schema={organizationSchema} />
      <Schema schema={breadcrumbSchema} />
      <Schema schema={aboutPageSchema} />
      
      {/* Breadcrumbs */}
      <nav className="container mx-auto px-4 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li>/</li>
          <li aria-current="page" className="text-muted-foreground">About</li>
        </ol>
      </nav>

      <main id="main-content">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">Innovated for Independence</h1>
                <p className="text-xl text-muted-foreground max-w-3xl">
                  Purpose-built adaptive compression for real-world needs.
                </p>
              </div>
              <div>
                <img 
                  src="/images/about-hero.jpg" 
                  alt="AccessAble product lineup showing compression socks with pull-tabs" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-xl text-muted-foreground text-center mb-12">
              AccessAble exists to remove barriers—literally and figuratively—through compression solutions designed for real-world mobility challenges.
            </p>
            
            {/* Key Values */}
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-lg mb-3">Dignity-Forward Design</h3>
                  <p className="text-muted-foreground">
                    No medical aesthetics, no pity branding. Just functional, dignified products.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-lg mb-3">Accessibility-First</h3>
                  <p className="text-muted-foreground">
                    Built for diverse needs, tested for real usability by real users.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-lg mb-3">Quality Without Compromise</h3>
                  <p className="text-muted-foreground">
                    Durable, comfortable, and effective. No shortcuts.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Product Story */}
        <section className="py-16 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">How We Build for Independence</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Every product is tested by users with arthritis, limited dexterity, and wheelchair dependence to ensure it works in real life—not just on paper.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We focus on design process, user testing with mobility-challenged individuals, and responsible material sourcing. Our commitment is to create products that genuinely serve their purpose.
              </p>
              <img 
                src="/images/about-product-story.jpg" 
                alt="Diverse testers with mobility aids testing AccessAble products" 
                className="aspect-video object-cover rounded-lg mb-6 w-full"
              />
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Impact with Every Purchase</h2>
            <p className="text-lg text-muted-foreground mb-8">
              5% of profits support [Charity Name], funding adaptive equipment for underserved communities.
            </p>
            <Button asChild>
              <Link to="#">Learn About Our Partners</Link>
            </Button>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="py-16 bg-muted/40">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">What Our Customers Say</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "I can get these on by myself in under a minute. No more asking my daughter for help every morning."
                  </p>
                  <p className="font-medium">Carol T.</p>
                  <p className="text-sm text-muted-foreground">Arthritis</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Comfortable enough to wear all day without pinching. The bamboo fabric doesn't make my legs sweat like my old compression socks did."
                  </p>
                  <p className="font-medium">James R.</p>
                  <p className="text-sm text-muted-foreground">Uses walker</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "The wide opening works perfectly with my leg brace. I was worried they wouldn't fit over it, but they do."
                  </p>
                  <p className="font-medium">Linda M.</p>
                  <p className="text-sm text-muted-foreground">Post-surgical recovery</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience the Difference?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/collections/all">Shop Products</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/pro">Explore Pro Solutions</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
