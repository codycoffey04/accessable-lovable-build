import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Clock } from "lucide-react";
import { Schema } from "@/components/Schema";
import { generateBreadcrumbSchema } from "@/lib/schema";

const articles = [
  {
    title: "Compression 101: What You Need to Know",
    slug: "compression-101",
    category: "Compression Basics",
    excerpt: "[Article excerpt placeholder describing compression technology and benefits]",
    readTime: "5 min",
    featured: true
  },
  {
    title: "Mobility Aids & Sock Compatibility",
    slug: "mobility-aids",
    category: "Mobility & Independence",
    excerpt: "[Article excerpt about compatibility with wheelchairs, walkers, and other mobility aids]",
    readTime: "7 min"
  },
  {
    title: "Travel Tips for Circulation Health",
    slug: "travel-tips",
    category: "Lifestyle & Travel",
    excerpt: "[Article excerpt about maintaining circulation health during travel]",
    readTime: "6 min"
  },
  {
    title: "Understanding Arthritis and Mobility",
    slug: "arthritis-mobility",
    category: "Condition-Specific",
    excerpt: "[Educational content about arthritis and adaptive solutions]",
    readTime: "8 min"
  },
  {
    title: "How to Put On Compression Socks",
    slug: "how-to-put-on-socks",
    category: "How-To Videos",
    excerpt: "[Step-by-step video guide with captions and transcripts]",
    readTime: "4 min"
  },
  {
    title: "Living Independently with Diabetes",
    slug: "diabetes-independence",
    category: "Condition-Specific",
    excerpt: "[Educational content about diabetes management and foot health]",
    readTime: "7 min"
  }
];

export default function Learn() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: window.location.origin },
    { name: 'Learn Hub', url: window.location.href }
  ]);

  return (
    <div className="min-h-screen">
      <Schema schema={breadcrumbSchema} />
      {/* Breadcrumbs */}
      <nav className="container mx-auto px-4 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li>/</li>
          <li aria-current="page" className="text-muted-foreground">Learn Hub</li>
        </ol>
      </nav>

      <main id="main-content" className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Expert Guides for Independent Living</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Evidence-based advice for mobility, compression, and everyday comfort.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search articles..."
              className="pl-10 h-12"
              aria-label="Search articles"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <Button variant="default">All Articles</Button>
          <Button variant="outline">Mobility & Independence</Button>
          <Button variant="outline">Compression Basics</Button>
          <Button variant="outline">Condition-Specific</Button>
          <Button variant="outline">How-To Videos</Button>
          <Button variant="outline">Lifestyle & Travel</Button>
        </div>

        {/* Featured Article */}
        <Card className="mb-12 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="aspect-video md:aspect-auto bg-muted"></div>
            <CardContent className="p-8 flex flex-col justify-center">
              <Badge className="w-fit mb-3">Featured</Badge>
              <h2 className="text-3xl font-bold mb-4">{articles[0].title}</h2>
              <p className="text-muted-foreground mb-4">{articles[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {articles[0].readTime} read
                </span>
                <span>{articles[0].category}</span>
              </div>
              <Button asChild>
                <Link to={`/learn/${articles[0].slug}`}>Read Article</Link>
              </Button>
            </CardContent>
          </div>
        </Card>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {articles.slice(1).map((article) => (
            <Card key={article.slug} className="overflow-hidden">
              <div className="aspect-video bg-muted"></div>
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-3">{article.category}</Badge>
                <h3 className="text-xl font-semibold mb-2">
                  <Link to={`/learn/${article.slug}`} className="hover:text-primary transition-colors">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {article.readTime} read
                  </span>
                  <Button variant="link" className="p-0" asChild>
                    <Link to={`/learn/${article.slug}`}>Read Article →</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="bg-muted/40">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Get Mobility Tips in Your Inbox</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Subscribe to receive expert guides, product updates, and practical tips for independent living.
            </p>
            <form className="max-w-md mx-auto space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-12"
                required
                aria-label="Email address"
              />
              <div className="space-y-2 text-left">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Mobility Tips</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Compression Guides</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Product Updates</span>
                </label>
              </div>
              <Button type="submit" className="w-full h-12">
                Subscribe
              </Button>
              <p className="text-xs text-muted-foreground">
                We respect your inbox. <Link to="/policies/privacy" className="underline">Privacy Policy</Link>. Unsubscribe anytime.
              </p>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
