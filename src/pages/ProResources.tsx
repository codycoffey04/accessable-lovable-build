import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { FileText, Video, Download, Search, BookOpen } from "lucide-react";

const resources = [
  {
    category: "Product Information",
    items: [
      { title: "Complete Product Catalog 2024", type: "PDF", size: "2.5 MB", icon: FileText },
      { title: "Compression Sock Sizing Guide", type: "PDF", size: "1.2 MB", icon: FileText },
      { title: "Product Care Instructions", type: "PDF", size: "800 KB", icon: FileText },
      { title: "Technical Specifications Sheet", type: "PDF", size: "1.5 MB", icon: FileText }
    ]
  },
  {
    category: "Training Materials",
    items: [
      { title: "Staff Training: Proper Sock Application", type: "Video", size: "45 min", icon: Video },
      { title: "Using Donning Aids Effectively", type: "Video", size: "15 min", icon: Video },
      { title: "Patient Education Guide", type: "PDF", size: "3.1 MB", icon: FileText },
      { title: "Compression Therapy Basics", type: "PDF", size: "2.8 MB", icon: FileText }
    ]
  },
  {
    category: "Marketing Assets",
    items: [
      { title: "Product Photography Package", type: "ZIP", size: "125 MB", icon: Download },
      { title: "Waiting Room Posters (Printable)", type: "PDF", size: "15 MB", icon: FileText },
      { title: "Product Brochures (Tri-fold)", type: "PDF", size: "4.2 MB", icon: FileText },
      { title: "Social Media Graphics", type: "ZIP", size: "45 MB", icon: Download }
    ]
  },
  {
    category: "Clinical Resources",
    items: [
      { title: "Compression Therapy Guidelines", type: "PDF", size: "2.1 MB", icon: BookOpen },
      { title: "Contraindications Reference", type: "PDF", size: "900 KB", icon: BookOpen },
      { title: "Patient Assessment Checklist", type: "PDF", size: "600 KB", icon: FileText },
      { title: "ROI Calculator for Facilities", type: "Excel", size: "1.8 MB", icon: Download }
    ]
  }
];

export default function ProResources() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <nav className="container mx-auto px-4 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li>/</li>
          <li><Link to="/pro" className="hover:text-primary">AccessAble Pro</Link></li>
          <li>/</li>
          <li aria-current="page" className="text-muted-foreground">Resources</li>
        </ol>
      </nav>

      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Professional Resources</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Downloadable materials to support your practice, educate your patients, and grow your business.
              </p>
              {/* Search Bar */}
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search resources..."
                  className="pl-10 h-12"
                  aria-label="Search resources"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Filter Badges */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="default" className="cursor-pointer">All Resources</Badge>
              <Badge variant="outline" className="cursor-pointer">Product Info</Badge>
              <Badge variant="outline" className="cursor-pointer">Training</Badge>
              <Badge variant="outline" className="cursor-pointer">Marketing</Badge>
              <Badge variant="outline" className="cursor-pointer">Clinical</Badge>
            </div>
          </div>
        </section>

        {/* Resources by Category */}
        {resources.map((category) => (
          <section key={category.category} className="py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <Card key={idx} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="p-3 rounded-lg bg-primary/10">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <Badge variant="outline">{item.type}</Badge>
                        </div>
                        <h3 className="font-semibold mb-2 min-h-[3rem]">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{item.size}</p>
                        <Button variant="outline" className="w-full" aria-label={`Download ${item.title}`}>
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>
        ))}

        {/* Video Note */}
        <section className="py-12 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> All video resources include captions, transcripts, and are accessible for screen readers. For technical support with downloads, contact{" "}
                <a href="mailto:pro-support@accessible.com" className="text-primary hover:underline">
                  pro-support@accessible.com
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need Custom Materials?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We can create branded materials for your facility. Contact us to discuss custom brochures, posters, or training content.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
