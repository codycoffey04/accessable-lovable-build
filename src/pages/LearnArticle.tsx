import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Clock, Share2, Facebook, Twitter, Mail } from "lucide-react";
import { ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

const articles: Record<string, any> = {
  "compression-101": {
    title: "Compression 101: What You Need to Know",
    category: "Compression Basics",
    readTime: "5 min",
    datePublished: "2024-01-15",
    isHealthRelated: true,
    featuredImage: "/placeholder.svg",
    content: [
      { type: "heading", text: "What is Graduated Compression?" },
      { type: "paragraph", text: "[CONTENT PLACEHOLDER - Explanation of graduated compression technology and how it works]" },
      { type: "heading", text: "Understanding mmHg Levels" },
      { type: "paragraph", text: "[CONTENT PLACEHOLDER - Explanation of compression levels: 15-20 mmHg for mild support, 20-30 mmHg for moderate support]" },
      { type: "video", text: "[VIDEO EMBED PLACEHOLDER - 'Understanding Compression Levels' - Requires captions, transcript, and audio description]" },
      { type: "heading", text: "Who Benefits from Compression?" },
      { type: "bullets", items: [
        "People with mobility challenges",
        "Travelers on long flights",
        "Service workers who stand all day",
        "Post-surgery recovery"
      ]},
      { type: "paragraph", text: "[CONTENT PLACEHOLDER - Factual information about compression use cases. Source: Mayo Clinic, CDC]" }
    ],
    relatedProducts: ["compression-socks"],
    relatedArticles: ["mobility-aids", "travel-tips"],
    faqs: [
      { question: "How long should I wear compression socks?", answer: "[ANSWER PLACEHOLDER - Consult with healthcare provider for personalized guidance]" },
      { question: "Can I wear compression socks to bed?", answer: "[ANSWER PLACEHOLDER - Generally not recommended unless specifically advised by doctor]" }
    ]
  },
  "mobility-aids": {
    title: "Mobility Aids & Sock Compatibility",
    category: "Mobility & Independence",
    readTime: "7 min",
    datePublished: "2024-01-20",
    isHealthRelated: false,
    featuredImage: "/placeholder.svg",
    content: [
      { type: "heading", text: "Using Compression Socks with Mobility Aids" },
      { type: "paragraph", text: "[CONTENT PLACEHOLDER - How to use compression socks with wheelchairs, walkers, and canes]" },
      { type: "heading", text: "Donning Aids for Easier Application" },
      { type: "paragraph", text: "[CONTENT PLACEHOLDER - Step-by-step guide to using sock donning aids]" },
      { type: "video", text: "[VIDEO EMBED PLACEHOLDER - 'Using a Sock Aid with Limited Dexterity' - Requires captions, transcript, and audio description]" }
    ],
    relatedProducts: ["donning-aids"],
    relatedArticles: ["compression-101", "arthritis-mobility"]
  },
  "travel-tips": {
    title: "Travel Tips for Circulation Health",
    category: "Lifestyle & Travel",
    readTime: "6 min",
    datePublished: "2024-02-01",
    isHealthRelated: true,
    featuredImage: "/placeholder.svg",
    content: [
      { type: "heading", text: "Why Compression Matters During Travel" },
      { type: "paragraph", text: "[CONTENT PLACEHOLDER - Explanation of circulation challenges during long flights/drives]" },
      { type: "heading", text: "Packing Tips" },
      { type: "bullets", items: [
        "Pack compression socks in carry-on",
        "Bring a donning aid for convenience",
        "Wear compression during flight",
        "Stay hydrated"
      ]}
    ],
    relatedProducts: ["compression-socks"],
    relatedArticles: ["compression-101"]
  }
};

export default function LearnArticle() {
  const { slug } = useParams();
  const article = slug ? articles[slug] : null;
  const addItem = useCartStore(state => state.addItem);

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Article not found</h1>
        <Link to="/learn">
          <Button>Back to Learn Hub</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <nav className="container mx-auto px-4 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li>/</li>
          <li><Link to="/learn" className="hover:text-primary">Learn Hub</Link></li>
          <li>/</li>
          <li aria-current="page" className="text-muted-foreground">{article.title}</li>
        </ol>
      </nav>

      <main id="main-content" className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Badge className="mb-3">{article.category}</Badge>
            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {article.readTime} read
              </span>
              <span>{new Date(article.datePublished).toLocaleDateString()}</span>
            </div>

            {/* FDA Disclaimer */}
            {article.isHealthRelated && (
              <div className="p-4 bg-muted/50 rounded-lg border mb-6">
                <p className="text-sm font-medium">
                  <strong>Important:</strong> These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease. <Link to="/policies/fda-disclaimer" className="text-primary hover:underline">Full disclaimer</Link>
                </p>
              </div>
            )}

            {/* Featured Image */}
            <div className="aspect-video bg-muted rounded-lg mb-8"></div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            {article.content.map((section: any, idx: number) => {
              switch (section.type) {
                case "heading":
                  return <h2 key={idx} className="text-2xl font-bold mt-8 mb-4">{section.text}</h2>;
                case "paragraph":
                  return <p key={idx} className="text-muted-foreground mb-4">{section.text}</p>;
                case "video":
                  return (
                    <div key={idx} className="my-8 p-6 bg-muted/40 rounded-lg border">
                      <p className="text-sm font-medium">{section.text}</p>
                    </div>
                  );
                case "bullets":
                  return (
                    <ul key={idx} className="list-disc list-inside space-y-2 mb-4">
                      {section.items.map((item: string, i: number) => (
                        <li key={i} className="text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                  );
                default:
                  return null;
              }
            })}
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-4 mb-12 pb-8 border-b">
            <span className="text-sm font-medium">Share:</span>
            <Button variant="outline" size="icon" aria-label="Share on Facebook">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" aria-label="Share on Twitter">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" aria-label="Share via Email">
              <Mail className="h-4 w-4" />
            </Button>
          </div>

          {/* Dynamic Product Recommendations */}
          {article.relatedProducts && article.relatedProducts.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Based on This Guide, Explore:</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {article.relatedProducts.map((productSlug: string) => (
                  <Card key={productSlug}>
                    <div className="aspect-video bg-muted"></div>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">[Product Name - {productSlug}]</h3>
                      <p className="text-muted-foreground mb-4">[Product description placeholder]</p>
                      <div className="flex gap-2">
                        <Button asChild>
                          <Link to={`/products/${productSlug}`}>Shop Now</Link>
                        </Button>
                        <Button variant="outline">Quick Add</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* FAQ Accordion */}
          {article.faqs && article.faqs.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {article.faqs.map((faq: any, idx: number) => (
                  <AccordionItem key={idx} value={`faq-${idx}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          )}

          {/* Related Articles */}
          {article.relatedArticles && article.relatedArticles.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-6">You might also like:</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {article.relatedArticles.map((relatedSlug: string) => {
                  const related = articles[relatedSlug];
                  return (
                    <Card key={relatedSlug}>
                      <div className="aspect-video bg-muted"></div>
                      <CardContent className="p-4">
                        <Badge variant="outline" className="mb-2">{related?.category || "Article"}</Badge>
                        <h3 className="font-semibold mb-2">
                          <Link to={`/learn/${relatedSlug}`} className="hover:text-primary transition-colors">
                            {related?.title || relatedSlug}
                          </Link>
                        </h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {related?.readTime || "5 min"} read
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </section>
          )}
        </article>
      </main>
    </div>
  );
}
