import { Link } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search } from "lucide-react";

const faqs = [
  {
    category: "Products & Sizing",
    questions: [
      {
        q: "What compression level should I choose?",
        a: "For general daily wear and mild support, 15-20 mmHg is typically recommended. For moderate support needs, 20-30 mmHg is appropriate. Always consult with a healthcare provider if you have specific medical needs."
      },
      {
        q: "How do I measure for compression socks?",
        a: "Measure your calf circumference at the widest point and ankle circumference at the narrowest point (just above the ankle bone). See our Size Guide for detailed instructions and a sizing chart."
      },
      {
        q: "Are your products latex-free?",
        a: "Yes, all AccessAble compression socks and donning aids are latex-free to ensure safety for users with latex sensitivities."
      },
      {
        q: "How do I care for my compression socks?",
        a: "Machine wash cold or warm, tumble dry low. Avoid bleach and fabric softeners as they can break down the compression fibers. Air drying is recommended for longest product life."
      }
    ]
  },
  {
    category: "Compression Information",
    questions: [
      {
        q: "What does mmHg mean?",
        a: "mmHg stands for millimeters of mercury, which measures the compression pressure. Higher numbers indicate stronger compression. 15-20 mmHg is mild, 20-30 mmHg is moderate, and 30-40 mmHg is firm compression."
      },
      {
        q: "How long should I wear compression socks?",
        a: "Most people wear compression socks during waking hours and remove them at night. Follow your healthcare provider's specific recommendations for your situation."
      },
      {
        q: "Can I wear compression socks to bed?",
        a: "Generally, compression socks are not recommended for sleeping unless specifically advised by your doctor. Remove them before bed to allow your legs to rest without compression."
      },
      {
        q: "Do I need a prescription?",
        a: "Compression levels 15-20 mmHg and 20-30 mmHg are available over-the-counter without a prescription. However, we recommend consulting with a healthcare provider before starting any compression therapy."
      }
    ]
  },
  {
    category: "Ordering & Checkout",
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Shop Pay, Apple Pay, and Google Pay. Pro accounts can also use purchase orders and ACH transfers."
      },
      {
        q: "Do you offer gift cards?",
        a: "Yes, AccessAble gift cards are available in denominations of $25, $50, $100, and $200. They can be purchased on our website and make great gifts."
      },
      {
        q: "Can I change or cancel my order?",
        a: "Orders can be modified or cancelled within 2 hours of placement. After that, they enter our fulfillment system and cannot be changed. Contact customer service immediately if you need assistance."
      }
    ]
  },
  {
    category: "Shipping & Returns",
    questions: [
      {
        q: "How long does shipping take?",
        a: "Standard shipping takes 5-7 business days. Expedited shipping (2-3 business days) and overnight options are available at checkout. Free standard shipping on orders $50+."
      },
      {
        q: "Do you ship internationally?",
        a: "Currently, we ship within the United States and its territories. International shipping is coming soon. Sign up for our newsletter to be notified when it becomes available."
      },
      {
        q: "What is your return policy?",
        a: "We offer a 30-day return policy for unopened products in original packaging. Opened products can be exchanged for a different size or style within 30 days. See our Shipping & Returns policy for full details."
      },
      {
        q: "How do I initiate a return?",
        a: "Contact our customer service team at support@accessible.com or call 1-800-XXX-XXXX to request a return authorization. We'll provide a prepaid return label and instructions."
      }
    ]
  },
  {
    category: "Pro Services",
    questions: [
      {
        q: "What is AccessAble Pro?",
        a: "AccessAble Pro is our B2B program for healthcare facilities, clinics, and medical supply distributors. It offers bulk pricing, starter kits, dedicated support, and custom ordering options."
      },
      {
        q: "What are the minimum order quantities?",
        a: "Bulk pricing starts at 25 units. The more you order, the greater the discount: 15% off for 25-49 units, 20% off for 50-99 units, and 25% off for 100+ units with free shipping."
      },
      {
        q: "Do you offer custom branding?",
        a: "Yes, white-label and custom branding options are available for qualifying accounts. Contact our Pro team to discuss custom packaging, labeling, and marketing materials."
      },
      {
        q: "How do I request a quote?",
        a: "Visit our Pro Bulk Ordering page or Starter Kits page and fill out the quote request form. Our team will respond within 24 hours with custom pricing based on your needs."
      }
    ]
  },
  {
    category: "Accessibility",
    questions: [
      {
        q: "Are your products wheelchair-accessible?",
        a: "Yes, all our products are designed with wheelchair users in mind. Our compression socks are compatible with leg rests and footplates, and our donning aids work well when seated."
      },
      {
        q: "Do you offer assistance with putting on compression socks?",
        a: "We offer sock donning aids that make it easier to put on compression socks independently, even with limited dexterity. Our Learn Hub also has video tutorials and step-by-step guides."
      },
      {
        q: "Can I use your products with mobility aids?",
        a: "Absolutely. Our products are tested with wheelchairs, walkers, canes, and other mobility aids to ensure compatibility. See our Mobility Aids & Sock Compatibility guide for more information."
      }
    ]
  }
];

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
           q.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <nav className="container mx-auto px-4 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li>/</li>
          <li aria-current="page" className="text-muted-foreground">FAQ</li>
        </ol>
      </nav>

      <main id="main-content" className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Find answers to common questions about our products, shipping, and services.
            </p>

            {/* Search */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search FAQs..."
                className="pl-10 h-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search FAQs"
              />
            </div>
          </div>

          {/* FAQ Categories */}
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No FAQs found matching your search.</p>
            </div>
          ) : (
            filteredFaqs.map((category, categoryIdx) => (
              <div key={categoryIdx} className="mb-8">
                <h2 className="text-2xl font-bold mb-4">{category.category}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, idx) => (
                    <AccordionItem key={idx} value={`${categoryIdx}-${idx}`}>
                      <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">{faq.a}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))
          )}

          {/* Contact CTA */}
          <div className="mt-16 p-8 bg-muted/40 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our customer support team is here to help 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:support@accessible.com">Email Support</a>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
