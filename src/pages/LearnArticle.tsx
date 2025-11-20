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
import { Clock, Share2, Facebook, Twitter, Mail, ExternalLink } from "lucide-react";
import { ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { Schema } from "@/components/Schema";
import { generateArticleSchema, generateBreadcrumbSchema, generateVideoSchema, generateFAQSchema } from "@/lib/schema";

const articles: Record<string, any> = {
  "compression-101": {
    title: "Compression 101: What You Need to Know",
    category: "Compression Basics",
    readTime: "5 min",
    datePublished: "2024-01-15",
    isHealthRelated: true,
    featuredImage: "/images/learn-compression-101.jpg",
    content: [
      { type: "heading", text: "What is Graduated Compression?" },
      { type: "paragraph", text: "Graduated compression technology uses elastic fabric that applies different levels of pressure at different points on your leg. The pressure is strongest at the ankle and gradually decreases up the calf. This pressure gradient is measured in millimeters of mercury (mmHg), the same unit used to measure blood pressure." },
      { type: "heading", text: "Understanding mmHg Levels" },
      { type: "paragraph", text: "Compression socks are available in different pressure levels. 15-20 mmHg is considered mild compression, often used for everyday comfort during long periods of sitting or standing. 20-30 mmHg is moderate compression, commonly recommended by healthcare providers for post-surgical recovery or specific medical situations. Your healthcare provider can determine which compression level is appropriate for your needs." },
      { type: "video", text: "[VIDEO EMBED PLACEHOLDER - 'Understanding Compression Levels' - Requires captions, transcript, and audio description]" },
      { type: "heading", text: "Who Benefits from Compression?" },
      { type: "bullets", items: [
        "People with mobility challenges",
        "Travelers on long flights",
        "Service workers who stand all day",
        "Post-surgery recovery"
      ]},
      { type: "paragraph", text: "Healthcare providers may recommend compression socks for various situations, including post-surgical recovery, managing certain medical conditions, or for comfort during extended periods of limited mobility. Some people also choose to wear compression socks during travel or work for all-day comfort. Always consult your healthcare provider before starting compression use, especially if you have any medical conditions or concerns." }
    ],
    relatedProducts: ["compression-socks"],
    relatedArticles: ["mobility-aids", "travel-tips"],
    faqs: [
      { question: "How long should I wear compression socks?", answer: "Wear time depends entirely on your individual situation and your healthcare provider's guidance. Some people wear compression during waking hours and remove them at night. Others may have different schedules based on their specific needs. If you're using compression based on a provider's recommendation, follow their specific instructions for duration and frequency of wear." },
      { question: "Can I wear compression socks to bed?", answer: "Compression socks are typically designed for daytime use and are usually removed at night. However, some medical situations may require overnight wear. Never wear compression socks overnight without consulting your healthcare provider first. They can advise you based on your specific health situation and needs." }
    ],
    sources: [
      { title: "Compression Stockings", url: "https://www.mayoclinic.org/diseases-conditions/varicose-veins/expert-answers/compression-stockings/faq-20058172", organization: "Mayo Clinic" },
      { title: "Compression Therapy Basics", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4804256/", organization: "National Center for Biotechnology Information" },
      { title: "Graduated Compression Stockings", url: "https://medlineplus.gov/ency/patientinstructions/000600.htm", organization: "MedlinePlus (National Library of Medicine)" },
      { title: "Compression Garment Guidelines", url: "https://www.heart.org/en/health-topics/venous-thromboembolism/prevent-and-treat-blood-clots/compression-stockings", organization: "American Heart Association" }
    ]
  },
  "mobility-aids": {
    title: "Mobility Aids & Sock Compatibility",
    category: "Mobility & Independence",
    readTime: "7 min",
    datePublished: "2024-01-20",
    isHealthRelated: false,
    featuredImage: "/images/learn-mobility-independence.jpg",
    content: [
      { type: "heading", text: "Using Compression Socks with Mobility Aids" },
      { type: "paragraph", text: "Compression socks can be worn comfortably with wheelchairs, walkers, canes, and other mobility aids. When using a wheelchair, ensure the sock cuff doesn't create pressure points against wheelchair components—socks should fit smoothly under clothing without bunching. For walker and cane users, compression socks provide all-day comfort during extended standing or walking periods. Choose knee-high styles that stay in place without sliding down, and ensure the heel is properly positioned for optimal comfort throughout the day." },
      { type: "heading", text: "Donning Socks for Easier Application" },
      { type: "paragraph", text: "Donning Socks are compression socks specifically designed with adaptive features for easier independent application. These socks feature a wide-mouth opening—approximately 3x wider than standard compression sock openings—which reduces the ankle flexibility needed to slide your foot in. Integrated pull-tabs at the top edge provide thick fabric loops that are easier to grip than slippery compression material, especially for hands with limited strength or dexterity. To use Donning Socks: (1) Start seated on a bed or stable chair, (2) Hold the sock by the pull-tabs with the wide opening facing you, (3) Slide your foot into the wide opening—notice the reduced resistance compared to standard compression, (4) Once your foot is positioned, grip the pull-tabs and pull upward to slide the sock up your leg, (5) Smooth any wrinkles and adjust for comfort—the pull-tabs fold down and stay in place during wear. The adaptive design allows many users with limited hand strength, reduced flexibility, or balance concerns to put on medical-grade compression independently." },
      { type: "video", text: "[VIDEO EMBED PLACEHOLDER - 'Using Donning Socks with Limited Dexterity' - Requires captions, transcript, and audio description]" }
    ],
    relatedProducts: ["donning-sock"],
    relatedArticles: ["compression-101", "arthritis-mobility"]
  },
  "travel-tips": {
    title: "Travel Tips for Circulation Health",
    category: "Lifestyle & Travel",
    readTime: "6 min",
    datePublished: "2024-02-01",
    isHealthRelated: true,
    featuredImage: "/images/learn-travel-tips.jpg",
    content: [
      { type: "heading", text: "Why Compression Matters During Travel" },
      { type: "paragraph", text: "Extended periods of sitting during long flights or car trips can create comfort challenges for your legs. Limited movement in confined spaces means your legs remain in one position for hours. Many travelers use compression socks for comfort during flights and long drives, particularly on trips exceeding four hours. Some healthcare providers recommend compression for travel, especially for individuals with specific health considerations. If you have any medical conditions or concerns about travel and leg comfort, consult your healthcare provider before your trip." },
      { type: "heading", text: "Packing Tips" },
      { type: "bullets", items: [
        "Pack compression socks in carry-on",
        "Bring Donning Socks for convenience",
        "Wear compression during flight",
        "Stay hydrated"
      ]}
    ],
    relatedProducts: ["compression-socks"],
    relatedArticles: ["compression-101"],
    sources: [
      { title: "Travelers' Health: Deep Vein Thrombosis & Pulmonary Embolism", url: "https://wwwnc.cdc.gov/travel/page/dvt", organization: "Centers for Disease Control and Prevention" },
      { title: "Healthy Travel: Before You Go", url: "https://www.cdc.gov/travel/page/before-you-go", organization: "Centers for Disease Control and Prevention" },
      { title: "Long Distance Travel and Venous Thromboembolism", url: "https://www.who.int/news-room/questions-and-answers/item/long-distance-travel-and-venous-thromboembolism", organization: "World Health Organization" }
    ]
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

  // Generate schemas
  const articleSchema = generateArticleSchema({
    headline: article.title,
    author: 'AccessAble Team',
    datePublished: article.datePublished,
    image: article.featuredImage || '/images/learn-default.jpg',
    description: article.content.find((c: any) => c.type === 'paragraph')?.text || article.title
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: window.location.origin },
    { name: 'Learn Hub', url: `${window.location.origin}/learn` },
    { name: article.title, url: window.location.href }
  ]);

  // Video schema (if video present)
  const hasVideo = article.content.some((section: any) => section.type === 'video');
  const videoSchema = hasVideo ? generateVideoSchema({
    name: `Video: ${article.title}`,
    description: article.title,
    thumbnailUrl: article.featuredImage || '/images/learn-default.jpg',
    uploadDate: article.datePublished,
    duration: 'PT5M', // Placeholder duration
  }) : null;

  // FAQ schema (if FAQs present)
  const faqSchema = article.faqs && article.faqs.length > 0 
    ? generateFAQSchema(article.faqs.map((faq: any) => ({
        question: faq.question,
        answer: faq.answer
      })))
    : null;

  return (
    <div className="min-h-screen">
      {/* Schema Markup */}
      <Schema schema={articleSchema} />
      <Schema schema={breadcrumbSchema} />
      {videoSchema && <Schema schema={videoSchema} />}
      {faqSchema && <Schema schema={faqSchema} />}

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

          {/* Source Citations */}
          {article.isHealthRelated && (
            <section className="mb-12 pb-8 border-b">
              <h2 className="text-2xl font-bold mb-4">Sources & References</h2>
              <p className="text-sm text-muted-foreground mb-4">
                This article is based on information from authoritative medical sources. All claims are supported by peer-reviewed research or guidance from recognized healthcare organizations.
              </p>
              <div className="space-y-2">
                {article.sources && article.sources.length > 0 ? (
                  <ul className="space-y-2">
                    {article.sources.map((source: any, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <ExternalLink className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <a 
                          href={source.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {source.title || source.url}
                        </a>
                        {source.organization && (
                          <span className="text-muted-foreground">— {source.organization}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground italic">
                    Sources will be added as content is finalized. All health-related claims will be linked to authoritative sources (CDC, Mayo Clinic, peer-reviewed journals).
                  </p>
                )}
              </div>
              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                <p className="text-xs text-muted-foreground">
                  <strong>Note:</strong> This content is for educational purposes only and is not intended as medical advice. Always consult with your healthcare provider for personalized guidance.
                </p>
              </div>
            </section>
          )}

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
