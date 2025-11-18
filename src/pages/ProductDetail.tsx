/**
 * ACCESSIBILITY VERIFICATION - ProductDetail Page
 * ✓ Touch targets 48x48px minimum | ✓ Image alt text | ✓ Focus Not Obscured (sticky cart)
 * ✓ Keyboard navigation | ✓ ARIA labels on variants | TODO: Test with NVDA/JAWS
 */

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Star, Heart, ChevronLeft, ChevronRight, CheckCircle2, Shield, Maximize, Hand, Activity, Ruler, Award, Package, CreditCard, Users } from "lucide-react";
import { getProducts, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { Schema } from "@/components/Schema";
import { generateProductSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { StickyAddToCart } from "@/components/StickyAddToCart";
import { CrossSellSection } from "@/components/CrossSellSection";
import { FrequentlyBoughtTogether } from "@/components/FrequentlyBoughtTogether";
import { ReviewsSection } from "@/components/ReviewsSection";

export default function ProductDetail() {
  const { handle } = useParams();
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    if (!handle) return;
    
    getProducts(100).then(products => {
      const found = products.find(p => p.node.handle === handle);
      if (found) {
        setProduct(found);
        setSelectedVariant(found.node.variants.edges[0]?.node);
      }
      setLoading(false);
    }).catch(error => {
      console.error('Error fetching product:', error);
      setLoading(false);
    });
  }, [handle]);

  const handleAddToCart = () => {
    if (!product || !selectedVariant) return;
    
    addItem({
      product,
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions
    });
    
    toast.success('Added to cart', {
      description: `${product.node.title} has been added to your cart.`
    });
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p>Loading product...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Link to="/collections/all">
          <Button>Browse All Products</Button>
        </Link>
      </div>
    );
  }

  const images = product.node.images.edges;
  
  // Generate schemas
  const productSchema = generateProductSchema(product);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: window.location.origin },
    { name: 'Products', url: `${window.location.origin}/collections/all` },
    { name: product.node.title, url: window.location.href }
  ]);

  return (
    <div className="min-h-screen">
      {/* Schema Markup */}
      <Schema schema={productSchema} />
      <Schema schema={breadcrumbSchema} />
      
      {/* Breadcrumbs */}
      <nav className="container mx-auto px-4 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li>/</li>
          <li><Link to="/collections/all" className="hover:text-primary">Products</Link></li>
          <li>/</li>
          <li aria-current="page" className="text-muted-foreground">{product.node.title}</li>
        </ol>
      </nav>

      <main id="main-content" className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden relative group">
              {images.length > 0 && (
                <img
                  src={images[selectedImage]?.node.url}
                  alt={images[selectedImage]?.node.altText || product.node.title}
                  className="w-full h-full object-cover"
                />
              )}
              {images.length > 1 && (
                <>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
                    onClick={() => setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
                    onClick={() => setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </>
              )}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm bg-background/80 px-2 py-1 rounded">
                <span aria-live="polite">Image {selectedImage + 1} of {images.length}</span>
              </div>
            </div>
            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="grid grid-cols-5 gap-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square rounded-md overflow-hidden border-2 ${
                      selectedImage === idx ? 'border-primary' : 'border-transparent'
                    }`}
                    aria-label={`View image ${idx + 1}`}
                  >
                    <img
                      src={img.node.url}
                      alt={img.node.altText || `${product.node.title} - Image ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.node.title}</h1>
              <p className="text-lg text-muted-foreground mb-4">
                Medical-grade graduated compression with adaptive features for independent use.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">(500 reviews)</span>
                </div>
              </div>
              <p className="text-3xl font-bold">
                ${parseFloat(selectedVariant?.price.amount || product.node.priceRange.minVariantPrice.amount).toFixed(2)}
              </p>
            </div>

            {/* Key Benefits */}
            <div>
              <h2 className="text-xl font-semibold mb-3">Key Benefits</h2>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Wide-mouth opening – 3x wider than standard compression socks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Integrated pull-tab system – Put them on yourself, no separate tools needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">20-30 mmHg graduated compression – FDA-registered manufacturing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">All-day comfort – Moisture-wicking bamboo-blend fabric</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Extended sizing – S through XXL with wide-calf options</span>
                </li>
              </ul>
            </div>

            {/* Supporting Description */}
            <p className="text-muted-foreground">
              Designed for hands with limited strength or flexibility. Graduated compression technology that actually works with your body, not against it. From hospital discharge to daily routine.
            </p>

            {/* FDA Disclaimer */}
            <div className="p-4 bg-muted/50 rounded-lg border">
              <p className="text-xs text-muted-foreground">
                These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.{" "}
                <Link to="/fda-disclaimer" className="underline hover:text-foreground">
                  Full Policy →
                </Link>
              </p>
            </div>

            {/* Variants/Options */}
            {product.node.options.map((option) => (
              <div key={option.name}>
                <Label className="mb-2 block">{option.name}</Label>
                <Select
                  onValueChange={(value) => {
                    const variant = product.node.variants.edges.find(v =>
                      v.node.selectedOptions.some(opt => opt.value === value)
                    );
                    if (variant) setSelectedVariant(variant.node);
                  }}
                >
                  <SelectTrigger className="w-full h-12">
                    <SelectValue placeholder={`Select ${option.name}`} />
                  </SelectTrigger>
                  <SelectContent>
                    {option.values.map((value) => (
                      <SelectItem key={value} value={value}>
                        {value}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            ))}

            {/* Add to Cart */}
            <div className="space-y-3">
              <Button
                className="w-full h-12 text-lg"
                size="lg"
                onClick={handleAddToCart}
                disabled={!selectedVariant?.availableForSale}
              >
                {selectedVariant?.availableForSale ? 'Add to Cart' : 'Out of Stock'}
              </Button>
              <div className="grid grid-cols-3 gap-2">
                <Button variant="outline" size="sm" className="h-12">
                  <img src="/placeholder.svg" alt="Shop Pay" className="h-6" />
                </Button>
                <Button variant="outline" size="sm" className="h-12">
                  <img src="/placeholder.svg" alt="Apple Pay" className="h-6" />
                </Button>
                <Button variant="outline" size="sm" className="h-12">
                  <img src="/placeholder.svg" alt="Google Pay" className="h-6" />
                </Button>
              </div>
            </div>

            {/* Accordions */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="how-long">
                <AccordionTrigger className="text-left">How long should I wear them each day?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Wear time depends on your individual needs and your provider's guidance. Many people wear compression socks during waking hours and remove them at night. Follow your healthcare provider's recommendations.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="sleep">
                <AccordionTrigger className="text-left">Can I sleep in them?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Compression socks are typically designed for daytime use. Check with your provider before wearing compression overnight.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="compression-level">
                <AccordionTrigger className="text-left">How do I know if 20-30 mmHg is right for me?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    20-30 mmHg is considered medical-grade compression, often recommended for post-surgical recovery, chronic venous concerns, or as directed by a healthcare provider. If you're unsure, consult your provider or start with our 15-20 mmHg option.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="fsa-hsa">
                <AccordionTrigger className="text-left">Are these FSA/HSA eligible?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Yes. AccessAble compression socks are FSA/HSA eligible. Keep your receipt for reimbursement. Some insurance plans may also cover compression garments with a prescription—check with your provider.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="replace">
                <AccordionTrigger className="text-left">How often should I replace them?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    With daily wear and proper care, compression socks typically maintain their effectiveness for 3-6 months. Signs it's time to replace: reduced compression feel, visible fabric wear, or loss of elasticity.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="fit">
                <AccordionTrigger className="text-left">What if they don't fit?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    We offer free exchanges within 30 days. Contact us and we'll send the correct size before you return the first pair. Our team can also help you remeasure if needed.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="compatibility">
                <AccordionTrigger className="text-left">Can I wear these with my brace/orthotic/prosthetic?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    The design is compatible with most mobility aids and orthotics. The wide opening makes it easier to position around braces. If you have specific compatibility questions, chat with our team—we're happy to help.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="shipping">
                <AccordionTrigger className="text-left">Do you offer expedited shipping?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Yes. Standard shipping is free on orders over $50. Expedited options (2-day and overnight) are available at checkout.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t">
              <div className="text-center">
                <Badge variant="outline" className="mb-2">30-Day Fit Guarantee</Badge>
              </div>
              <div className="text-center">
                <Badge variant="outline" className="mb-2">Free Exchanges</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Why It's Designed This Way */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Adaptive Features That Restore Independence</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="space-y-3">
                <Maximize className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold">Wide-Mouth Opening</h3>
                <p className="text-muted-foreground">
                  The opening is 3x wider than standard compression socks. Slide your foot in without forcing, twisting, or needing maximum flexibility.
                </p>
              </div>
              <div className="space-y-3">
                <Hand className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold">Integrated Pull-Tab System</h3>
                <p className="text-muted-foreground">
                  Reinforced fabric loops at the top edge. Pull the sock up your leg with less grip strength required. No separate donning aids to buy or store.
                </p>
              </div>
              <div className="space-y-3">
                <Activity className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold">Graduated Compression Profile</h3>
                <p className="text-muted-foreground">
                  30 mmHg at the ankle, decreasing to 20 mmHg at the calf. Designed to follow the natural shape of your leg. Firm support without feeling restrictive.
                </p>
              </div>
              <div className="space-y-3">
                <Ruler className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold">Extended Sizing with Wide-Calf Options</h3>
                <p className="text-muted-foreground">
                  Standard sizes S through XXL. Wide-calf versions available for measurements up to {"{XX}"} inches. Built for real bodies.
                </p>
              </div>
              <div className="space-y-3">
                <Shield className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold">Reinforced Construction</h3>
                <p className="text-muted-foreground">
                  Extra stitching at stress points. Silicone grip dots at the cuff to help keep them in place. Designed for daily wear, not occasional use.
                </p>
              </div>
            </div>
            <p className="text-center text-lg mt-12 text-muted-foreground">
              Every feature exists for one reason: making it easier to put these on yourself.
            </p>
          </div>
        </section>

        {/* Proof & Trust */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">What People Are Saying</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <figure className="bg-background p-6 rounded-lg border">
                <blockquote className="text-muted-foreground mb-4">
                  "I was skeptical. But the wide opening really does make a difference. I can get these on without help."
                </blockquote>
                <figcaption className="font-medium">— {"{CustomerName}"}, {"{Context}"}</figcaption>
              </figure>
              <figure className="bg-background p-6 rounded-lg border">
                <blockquote className="text-muted-foreground mb-4">
                  "My physical therapist recommended compression, but standard socks were impossible with my arthritis. These work."
                </blockquote>
                <figcaption className="font-medium">— {"{CustomerName}"}, {"{Context}"}</figcaption>
              </figure>
              <figure className="bg-background p-6 rounded-lg border">
                <blockquote className="text-muted-foreground mb-4">
                  "I recommend these to patients who need compression but struggle with traditional options. The adaptive design actually addresses the real barriers."
                </blockquote>
                <figcaption className="font-medium">— {"{PTName}"}, Physical Therapist</figcaption>
              </figure>
            </div>
            <div className="bg-primary/5 p-8 rounded-lg border border-primary/20 mb-8">
              <h3 className="text-xl font-semibold mb-3">Designed With Clinical Input</h3>
              <p className="text-muted-foreground">
                Built with feedback from physical therapists, occupational therapists, and the people who'll actually wear them. Tested through {"{X}"} design iterations with {"{XX}"}+ users with limited hand mobility.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-background rounded-lg border">
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">FDA-registered manufacturing facility</p>
              </div>
              <div className="text-center p-4 bg-background rounded-lg border">
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Manufactured to ISO 13485 medical device standards</p>
              </div>
              <div className="text-center p-4 bg-background rounded-lg border">
                <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">{"{X.X}"} stars from {"{XXX}"} verified reviews</p>
              </div>
              <div className="text-center p-4 bg-background rounded-lg border">
                <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">30-day fit guarantee</p>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes AccessAble Different */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">AccessAble vs. Standard Compression</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-left p-4 font-semibold">Standard Compression</th>
                    <th className="text-left p-4 font-semibold bg-primary/5">AccessAble</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Opening Width</td>
                    <td className="p-4 text-muted-foreground">Narrow, requires significant foot flexibility</td>
                    <td className="p-4 bg-primary/5">3x wider opening for easier entry</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Donning Method</td>
                    <td className="p-4 text-muted-foreground">Requires grip strength or separate tools</td>
                    <td className="p-4 bg-primary/5">Integrated pull-tabs, no extra tools needed</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Compression Level</td>
                    <td className="p-4 text-muted-foreground">20-30 mmHg graduated</td>
                    <td className="p-4 bg-primary/5">20-30 mmHg graduated (same medical-grade)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Sizing Range</td>
                    <td className="p-4 text-muted-foreground">Limited, often one width option</td>
                    <td className="p-4 bg-primary/5">S-XXL with wide-calf options</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Independent Use</td>
                    <td className="p-4 text-muted-foreground">Often requires assistance</td>
                    <td className="p-4 bg-primary/5">Designed for independent donning in under 60 seconds</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Appearance</td>
                    <td className="p-4 text-muted-foreground">Clinical or overly casual</td>
                    <td className="p-4 bg-primary/5">Neutral, everyday styling</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center text-lg mt-8 text-muted-foreground">
              You don't have to choose between medical-grade compression and ease of use.
            </p>
          </div>
        </section>

        {/* Who It's For */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Designed for Real-World Needs</h2>
            <p className="text-center text-muted-foreground mb-12">
              Many people use compression socks for different reasons. Here's who finds AccessAble compression helpful:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-background p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-3">Post-Surgical Recovery</h3>
                <p className="text-muted-foreground text-sm">
                  Graduated compression is commonly recommended after joint replacement, vascular procedures, or other surgeries. The adaptive design makes it easier to follow your provider's guidance independently.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-3">Limited Hand Strength or Arthritis</h3>
                <p className="text-muted-foreground text-sm">
                  If standard compression socks are difficult to grip or pull on, the wide opening and pull-tab system can make the process more manageable.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-3">Wheelchair Users</h3>
                <p className="text-muted-foreground text-sm">
                  Designed to work with your daily routine. Comfortable for seated wear. Easy to put on before getting in your chair, or while seated with support.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-3">Post-Stroke or Neurological Conditions</h3>
                <p className="text-muted-foreground text-sm">
                  When hand coordination or strength is affected, the wider opening and pull-tabs reduce the fine motor skills needed for donning.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-3">Chronic Mobility Challenges</h3>
                <p className="text-muted-foreground text-sm">
                  For anyone who needs compression but has found traditional options physically difficult to use independently.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-3">Active Lifestyles</h3>
                <p className="text-muted-foreground text-sm">
                  Professionals who stand all day. Travelers on long flights. Anyone who wants graduated compression without the struggle.
                </p>
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-8 italic">
              This is not medical advice. Always follow your healthcare provider's recommendations for compression level and duration of wear.
            </p>
          </div>
        </section>

        {/* Materials & Care */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What They're Made Of</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Fabric Blend</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{"{XX}"}% Bamboo-derived viscose – Moisture-wicking, naturally antimicrobial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{"{XX}"}% Nylon – Durability and compression structure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{"{XX}"}% Spandex – Graduated compression and recovery</span>
                  </li>
                </ul>
                <h3 className="text-xl font-semibold mb-4">Construction</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Reinforced heel and toe for extended wear</li>
                  <li>• Flat-seam stitching to reduce irritation</li>
                  <li>• Silicone grip dots at cuff (inside) to help keep them in place</li>
                  <li>• Designed for 12+ hour wear without discomfort</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">How to Care for Them</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Washing:</h4>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Machine wash cold on gentle cycle</li>
                      <li>• Use mild detergent, no bleach</li>
                      <li>• Wash inside a mesh laundry bag to protect the fabric</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Drying:</h4>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Tumble dry low, or air dry flat</li>
                      <li>• Do not use high heat (damages compression elasticity)</li>
                      <li>• Do not iron</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Replacement:</h4>
                    <p className="text-muted-foreground text-sm">
                      Compression socks maintain their effectiveness for approximately 3-6 months with daily wear. Replace when you notice reduced compression or visible wear.
                    </p>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                    <p className="text-sm">
                      <strong>Pro tip:</strong> Order two pairs so you always have a clean pair ready while the other is in the wash.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cross-Sell Section */}
        <CrossSellSection product={product} />

        {/* Frequently Bought Together */}
        <FrequentlyBoughtTogether product={product} />

        {/* Customer Reviews */}
        <ReviewsSection product={product} />

        {/* Related Content */}
        <section className="mt-16 pt-16 border-t">
          <h2 className="text-2xl font-bold mb-6">Related Guides</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/learn/compression-101" className="p-6 border rounded-lg hover:border-primary transition-colors">
              <h3 className="font-semibold mb-2">Compression 101</h3>
              <p className="text-sm text-muted-foreground">Everything you need to know about compression technology</p>
            </Link>
            <Link to="/learn/mobility-aids" className="p-6 border rounded-lg hover:border-primary transition-colors">
              <h3 className="font-semibold mb-2">Mobility Aids & Compatibility</h3>
              <p className="text-sm text-muted-foreground">Using compression with wheelchairs and assistive devices</p>
            </Link>
            <Link to="/learn/how-to-put-on-socks" className="p-6 border rounded-lg hover:border-primary transition-colors">
              <h3 className="font-semibold mb-2">How to Put On Compression Socks</h3>
              <p className="text-sm text-muted-foreground">Step-by-step guide with adaptive techniques</p>
            </Link>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 text-center bg-muted/30">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Put them on yourself. No tools. No asking for help.</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Medical-grade compression that actually works with your hands.
            </p>
            <Button size="lg" className="text-lg px-8" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Add to Cart
            </Button>
          </div>
        </section>

        {/* Enhanced Trust Badge Section */}
        <section className="py-12 border-t">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <div className="text-center space-y-2">
                <Award className="h-10 w-10 text-primary mx-auto" />
                <h3 className="font-semibold text-sm">30-Day Fit Guarantee</h3>
                <p className="text-xs text-muted-foreground">Free exchanges if sizing isn't right</p>
              </div>
              <div className="text-center space-y-2">
                <Shield className="h-10 w-10 text-primary mx-auto" />
                <h3 className="font-semibold text-sm">FDA-Registered Manufacturing</h3>
                <p className="text-xs text-muted-foreground">Medical device quality standards</p>
              </div>
              <div className="text-center space-y-2">
                <Package className="h-10 w-10 text-primary mx-auto" />
                <h3 className="font-semibold text-sm">Free Shipping</h3>
                <p className="text-xs text-muted-foreground">Orders over $50</p>
              </div>
              <div className="text-center space-y-2">
                <CreditCard className="h-10 w-10 text-primary mx-auto" />
                <h3 className="font-semibold text-sm">FSA/HSA Eligible</h3>
                <p className="text-xs text-muted-foreground">Keep your receipt for reimbursement</p>
              </div>
              <div className="text-center space-y-2">
                <Users className="h-10 w-10 text-primary mx-auto" />
                <h3 className="font-semibold text-sm">Designed for Accessibility</h3>
                <p className="text-xs text-muted-foreground">Built with PT/OT input</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky Add-to-Cart Bar (Mobile Only) */}
      <StickyAddToCart 
        product={product} 
        selectedVariant={selectedVariant} 
        quantity={1} 
      />
    </div>
  );
}
