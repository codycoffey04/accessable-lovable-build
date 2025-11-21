import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, Heart, Award, Users } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
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

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Built from Real Need
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Adaptive compression that doesn't require choosing between medical efficacy and independent use.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why AccessAble Exists</h2>
            
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p>
                After my spinal cord injury, my healthcare provider prescribed medical-grade compression socks. The recommendation was clear: 20-30 mmHg graduated compression, daily wear.
              </p>
              
              <p>
                The reality was different. Standard compression socks require grip strength and flexibility I don't have. My hands couldn't pull tight compression fabric over my heel. I couldn't reach my feet easily. Every morning meant asking for help or skipping compression entirely.
              </p>
              
              <p>
                Adaptive tools existed—plastic frames and devices to help put on socks. But they felt clunky, clinical, and still required coordination I struggled with. I didn't want more equipment to manage. I needed compression socks that actually worked for my hands.
              </p>
              
              <p>
                That gap—between medical-grade compression and independent use—is why AccessAble exists.
              </p>
              
              <p>
                Our Donning Socks feature patent-pending adaptive technology: wide-mouth openings (3x standard width) and integrated pull-tabs built directly into medical-grade graduated compression fabric. No separate devices. No compromise on compression efficacy. No asking for help.
              </p>
              
              <p className="font-semibold text-foreground text-xl">
                Independence shouldn't require choosing between what works medically and what works physically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">What Drives Us</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Purpose-Built Solutions</h3>
                <p className="text-muted-foreground">
                  We don't add adaptive features as an afterthought. We build them into the compression technology itself. Wide openings, pull-tabs, and graduated compression working together—not competing.
                </p>
              </Card>
              <Card className="p-8">
                <Heart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Dignity Through Design</h3>
                <p className="text-muted-foreground">
                  Independence matters. Adaptive solutions shouldn't look institutional or require clinical settings. Medical-grade compression that fits into daily life, not separate from it.
                </p>
              </Card>
              <Card className="p-8">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">No Compromise on Quality</h3>
                <p className="text-muted-foreground">
                  20-30 mmHg graduated compression manufactured to medical device standards. Adaptive features don't reduce compression efficacy—they make it accessible.
                </p>
              </Card>
              <Card className="p-8">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Real-World Tested</h3>
                <p className="text-muted-foreground">
                  Refined through wear testing with people who have arthritis, limited mobility, post-surgical restrictions, and spinal cord injuries. Built for real hands, not ideal conditions.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Who We Serve</h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                AccessAble exists for anyone who needs medical-grade compression but has limited hand strength, reduced flexibility, or mobility challenges that make traditional compression socks physically inaccessible.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-bold mb-2">Individuals</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Post-surgical recovery (hip, knee, vascular procedures)</li>
                    <li>• Arthritis or limited grip strength</li>
                    <li>• Spinal cord injuries</li>
                    <li>• Stroke recovery</li>
                    <li>• Limited hip or knee flexibility</li>
                    <li>• Wheelchair users</li>
                    <li>• Chronic mobility challenges</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-bold mb-2">Healthcare Professionals</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Physical therapy clinics</li>
                    <li>• Occupational therapy practices</li>
                    <li>• Home health agencies</li>
                    <li>• Skilled nursing facilities</li>
                    <li>• Rehabilitation centers</li>
                    <li>• Medical supply distributors</li>
                  </ul>
                </div>
              </div>
              
              <p className="mt-6">
                If you've been prescribed compression but can't use standard socks independently, AccessAble was built for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Innovation Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What Makes AccessAble Different</h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Standard compression socks and adaptive tools treat the problem as two separate issues: you need compression (medical problem), and you need help putting it on (adaptive problem). That creates a choice between efficacy and independence.
              </p>
              
              <p>
                AccessAble treats it as one design problem. Our patent-pending technology integrates adaptive features directly into medical-grade compression fabric:
              </p>
              
              <div className="bg-primary/10 p-8 rounded-lg my-8">
                <h3 className="font-bold text-xl mb-4">Patent-Pending Adaptive Technology</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Wide-mouth opening:</strong> 3x wider than standard compression sock openings. Reduces ankle flexibility needed to slide your foot in.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Integrated pull-tabs:</strong> Thick fabric loops built into the top edge. Easier to grip than slippery compression material. Requires less fine motor control.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Seated-friendly design:</strong> Put them on while sitting on bed edge or chair. Reduces forward bending required. No standing balance needed.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Graduated 20-30 mmHg compression:</strong> Same medical-grade compression as prescription brands. Adaptive features don't compromise compression efficacy.</span>
                  </li>
                </ul>
              </div>
              
              <p>
                The result: medical-grade compression you can put on yourself, even with limited hand strength or mobility. No separate tools. No asking for help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Status Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Where We Are Now</h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                AccessAble is currently in the final stages of development. Our Donning Socks have been refined through real-world wear testing with users who have arthritis, limited mobility, post-surgical restrictions, and spinal cord injuries.
              </p>
              
              <p>
                We're preparing for launch. If you're interested in being notified when AccessAble Donning Socks are available, or if you're a healthcare professional interested in bulk solutions, we'd love to hear from you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button size="lg" asChild>
                  <Link to="/contact">Get Notified at Launch</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/pro">Healthcare Professionals</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Questions About AccessAble?</h2>
            <p className="text-xl mb-8 text-white/90">
              We're happy to answer questions about our products, sizing, or wholesale opportunities.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
