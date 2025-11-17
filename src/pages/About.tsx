import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
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
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Innovated for Independence</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Purpose-built adaptive compression for real-world needs.
            </p>
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
              <div className="aspect-video bg-muted rounded-lg mb-6"></div>
              <p className="text-sm text-muted-foreground text-center">
                [Behind-the-scenes product development image placeholder - diverse testers with mobility aids]
              </p>
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
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4">
                      "[CUSTOMER TESTIMONIAL PLACEHOLDER - Focus on functional benefits like 'Easier to put on,' 'comfortable all day,' 'fits well with my brace']"
                    </p>
                    <p className="font-medium">[Customer Name]</p>
                    <p className="text-sm text-muted-foreground">[User with mobility aid]</p>
                  </CardContent>
                </Card>
              ))}
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
