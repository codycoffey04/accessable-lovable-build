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
                AccessAble Pro – Adaptive Compression for Healthcare Professionals
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Bulk ordering, starter kits, and dedicated support for clinics, facilities, and distributors.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Designed for physical therapy clinics, home health agencies, rehabilitation facilities, and medical supply distributors who need reliable adaptive compression solutions for patients with limited mobility or hand strength.
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
      </main>
    </div>
  );
}
