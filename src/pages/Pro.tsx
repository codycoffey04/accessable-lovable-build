import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Schema } from "@/components/Schema";
import { generateOrganizationSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Star, Check, AlertCircle, Package, Users, Clock, Shield, Truck, CheckCircle, FileText, Settings } from "lucide-react";

export default function Pro() {
  const organizationSchema = generateOrganizationSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: window.location.origin },
    { name: 'AccessAble Pro', url: window.location.href }
  ]);

  return (
    <div className="min-h-screen">
      <Schema schema={organizationSchema} />
      <Schema schema={breadcrumbSchema} />
      <nav className="container mx-auto px-4 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li>/</li>
          <li aria-current="page" className="text-muted-foreground">AccessAble Pro</li>
        </ol>
      </nav>

      <main id="main-content">
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <Badge className="mb-4">For Healthcare Professionals</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Trusted by Healthcare Professionals
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Bulk ordering, starter kits, and dedicated support for clinics, facilities, and distributors.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Designed for physical therapy clinics, home health agencies, rehabilitation facilities, and medical supply distributors who need reliable adaptive compression solutions for patients with limited mobility or hand strength.
              </p>
              
              <ul className="grid md:grid-cols-2 gap-3 mb-8 text-left max-w-2xl">
                <li className="flex gap-2 text-base">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Supports patient independence – Adaptive features reduce reliance on staff for donning</span>
                </li>
                <li className="flex gap-2 text-base">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Simplifies clinical workflows – Pre-built kits and bulk ordering streamline inventory</span>
                </li>
                <li className="flex gap-2 text-base">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Improves hygiene rotation – Volume ordering enables proper sock rotation schedules</span>
                </li>
                <li className="flex gap-2 text-base">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Reduces staff burden – Patients can don compression independently or with minimal assistance</span>
                </li>
                <li className="flex gap-2 text-base">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Clinic-grade durability – Built for repeated use and professional laundering</span>
                </li>
                <li className="flex gap-2 text-base">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Flexible sizing options – Full size range (S–XXL) with wide-calf options</span>
                </li>
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-12 px-8" asChild>
                  <a href="#contact-form">Request a Quote</a>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8" asChild>
                  <Link to="/pro/starter-kits">Explore Starter Kits</Link>
                </Button>
              </div>
              
              <div className="mt-8 p-6 bg-muted/40 rounded-lg border max-w-3xl">
                <p className="text-sm text-muted-foreground mb-4">
                  Already have a Pro account?
                </p>
                <Button variant="outline" asChild>
                  <Link to="/pro/login">Login to Pro Portal</Link>
                </Button>
              </div>
              
              <Alert className="mt-8 border-amber-500 bg-amber-50 max-w-3xl">
                <AlertCircle className="h-4 w-4 text-amber-600" />
                <AlertDescription className="text-amber-900">
                  These products are not intended to diagnose, treat, cure, or prevent any disease. Healthcare professionals should provide compression guidance based on individual patient needs.{" "}
                  <Link to="/fda-disclaimer" className="underline font-medium">Full Policy →</Link>
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </section>

        <section className="py-8 container mx-auto px-4 border-t">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <Link to="/pro/starter-kits" className="hover:text-primary">Starter Kits</Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/pro/bulk" className="hover:text-primary">Bulk Ordering</Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/pro/dashboard" className="hover:text-primary">Pro Dashboard</Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/pro/resources" className="hover:text-primary">Resources</Link>
            </div>
          </div>
        </section>

        {/* Bulk Ordering Options */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Flexible Volume Pricing for Professional Accounts</h2>
            <p className="text-xl text-muted-foreground mb-12">Save 15–25% on bulk orders tailored to your facility's needs.</p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Tier 1: Clinical Starter (25-49 units) */}
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-8">
                  <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">15% Off</Badge>
                  <h3 className="text-2xl font-bold mb-2">Clinical Starter</h3>
                  <p className="text-3xl font-bold text-primary mb-4">25–49 units</p>
                  <ul className="space-y-3 mb-6 text-sm">
                    <li className="flex gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span><strong>Best for:</strong> Small PT/OT practices, pilot programs, home health trial runs</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span><strong>Minimum order:</strong> {'{'}{25}{'}'} units (mix of compression socks and Donning Socks)</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span><strong>Typical use:</strong> Testing adaptive solutions with 10–15 patients</span>
                    </li>
                  </ul>
                  <Button className="w-full" asChild>
                    <a href="#contact-form">Request Quote</a>
                  </Button>
                </CardContent>
              </Card>
              
              {/* Tier 2: Facility Standard (50-99 units) */}
              <Card className="border-2 border-primary hover:border-primary transition-colors">
                <CardContent className="p-8">
                  <div className="flex gap-2 mb-4">
                    <Badge className="bg-primary text-primary-foreground">20% Off</Badge>
                    <Badge variant="outline" className="border-green-500 text-green-700">Free Shipping</Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Facility Standard</h3>
                  <p className="text-3xl font-bold text-primary mb-4">50–99 units</p>
                  <ul className="space-y-3 mb-6 text-sm">
                    <li className="flex gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span><strong>Best for:</strong> Mid-size clinics, rehabilitation centers, multi-therapist practices</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span><strong>Minimum order:</strong> {'{'}{50}{'}'} units</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span><strong>Typical use:</strong> Equipping 20–30 patient rotation</span>
                    </li>
                  </ul>
                  <Button className="w-full" asChild>
                    <a href="#contact-form">Request Quote</a>
                  </Button>
                </CardContent>
              </Card>
              
              {/* Tier 3: Enterprise Volume (100+ units) */}
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-8">
                  <div className="flex gap-2 mb-4">
                    <Badge className="bg-primary text-primary-foreground">25% Off</Badge>
                    <Badge variant="outline" className="border-purple-500 text-purple-700">Priority</Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Enterprise Volume</h3>
                  <p className="text-3xl font-bold text-primary mb-4">100+ units</p>
                  <ul className="space-y-3 mb-6 text-sm">
                    <li className="flex gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span><strong>Best for:</strong> Hospital systems, senior living facilities, DME distributors, multi-location practices</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span><strong>Minimum order:</strong> {'{'}{100}{'}'} units</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span><strong>Benefits:</strong> Free shipping, dedicated account manager, custom SKU assortments</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span><strong>Typical use:</strong> Large-scale patient programs, facility-wide inventory</span>
                    </li>
                  </ul>
                  <Button className="w-full" asChild>
                    <a href="#contact-form">Request Quote</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pre-Built Starter Kits */}
        <section className="py-16 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Pre-Built Starter Kits</h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {/* Physical Therapy Starter Kit */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <Package className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">Physical Therapy Starter Kit</h3>
                    <p className="text-2xl font-bold text-primary mb-2">${'{'}XXX{'}'}</p>
                    <p className="text-sm text-muted-foreground mb-4">Save {'{'}XX{'}'}% vs. individual retail</p>
                    
                    <div className="mb-6">
                      <p className="font-semibold mb-2 text-sm">What's Included:</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• {'{'}{10}{'}'} pairs compression socks (assorted sizes: 2 S, 3 M, 3 L, 2 XL)</li>
                        <li>• {'{'}{5}{'}'} pairs Donning Socks</li>
                        <li>• Patient education guides (digital)</li>
                      </ul>
                    </div>
                    
                    <p className="text-sm mb-4 text-muted-foreground">
                      <strong className="text-foreground">Best for:</strong> PT/OT clinics introducing adaptive compression to post-rehab patients
                    </p>
                    
                    <Button className="w-full" variant="outline">Request PT Starter Kit</Button>
                  </CardContent>
                </Card>
                
                {/* Home Health Agency Kit */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <Package className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">Home Health Agency Kit</h3>
                    <p className="text-2xl font-bold text-primary mb-2">${'{'}XXX{'}'}</p>
                    <p className="text-sm text-muted-foreground mb-4">Save {'{'}XX{'}'}% vs. individual retail</p>
                    
                    <div className="mb-6">
                      <p className="font-semibold mb-2 text-sm">What's Included:</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• {'{'}{20}{'}'} pairs compression socks (size-weighted for typical home health population)</li>
                        <li>• {'{'}{10}{'}'} pairs Donning Socks</li>
                        <li>• Staff training guide</li>
                      </ul>
                    </div>
                    
                    <p className="text-sm mb-4 text-muted-foreground">
                      <strong className="text-foreground">Best for:</strong> Home health providers managing multiple patients with mobility limitations
                    </p>
                    
                    <Button className="w-full" variant="outline">Request Home Health Kit</Button>
                  </CardContent>
                </Card>
                
                {/* Facility Rotation Kit */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <Package className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">Facility Rotation Kit</h3>
                    <p className="text-2xl font-bold text-primary mb-2">${'{'}XXX{'}'}</p>
                    <p className="text-sm text-muted-foreground mb-4">Save {'{'}XX{'}'}% vs. individual retail</p>
                    
                    <div className="mb-6">
                      <p className="font-semibold mb-2 text-sm">What's Included:</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• {'{'}{30}{'}'} pairs compression socks (full size range with higher proportion XL/XXL)</li>
                        <li>• {'{'}{15}{'}'} pairs Donning Socks</li>
                        <li>• Hygiene rotation guide</li>
                      </ul>
                    </div>
                    
                    <p className="text-sm mb-4 text-muted-foreground">
                      <strong className="text-foreground">Best for:</strong> Senior living facilities, skilled nursing, rehab centers with ongoing patient needs
                    </p>
                    
                    <Button className="w-full" variant="outline">Request Facility Kit</Button>
                  </CardContent>
                </Card>
              </div>
              
              {/* Custom Kit Builder */}
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardContent className="p-8 text-center">
                  <Settings className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Need a Custom Assortment?</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Work with our clinical solutions team to build a kit tailored to your patient population, size distribution, and workflow needs. Flexible SKU combinations. Minimum {'{'}{25}{'}'} units.
                  </p>
                  <Button size="lg">Request Custom Quote</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Designed for Clinical Workflows */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Built for Professional Environments</h2>
            <p className="text-xl text-muted-foreground mb-12 text-center">Understanding the unique demands of clinical settings</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Hygiene & Rotation Logic */}
              <Card>
                <CardContent className="p-8">
                  <Shield className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">Hygiene & Rotation Logic</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-semibold text-foreground mb-1">Why volume matters:</p>
                      <p className="text-muted-foreground">
                        Proper compression sock hygiene requires patient rotation. Each patient needs multiple pairs—one to wear, one in the laundry, one clean and ready. Bulk ordering ensures your clinic or facility can maintain proper hygiene protocols without constant reordering.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Clinic-grade durability:</p>
                      <p className="text-muted-foreground">
                        Professional laundering cycles. Repeated donning and doffing. Patient handling. AccessAble Pro products are built for the demands of clinical environments, not just home use.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Inventory management:</p>
                      <p className="text-muted-foreground">
                        Pre-built starter kits simplify initial setup. Bulk reordering through your Pro account dashboard streamlines restocking. Dedicated account managers help you forecast patient needs.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Reduced Staff Strain */}
              <Card>
                <CardContent className="p-8">
                  <Users className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">Reduced Staff Strain</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-semibold text-foreground mb-1">The workflow challenge:</p>
                      <p className="text-muted-foreground">
                        When patients cannot don compression socks independently, staff must assist. This takes time from therapy sessions, delays patient flow, and can lead to staff hand fatigue when assisting multiple patients daily.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">How adaptive design helps:</p>
                      <p className="text-muted-foreground">
                        Wide-mouth Donning Socks with integrated pull-tabs enable more patients to don compression independently or with minimal staff guidance. Staff can instruct rather than physically assist.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">What this means for your practice:</p>
                      <ul className="text-muted-foreground space-y-1 ml-4">
                        <li>• More time for actual therapy and patient care</li>
                        <li>• Less physical strain on staff assisting with donning</li>
                        <li>• Patients gain confidence through independent daily living skills</li>
                        <li>• Reduced bottlenecks in patient flow during group sessions</li>
                      </ul>
                      <p className="text-muted-foreground italic mt-2">
                        This does not improve patient medical outcomes. It supports workflow efficiency and patient independence in a daily living skill.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Patient Independence Emphasis */}
              <Card>
                <CardContent className="p-8">
                  <CheckCircle className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">Patient Independence Emphasis</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-semibold text-foreground mb-1">Clinical perspective:</p>
                      <p className="text-muted-foreground">
                        Adaptive equipment that enables independent dressing supports patient dignity and confidence. When patients can manage compression sock donning themselves, they're more likely to maintain compliance with provider recommendations after discharge.
                      </p>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                      <p className="font-semibold text-foreground mb-2">Therapist feedback:</p>
                      <p className="text-muted-foreground italic mb-2">
                        "Patients who can don compression independently at home don't need daily caregiver assistance for this task. That matters for long-term adherence."
                      </p>
                      <p className="text-xs text-muted-foreground">
                        — {'{'}TherapistName{'}'}, PT, {'{'}ClinicName{'}'}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">What's Included</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Donning Sock (Bulk Options) */}
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-6">Donning Sock (Bulk Options)</h3>
                    
                    {/* Donning Sock (Adaptive Compression) */}
                    <div className="mb-6 pb-6 border-b">
                      <h4 className="font-semibold mb-2">Donning Sock (Adaptive Compression)</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Compression sock with wide-mouth opening and integrated pull-tabs. Designed for independent donning with limited hand strength or flexibility. 20-30 mmHg graduated compression.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Available in bulk:</strong> S, M, L, XL, XXL sizes. Mix sizes per order.
                      </p>
                    </div>
                    
                    {/* Note: Extended-handle variant removed - not a separate product */}
                    {/* This section removed as we don't sell separate donning aids */}
                  </CardContent>
                </Card>
                
                {/* Compression Socks (Mixed Sizes) */}
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-6">Compression Socks (Mixed Sizes)</h3>
                    
                    {/* 20-30 mmHg */}
                    <div className="mb-6 pb-6 border-b">
                      <h4 className="font-semibold mb-2">20-30 mmHg Graduated Compression (Knee-High)</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground ml-4 mb-3">
                        <li>• Wide-mouth opening (3x standard width)</li>
                        <li>• Integrated pull-tabs</li>
                        <li>• Bamboo-blend, moisture-wicking</li>
                        <li>• Extended sizing: S, M, L, XL, XXL, Wide-Calf</li>
                        <li>• Neutral colorways: Black, Navy, Beige</li>
                      </ul>
                      <p className="text-sm text-muted-foreground">
                        Bulk assortments pre-weighted for typical clinic populations
                      </p>
                    </div>
                    
                    {/* 15-20 mmHg */}
                    <div>
                      <h4 className="font-semibold mb-2">15-20 mmHg Graduated Compression (Knee-High)</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground ml-4 mb-3">
                        <li>• Same adaptive features as 20-30 mmHg</li>
                        <li>• Lighter compression for daily support use</li>
                        <li>• Same size range and colorways</li>
                      </ul>
                      <p className="text-sm text-muted-foreground">
                        Available in bulk assortments
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Clinic-Grade Footies (Optional Add-On) */}
              <Card className="mb-12">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Clinic-Grade Footies (Optional Add-On)</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Disposable Hygiene Footies</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                        <li>• Single-use hygiene barrier for trying on compression socks in clinical settings</li>
                        <li>• Reduces cross-contamination in clinical settings</li>
                        <li>• Latex-free, hypoallergenic material</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm">
                        <strong>Available in bulk:</strong> {'{'}{100}{'}'}, {'{'}{500}{'}'}, {'{'}1000{'}'} count boxes
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Starter Pack Contents (Detailed) - Accordion */}
              <div className="bg-background rounded-lg border p-8">
                <h3 className="text-2xl font-bold mb-6">Starter Pack Contents (Detailed)</h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="pt-kit">
                    <AccordionTrigger>Physical Therapy Starter Kit includes:</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• {'{'}{10}{'}'} pairs compression socks (20-30 mmHg): 2 S, 3 M, 3 L, 2 XL</li>
                        <li>• {'{'}{5}{'}'} pairs Donning Socks</li>
                        <li>• {'{'}{1}{'}'} patient education guide (PDF): "Using Adaptive Compression at Home"</li>
                        <li>• {'{'}{1}{'}'} staff training guide (PDF): "Teaching Independent Compression Donning"</li>
                        <li>• Product care instructions</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="hh-kit">
                    <AccordionTrigger>Home Health Agency Kit includes:</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• {'{'}{20}{'}'} pairs compression socks (15-20 and 20-30 mmHg mixed): size distribution based on home health demographics</li>
                        <li>• {'{'}{10}{'}'} pairs Donning Socks</li>
                        <li>• {'{'}{5}{'}'} pairs standard Compression Socks</li>
                        <li>• {'{'}{1}{'}'} home health workflow guide (PDF)</li>
                        <li>• {'{'}{1}{'}'} patient handout template (customizable)</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="facility-kit">
                    <AccordionTrigger>Facility Rotation Kit includes:</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• {'{'}{30}{'}'} pairs compression socks (20-30 mmHg): higher proportion XL/XXL</li>
                        <li>• {'{'}{15}{'}'} pairs Donning Socks</li>
                        <li>• {'{'}{10}{'}'} pairs standard Compression Socks</li>
                        <li>• {'{'}{1}{'}'} hygiene rotation tracking template (PDF)</li>
                        <li>• {'{'}{1}{'}'} staff training video access (online)</li>
                        <li>• Bulk reorder quick-reference card</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Pro Feature Grid */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Makes AccessAble Pro Different</h2>
              <p className="text-xl text-muted-foreground">Six key differentiators for professional accounts</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1: Independent Donning Design */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Independent Donning Design</h3>
                  <p className="text-sm text-muted-foreground">
                    Wide-mouth opening and pull-tab system reduce physical assistance needed from staff. Patients with limited hand strength can don compression with minimal or no help.
                  </p>
                </CardContent>
              </Card>
              
              {/* Feature 2: Size Range for Diverse Populations */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Size Range for Diverse Populations</h3>
                  <p className="text-sm text-muted-foreground">
                    S through XXL, including wide-calf options. Accommodates bariatric patients, athletes, and standard adult sizing in one product line.
                  </p>
                </CardContent>
              </Card>
              
              {/* Feature 3: Clinic-Grade Durability */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Clinic-Grade Durability</h3>
                  <p className="text-sm text-muted-foreground">
                    Reinforced stitching at stress points. Designed for professional laundering cycles. Holds compression efficacy through repeated wash cycles.
                  </p>
                </CardContent>
              </Card>
              
              {/* Feature 4: Flexible Bulk Assortments */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Flexible Bulk Assortments</h3>
                  <p className="text-sm text-muted-foreground">
                    Pre-weighted size distributions match typical clinic demographics, or customize your own. Mix compression levels (15-20 and 20-30 mmHg) in single orders.
                  </p>
                </CardContent>
              </Card>
              
              {/* Feature 5: Professional Support */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Professional Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Dedicated account managers for Pro accounts. 24/7 email support. Staff training resources included with starter kits. Reorder reminders based on your usage patterns.
                  </p>
                </CardContent>
              </Card>
              
              {/* Feature 6: Hygiene-Friendly Workflow */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Hygiene-Friendly Workflow</h3>
                  <p className="text-sm text-muted-foreground">
                    Volume ordering supports proper sock rotation schedules. Optional disposable footies for fitting sessions in clinical settings. Reduces cross-contamination risks when multiple patients try products for sizing.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-center">AccessAble Pro vs. Standard Options</h2>
              <p className="text-xl text-muted-foreground mb-12 text-center">
                See how AccessAble Pro compares to consumer-grade and generic clinical compression
              </p>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[200px]">Feature</TableHead>
                      <TableHead>Standard Consumer Compression</TableHead>
                      <TableHead>Generic Clinical Compression</TableHead>
                      <TableHead className="bg-primary/5">AccessAble Pro</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Opening Width</TableCell>
                      <TableCell>Narrow, standard</TableCell>
                      <TableCell>Narrow, standard</TableCell>
                      <TableCell className="bg-primary/5 font-semibold">3x wider, adaptive</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Donning Assistance</TableCell>
                      <TableCell>Often requires full staff help</TableCell>
                      <TableCell>Often requires full staff help</TableCell>
                      <TableCell className="bg-primary/5 font-semibold">Minimal or no staff assistance needed</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Sizing Range</TableCell>
                      <TableCell>Limited (S–L typical)</TableCell>
                      <TableCell>Limited or single-size</TableCell>
                      <TableCell className="bg-primary/5 font-semibold">S–XXL + wide-calf options</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Bulk Availability</TableCell>
                      <TableCell>Retail only, no volume pricing</TableCell>
                      <TableCell>Available but generic</TableCell>
                      <TableCell className="bg-primary/5 font-semibold">Volume pricing + custom assortments</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Patient Independence</TableCell>
                      <TableCell>Low (requires assistance)</TableCell>
                      <TableCell>Low (requires assistance)</TableCell>
                      <TableCell className="bg-primary/5 font-semibold">High (designed for independence)</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Clinic Support</TableCell>
                      <TableCell>None</TableCell>
                      <TableCell>Minimal</TableCell>
                      <TableCell className="bg-primary/5 font-semibold">Dedicated account manager, training materials</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Durability</TableCell>
                      <TableCell>Consumer-grade</TableCell>
                      <TableCell>Variable</TableCell>
                      <TableCell className="bg-primary/5 font-semibold">Clinic-grade, professional laundering</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Staff Training Resources</TableCell>
                      <TableCell>Not included</TableCell>
                      <TableCell>Rarely included</TableCell>
                      <TableCell className="bg-primary/5 font-semibold">Included with starter kits</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              
              {/* Experience-Based Differences */}
              <Card className="mt-8 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Experience-Based Differences:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span className="text-muted-foreground flex-shrink-0">•</span>
                      <span><strong>Standard compression:</strong> <span className="text-muted-foreground">Patients frequently need staff assistance for donning, creating workflow bottlenecks</span></span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-muted-foreground flex-shrink-0">•</span>
                      <span><strong>Generic clinical compression:</strong> <span className="text-muted-foreground">Available in bulk but lacks adaptive features; patients still require significant help</span></span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-muted-foreground flex-shrink-0">•</span>
                      <span><strong>AccessAble Pro:</strong> <span className="text-muted-foreground">Adaptive design enables patient independence, reduces staff physical strain, maintains workflow efficiency</span></span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Use Cases</h2>
            
            <div className="space-y-8">
              {/* Physical Therapy / Occupational Therapy Clinics */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Physical Therapy / Occupational Therapy Clinics</h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <p className="font-semibold mb-2 text-primary">Typical scenario:</p>
                      <p className="text-sm text-muted-foreground">
                        Post-surgical patients discharged with compression recommendations. Limited hand strength or hip flexibility during recovery phase. Need to learn independent compression donning before returning home.
                      </p>
                    </div>
                    
                    <div>
                      <p className="font-semibold mb-2 text-primary">How AccessAble Pro helps:</p>
                      <p className="text-sm text-muted-foreground">
                        Therapists can teach adaptive donning techniques during sessions. Patients practice with tools they can purchase for home use (same products, consumer pricing available). Clinic maintains supply for patient trials.
                      </p>
                    </div>
                    
                    <div>
                      <p className="font-semibold mb-2 text-primary">Workflow benefit:</p>
                      <p className="text-sm text-muted-foreground">
                        Patients leave therapy confident they can maintain compression independently at home.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Home Health Agencies */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Home Health Agencies</h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <p className="font-semibold mb-2 text-primary">Typical scenario:</p>
                      <p className="text-sm text-muted-foreground">
                        Visiting nurses manage multiple patients with compression needs. Limited time per visit. Patients have varying mobility and dexterity limitations.
                      </p>
                    </div>
                    
                    <div>
                      <p className="font-semibold mb-2 text-primary">How AccessAble Pro helps:</p>
                      <p className="text-sm text-muted-foreground">
                        Nurses can instruct patients on adaptive techniques rather than donning compression for them each visit. Patients gain independence between visits. Agencies stock bulk supplies for patient distribution.
                      </p>
                    </div>
                    
                    <div>
                      <p className="font-semibold mb-2 text-primary">Workflow benefit:</p>
                      <p className="text-sm text-muted-foreground">
                        Nurses can manage more patients per day when patients handle their own compression donning.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Senior Living & Skilled Nursing Facilities */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Senior Living & Skilled Nursing Facilities</h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <p className="font-semibold mb-2 text-primary">Typical scenario:</p>
                      <p className="text-sm text-muted-foreground">
                        Residents with varying mobility levels. Staff assist with daily dressing, including compression socks. High volume of compression sock needs across resident population.
                      </p>
                    </div>
                    
                    <div>
                      <p className="font-semibold mb-2 text-primary">How AccessAble Pro helps:</p>
                      <p className="text-sm text-muted-foreground">
                        Facility maintains bulk inventory with proper size distribution. Residents who can don independently do so. Staff assist only where truly needed. Hygiene rotation is streamlined with volume supplies.
                      </p>
                    </div>
                    
                    <div>
                      <p className="font-semibold mb-2 text-primary">Workflow benefit:</p>
                      <p className="text-sm text-muted-foreground">
                        Reduces staff time spent on compression donning, allows focus on residents requiring more care.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Medical Supply Distributors / DME Providers */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Medical Supply Distributors / DME Providers</h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <p className="font-semibold mb-2 text-primary">Typical scenario:</p>
                      <p className="text-sm text-muted-foreground">
                        Customers request adaptive compression options. Need reliable inventory source, wholesale pricing, and products that actually work for patients with limitations.
                      </p>
                    </div>
                    
                    <div>
                      <p className="font-semibold mb-2 text-primary">How AccessAble Pro helps:</p>
                      <p className="text-sm text-muted-foreground">
                        Wholesale pricing for resale. Reliable inventory availability. Products designed for the mobility-challenged demographic DME serves.
                      </p>
                    </div>
                    
                    <div>
                      <p className="font-semibold mb-2 text-primary">Business benefit:</p>
                      <p className="text-sm text-muted-foreground">
                        Offer differentiated adaptive compression option. Margins maintained through volume pricing.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Ordering & Logistics */}
        <section className="py-16 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Ordering & Logistics</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* How Pro Ordering Works */}
                <Card>
                  <CardContent className="p-8">
                    <Clock className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-6">How Pro Ordering Works</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold mb-1">Step 1: Request Quote</p>
                        <p className="text-sm text-muted-foreground">
                          Submit inquiry through Pro contact form. Specify: organization type, estimated volume, size distribution needs, timeline.
                        </p>
                      </div>
                      
                      <div>
                        <p className="font-semibold mb-1">Step 2: Receive Custom Pricing</p>
                        <p className="text-sm text-muted-foreground">
                          Our clinical solutions team provides pricing within 24 business hours. Includes: unit pricing, shipping timeline, account setup details.
                        </p>
                      </div>
                      
                      <div>
                        <p className="font-semibold mb-1">Step 3: Approve & Place Order</p>
                        <p className="text-sm text-muted-foreground">
                          Once approved, place order through Pro portal or with your account manager. Purchase orders accepted for established accounts.
                        </p>
                      </div>
                      
                      <div>
                        <p className="font-semibold mb-1">Step 4: Fulfillment</p>
                        <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                          <li>• Standard fulfillment: 5–7 business days for in-stock items</li>
                          <li>• Custom assortments: 7–10 business days</li>
                          <li>• Enterprise orders (100+ units): 10–14 business days</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Reorder Process */}
                <Card>
                  <CardContent className="p-8">
                    <Truck className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-6">Reorder Process</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold mb-1">Pro Portal Dashboard:</p>
                        <p className="text-sm text-muted-foreground">
                          One-click reorder of previous orders. Modify quantities before confirming. Track order status in real-time.
                        </p>
                      </div>
                      
                      <div>
                        <p className="font-semibold mb-1">Account Manager Support:</p>
                        <p className="text-sm text-muted-foreground">
                          For custom or large orders, work directly with your assigned account manager via phone or email.
                        </p>
                      </div>
                      
                      <div>
                        <p className="font-semibold mb-1">Automated Reminders:</p>
                        <p className="text-sm text-muted-foreground">
                          Opt in to reorder reminders based on your typical usage cycle. Proactive restocking for consistent patient care.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Clinic Support */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Clinic Support</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Dedicated Account Manager:</h4>
                      <p className="text-sm text-muted-foreground">
                        Available for volume orders (50+ units or annual commitment). Direct contact for questions, custom assortments, and reorder coordination.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">24/7 Email Support:</h4>
                      <p className="text-sm text-muted-foreground">
                        All Pro accounts have access to priority email support. Typical response time: {'{'}X{'}'} business hours for non-urgent inquiries, {'{'}X{'}'} hours for urgent restocking needs.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Staff Training Resources:</h4>
                      <p className="text-sm text-muted-foreground">
                        PDF guides and video tutorials included with starter kits. Additional training materials available on request.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Product Trial Samples:</h4>
                      <p className="text-sm text-muted-foreground">
                        First-time Pro accounts can request sample pairs for staff evaluation. Deducted from first bulk order.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="w-full">
              {/* Bulk Ordering Questions */}
              <AccordionItem value="faq-1">
                <AccordionTrigger>What's the minimum order quantity for Pro pricing?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    {'{'}{25}{'}'} units. You can mix standard Compression Socks and Donning Socks to reach the minimum. Starter kits count toward minimum thresholds.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="faq-2">
                <AccordionTrigger>Can I customize product assortments?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Yes. For orders of 50+ units, you can specify exact size distributions, compression level mix (15-20 or 20-30 mmHg), and ratio of Donning Socks to standard Compression Socks. Work with your account manager to build custom assortments.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="faq-3">
                <AccordionTrigger>What payment terms are available?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Credit card, ACH transfer, or PayPal for initial orders. Established accounts (3+ orders) can request net-30 payment terms. Purchase orders accepted for facilities and distributors.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="faq-4">
                <AccordionTrigger>Do you offer consignment or trial programs?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    For qualified facilities and distributors, we can discuss consignment terms. Contact our Pro team to explore options based on your organization's needs.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              {/* Clinic Hygiene & Rotation */}
              <AccordionItem value="faq-5">
                <AccordionTrigger>How many pairs should each patient have?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Minimum two pairs per patient—one to wear, one in the laundry. Three pairs is ideal for continuous rotation without laundry gaps.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="faq-6">
                <AccordionTrigger>Can compression socks be shared between patients?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    No. Compression socks are patient-specific for hygiene reasons. Each patient should have their own dedicated pairs.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              
              <AccordionItem value="faq-8">
                <AccordionTrigger>What's your recommended replacement schedule?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Compression socks maintain effectiveness for 3–6 months with daily wear and proper care. For clinical trial use (multiple patients), replace more frequently based on wear.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              {/* FSA/HSA & Insurance */}
              <AccordionItem value="faq-9">
                <AccordionTrigger>Are these products FSA/HSA eligible?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Yes. Both Compression Socks and Donning Socks qualify for FSA/HSA reimbursement. Provide patients with itemized receipts for submission.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="faq-10">
                <AccordionTrigger>Can patients get insurance reimbursement?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Some insurance plans cover compression garments with a prescription. Coverage varies by plan. We provide documentation to support patient claims, but cannot guarantee reimbursement.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="faq-11">
                <AccordionTrigger>Do you provide invoices for facility reimbursement?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Yes. All Pro orders include detailed invoices with SKU breakdowns, suitable for facility accounting and reimbursement tracking.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              {/* Wearing Guidelines (Non-Medical) */}
              <AccordionItem value="faq-12">
                <AccordionTrigger>How should staff instruct patients on wear time?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Defer to the patient's healthcare provider for specific compression duration guidance. General practice: compression is typically worn during waking hours and removed at night. Each patient's provider will specify their individual protocol.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="faq-13">
                <AccordionTrigger>What if patients have difficulty even with adaptive features?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Some patients may need additional instruction, practice, or assistance. Staff can teach adaptive techniques during therapy sessions. If independent donning remains challenging, patients should discuss with their provider.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="faq-14">
                <AccordionTrigger>Can patients sleep in compression socks?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    This decision should be made by the patient's healthcare provider. Compression is typically worn during waking hours. Staff should not advise on overnight wear without provider guidance.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              {/* Returns & Exchanges for Clinics */}
              <AccordionItem value="faq-15">
                <AccordionTrigger>What's your return policy for Pro accounts?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Unopened, unused items can be returned within {'{'}{30}{'}'} days for refund or exchange. Opened items cannot be returned for hygiene reasons (same as consumer policy).
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="faq-16">
                <AccordionTrigger>Can we exchange sizes if we ordered wrong distribution?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Within {'{'}{30}{'}'} days of delivery, unopened size exchanges are accepted. Your account manager can coordinate exchanges for bulk orders.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="faq-17">
                <AccordionTrigger>What if products are defective?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Defective items are replaced at no charge regardless of time since purchase. Contact Pro support with photos/description of defect for immediate replacement processing.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-16 container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by 500+ Healthcare Facilities</h2>
            <p className="text-muted-foreground">Physical therapy clinics, home health agencies, and skilled nursing facilities nationwide</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 - PT/OT Context */}
            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Patients who can don compression independently at home don't need daily caregiver assistance for this task. That matters for long-term adherence."
                </p>
                <p className="font-medium">Sarah M., PT</p>
                <p className="text-sm text-muted-foreground">Riverside Physical Therapy</p>
              </CardContent>
            </Card>
            
            {/* Testimonial 2 - Home Health Context */}
            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "When patients can manage compression themselves, nurses can focus on medical care instead of daily donning assistance. It's made our workflow so much more efficient."
                </p>
                <p className="font-medium">Michael T., RN</p>
                <p className="text-sm text-muted-foreground">Premier Home Health Services</p>
              </CardContent>
            </Card>
            
            {/* Testimonial 3 - Facility Context */}
            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Bulk ordering streamlined our inventory management. Residents who can don independently do so, and staff can focus on those who need more support."
                </p>
                <p className="font-medium">Jennifer L.</p>
                <p className="text-sm text-muted-foreground">Facility Manager, Meadowbrook Senior Living</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="py-16 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Ready to Equip Your Clinic?</h2>
                <p className="text-muted-foreground">
                  Get custom volume pricing and starter kit options tailored to your facility's needs.
                </p>
              </div>
              <Card>
                <CardContent className="p-8">
                  <form className="space-y-6" aria-labelledby="contact-form-heading">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="pro-name">Name *</Label>
                        <Input 
                          id="pro-name" 
                          type="text" 
                          required 
                          aria-required="true"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="pro-email">Email *</Label>
                        <Input 
                          id="pro-email" 
                          type="email" 
                          required 
                          aria-required="true"
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="pro-org">Organization Name *</Label>
                        <Input 
                          id="pro-org" 
                          type="text" 
                          required 
                          aria-required="true"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="pro-role">Role *</Label>
                        <Select required>
                          <SelectTrigger id="pro-role" className="mt-1" aria-required="true">
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pt">Physical Therapist</SelectItem>
                            <SelectItem value="ot">Occupational Therapist</SelectItem>
                            <SelectItem value="facility-manager">Facility Manager</SelectItem>
                            <SelectItem value="distributor">Distributor</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="pro-volume">Estimated Volume *</Label>
                      <Select required>
                        <SelectTrigger id="pro-volume" className="mt-1" aria-required="true">
                          <SelectValue placeholder="Select volume" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="25-49">25–49 units</SelectItem>
                          <SelectItem value="50-99">50–99 units</SelectItem>
                          <SelectItem value="100+">100+ units</SelectItem>
                          <SelectItem value="not-sure">Not Sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="pro-message">Message (Optional)</Label>
                      <Textarea 
                        id="pro-message" 
                        rows={4} 
                        placeholder="Tell us about your needs..."
                        className="mt-1"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      Request Pro Pricing
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      We respect your information.{" "}
                      <Link to="/privacy-policy" className="underline hover:text-primary">
                        Privacy Policy →
                      </Link>
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA Modules */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* CTA Variant B: Order Clinic Starter Kit */}
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Start with a Pre-Built Kit</h3>
                    <p className="text-muted-foreground mb-6">
                      Get 10–30 pairs of Compression Socks and Donning Socks in one coordinated package. Perfect for pilot programs or immediate clinical needs.
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <Button className="w-full justify-between" variant="outline">
                        <span>Physical Therapy Starter Kit</span>
                        <span className="text-primary font-bold">${'{'}XXX{'}'}</span>
                      </Button>
                      <Button className="w-full justify-between" variant="outline">
                        <span>Home Health Agency Kit</span>
                        <span className="text-primary font-bold">${'{'}XXX{'}'}</span>
                      </Button>
                      <Button className="w-full justify-between" variant="outline">
                        <span>Facility Rotation Kit</span>
                        <span className="text-primary font-bold">${'{'}XXX{'}'}</span>
                      </Button>
                      <Button className="w-full justify-between" variant="outline">
                        <span>Custom Kit</span>
                        <span className="text-muted-foreground">Request Quote</span>
                      </Button>
                    </div>
                    
                    <Button size="lg" className="w-full" asChild>
                      <Link to="/pro/starter-kits">Order Starter Kit</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                {/* Secondary CTA: Schedule Consultation */}
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Questions About Which Kit Fits Your Needs?</h3>
                    <p className="text-muted-foreground mb-6">
                      Schedule a 15-minute call with our clinical solutions team. We'll help you determine ideal volume, size distribution, and setup for your patient population.
                    </p>
                    <Button size="lg" className="w-full" variant="secondary" asChild>
                      <a href="#contact-form">Schedule Call</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              {/* Trust Badges */}
              <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
                <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg border">
                  <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-sm mb-1">Trusted by 500+ Healthcare Facilities</p>
                  <p className="text-xs text-muted-foreground">Physical therapy clinics, home health agencies nationwide</p>
                </div>
                
                <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg border">
                  <Package className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-sm mb-1">Volume Pricing Available</p>
                  <p className="text-xs text-muted-foreground">Save 15–25% vs. retail on bulk orders</p>
                </div>
                
                <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg border">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-sm mb-1">Dedicated Account Management</p>
                  <p className="text-xs text-muted-foreground">Priority support for Pro accounts</p>
                </div>
                
                <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg border">
                  <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-sm mb-1">Staff Training Resources Included</p>
                  <p className="text-xs text-muted-foreground">PDF guides and video tutorials with starter kits</p>
                </div>
                
                <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg border">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-sm mb-1">Flexible Payment Terms</p>
                  <p className="text-xs text-muted-foreground">Net-30 available for established accounts</p>
                </div>
                
                <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg border">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-sm mb-1">Same Adaptive Design</p>
                  <p className="text-xs text-muted-foreground">Patients can purchase identical products for home use</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
