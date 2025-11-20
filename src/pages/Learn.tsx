import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Clock } from "lucide-react";
import { Schema } from "@/components/Schema";
import { generateBreadcrumbSchema, generateBlogSchema } from "@/lib/schema";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";

const articles = [
  {
    title: "Compression 101: What You Need to Know",
    slug: "compression-101",
    category: "Compression Basics",
    excerpt: "Graduated compression, mmHg ratings, sizing basics—everything you need to understand compression socks before you buy or use them. No medical degree required.",
    readTime: "5 min",
    featured: true,
    featuredImage: "/images/learn-compression-101.jpg"
  },
  {
    title: "Mobility Aids & Sock Compatibility",
    slug: "mobility-aids",
    category: "Mobility & Independence",
    excerpt: "Practical guidance for using compression socks with wheelchairs, walkers, and canes. Learn how Donning Socks make independent application easier.",
    readTime: "7 min",
    featuredImage: "/images/learn-mobility-independence.jpg"
  },
  {
    title: "Travel Tips for Compression Users",
    slug: "travel-tips",
    category: "Lifestyle & Travel",
    excerpt: "Making compression work with your daily life—whether you're traveling, working on your feet all day, or managing compression alongside an active routine.",
    readTime: "6 min",
    featuredImage: "/images/learn-travel-tips.jpg"
  },
];

// Map query parameter values to actual category names
const categoryMap: Record<string, string> = {
  'mobility': 'Mobility & Independence',
  'compression': 'Compression Basics',
  'condition-specific': 'Condition-Specific',
  'videos': 'How-To Videos',
  'lifestyle': 'Lifestyle & Travel'
};

export default function Learn() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const articlesPerPage = 9; // 3 columns × 3 rows
  
  // Read category from URL query parameter on mount and when it changes
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && categoryMap[categoryParam]) {
      setSelectedCategory(categoryMap[categoryParam]);
      setCurrentPage(1); // Reset to first page when category changes
      // Scroll to article grid after filter is applied
      setTimeout(() => {
        const articleGrid = document.getElementById('article-grid');
        if (articleGrid) {
          articleGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      setSelectedCategory(null);
    }
  }, [searchParams.toString()]);
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: window.location.origin },
    { name: 'Learn Hub', url: window.location.href }
  ]);

  // Filter articles by category (exclude featured article)
  const nonFeaturedArticles = articles.filter(a => !a.featured);
  const filteredArticles = selectedCategory 
    ? nonFeaturedArticles.filter(a => a.category === selectedCategory)
    : nonFeaturedArticles;
  
  const totalArticles = filteredArticles.length;
  const totalPages = Math.ceil(totalArticles / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const paginatedArticles = filteredArticles.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of article grid
    const articleGrid = document.getElementById('article-grid');
    if (articleGrid) {
      articleGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCategoryFilter = (category: string | null) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when filter changes
    
    // Update URL query parameter
    if (category) {
      // Find the query param key for this category
      const queryKey = Object.keys(categoryMap).find(key => categoryMap[key] === category);
      if (queryKey) {
        setSearchParams({ category: queryKey }, { replace: true });
      } else {
        setSearchParams({}, { replace: true });
      }
    } else {
      setSearchParams({}, { replace: true });
    }
    
    // Scroll to article grid
    setTimeout(() => {
      const articleGrid = document.getElementById('article-grid');
      if (articleGrid) {
        articleGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const blogSchema = generateBlogSchema();

  return (
    <div className="min-h-screen">
      <Schema schema={breadcrumbSchema} />
      <Schema schema={blogSchema} />
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
          
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-base text-muted-foreground mb-4">
              Whether you're new to compression socks, managing limited hand strength, or helping someone navigate mobility challenges, these guides are written for you.
            </p>
            <p className="text-base text-muted-foreground">
              We focus on practical solutions for real situations: putting on compression socks when your hands don't cooperate, choosing the right compression level, making daily dressing easier. No medical jargon. No assumptions about what you already know. Just clear guidance based on lived experience and input from physical and occupational therapists.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search guides by topic, condition, or question..."
              className="pl-10 h-12"
              aria-label="Search guides by topic, condition, or question"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="text-center mb-4">
          <p className="text-sm text-muted-foreground">
            Browse all content or filter by category to find what you need.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          <Button 
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => handleCategoryFilter(null)}
          >
            All Articles
          </Button>
          <Button 
            variant={selectedCategory === "Mobility & Independence" ? "default" : "outline"}
            onClick={() => handleCategoryFilter("Mobility & Independence")}
          >
            Mobility & Independence
          </Button>
          <Button 
            variant={selectedCategory === "Compression Basics" ? "default" : "outline"}
            onClick={() => handleCategoryFilter("Compression Basics")}
          >
            Compression Basics
          </Button>
          <Button 
            variant={selectedCategory === "Condition-Specific" ? "default" : "outline"}
            onClick={() => handleCategoryFilter("Condition-Specific")}
          >
            Condition-Specific
          </Button>
          <Button 
            variant={selectedCategory === "How-To Videos" ? "default" : "outline"}
            onClick={() => handleCategoryFilter("How-To Videos")}
          >
            How-To Videos
          </Button>
          <Button 
            variant={selectedCategory === "Lifestyle & Travel" ? "default" : "outline"}
            onClick={() => handleCategoryFilter("Lifestyle & Travel")}
          >
            Lifestyle & Travel
          </Button>
        </div>

        {/* Where Should I Start? Section */}
        <Card className="mb-12 bg-muted/40 border-none">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Not Sure Where to Begin?</h2>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              <div>
                <h3 className="font-semibold text-lg mb-2">If you're new to compression socks:</h3>
                <p className="text-muted-foreground">
                  Start with <Link to="/learn/compression-101" className="text-primary underline">"Compression 101: What You Need to Know"</Link> to understand compression levels and sizing basics.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">If you've used compression before but struggled to put them on:</h3>
                <p className="text-muted-foreground">
                  Check out <Link to="/learn/mobility-aids" className="text-primary underline">"Mobility Aids & Sock Compatibility"</Link> for methods that reduce strain and frustration.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">If you have limited hand strength or arthritis:</h3>
                <p className="text-muted-foreground">
                  Visit our "Mobility & Independence" section for guides written specifically for hands that hurt, including donning strategies and product features that help.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">If you're a caregiver:</h3>
                <p className="text-muted-foreground">
                  Our "Supporting Independence" guide explains how to help without taking over, and what adaptive features to look for in compression products.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">If you're a clinician looking for patient resources:</h3>
                <p className="text-muted-foreground">
                  Browse our condition-specific pages and how-to videos. All content uses plain language and focuses on practical application, making them easy to share with patients.
                </p>
              </div>
              
              <div className="pt-4 border-t">
                <p className="text-muted-foreground italic">
                  <strong>Still not sure?</strong> Use the search bar above or browse by category. Every guide is written to be read on its own—no prerequisites.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Content Category Tiles */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Explore by Category</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Category 1: Mobility & Independence */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Mobility & Independence</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Practical guidance for putting on socks, using adaptive tools, and maintaining dressing independence when you have limited hand strength, reduced flexibility, or balance concerns.
                </p>
                <div className="space-y-1 mb-4 text-sm text-muted-foreground">
                  <p>• Adaptive dressing techniques</p>
                  <p>• Working with limited grip strength</p>
                  <p>• Seated donning methods</p>
                  <p>• Choosing mobility-friendly compression</p>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/learn?category=mobility">Explore Mobility Guides</Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* Category 2: Compression Basics */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Compression Basics</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Understand compression levels (15-20 vs. 20-30 mmHg), how graduated compression works, sizing fundamentals, and when compression is typically recommended by healthcare providers.
                </p>
                <div className="space-y-1 mb-4 text-sm text-muted-foreground">
                  <p>• What mmHg ratings mean</p>
                  <p>• How to measure your legs</p>
                  <p>• Compression level differences</p>
                  <p>• When to wear compression socks</p>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/learn?category=compression">Learn Compression Basics</Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* Category 3: Condition-Specific Guides */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Condition-Specific Guides</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Educational resources for people managing arthritis, post-surgical recovery, stroke recovery, limited mobility, and other conditions where compression and adaptive tools may be helpful.
                </p>
                <div className="space-y-1 mb-4 text-sm text-muted-foreground">
                  <p>• Compression after joint replacement</p>
                  <p>• Arthritis and compression socks</p>
                  <p>• Post-stroke dressing strategies</p>
                  <p>• Wheelchair-friendly compression</p>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/learn?category=condition-specific">View Condition Guides</Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* Category 4: How-To Videos */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">How-To Videos</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Step-by-step visual demonstrations with captions and transcripts. Watch real techniques for measuring, donning, and caring for compression socks—especially helpful for visual learners.
                </p>
                <div className="space-y-1 mb-4 text-sm text-muted-foreground">
                  <p>• How to measure for compression socks (video)</p>
                  <p>• Putting on compression with limited hand strength (video)</p>
                  <p>• Using a sock donning aid (video)</p>
                  <p>• Washing and caring for compression socks (video)</p>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/learn?category=videos">Watch How-To Videos</Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* Category 5: Lifestyle & Travel */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Lifestyle & Travel</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Making compression work with your daily life—whether you're traveling, working on your feet all day, or managing compression alongside an active routine.
                </p>
                <div className="space-y-1 mb-4 text-sm text-muted-foreground">
                  <p>• Travel tips for compression users</p>
                  <p>• Compression for professionals (nurses, service workers)</p>
                  <p>• Managing compression with exercise</p>
                  <p>• Discrete everyday styling</p>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/learn?category=lifestyle">Explore Lifestyle Tips</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Featured Article */}
        <Card className="mb-12 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <img 
              src={articles[0].featuredImage || "/images/learn-default.jpg"} 
              alt={articles[0].title}
              className="aspect-video md:aspect-auto object-cover w-full h-full"
            />
            <CardContent className="p-8 flex flex-col justify-center">
              <Badge className="w-fit mb-3">Featured Guide</Badge>
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
                <Link to={`/learn/${articles[0].slug}`}>Read the Guide</Link>
              </Button>
            </CardContent>
          </div>
        </Card>

        {/* Featured Guides Row */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Start With These Popular Guides</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Guide 1 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="/images/learn-compression-101.jpg" 
                alt="Compression 101 Guide"
                className="aspect-video object-cover w-full"
              />
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-3">Compression Basics</Badge>
                <h3 className="text-lg font-bold mb-2">
                  <Link to="/learn/compression-101" className="hover:text-primary transition-colors">
                    Compression 101 – What You Need to Know
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Graduated compression explained in plain language. Learn what 20-30 mmHg means, why compression levels matter, and how to know if you're using the right level.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    5 min read
                  </span>
                  <Button variant="link" className="p-0 h-auto text-sm" asChild>
                    <Link to="/learn/compression-101">Read Guide →</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Guide 2 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="/images/learn-mobility-independence.jpg" 
                alt="How to Put On Compression Socks With Limited Hand Strength"
                className="aspect-video object-cover w-full"
              />
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-3">Mobility & Independence</Badge>
                <h3 className="text-lg font-bold mb-2">
                  <Link to="/learn/mobility-aids" className="hover:text-primary transition-colors">
                    Mobility Aids & Sock Compatibility
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Practical guidance for using compression socks with wheelchairs, walkers, and canes. Learn how Donning Socks make independent application easier.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    7 min read
                  </span>
                  <Button variant="link" className="p-0 h-auto text-sm" asChild>
                    <Link to="/learn/mobility-aids">Read Guide →</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Guide 3 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="/images/learn-travel-tips.jpg" 
                alt="Travel Tips for Compression Users"
                className="aspect-video object-cover w-full"
              />
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-3">Lifestyle & Travel</Badge>
                <h3 className="text-lg font-bold mb-2">
                  <Link to="/learn/travel-tips" className="hover:text-primary transition-colors">
                    Travel Tips for Compression Users
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Making compression work with your daily life—whether you're traveling, working on your feet all day, or managing compression alongside an active routine.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    6 min read
                  </span>
                  <Button variant="link" className="p-0 h-auto text-sm" asChild>
                    <Link to="/learn/travel-tips">Read Guide →</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Article Grid Preview Section */}
        <div id="article-grid" className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Recent Guides & Articles</h2>
            <p className="text-muted-foreground">
              Browse all content or filter by category using the tabs above.
            </p>
          </div>
          
          {/* Screen reader announcement for page changes */}
          <div aria-live="polite" aria-atomic="true" className="sr-only">
            {currentPage > 1 && `Page ${currentPage} loaded. Showing articles ${startIndex + 1} to ${Math.min(endIndex, totalArticles)} of ${totalArticles}.`}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {paginatedArticles.map((article) => (
              <Card key={article.slug} className="overflow-hidden">
                <img 
                  src={article.featuredImage || "/images/learn-default.jpg"} 
                  alt={article.title}
                  className="aspect-video object-cover w-full"
                />
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

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination className="mt-8">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) handlePageChange(currentPage - 1);
                    }}
                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                  />
                </PaginationItem>
                
                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  // Show first page, last page, current page, and pages around current
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <PaginationItem key={page}>
                        <PaginationLink
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(page);
                          }}
                          isActive={currentPage === page}
                          aria-label={`Go to page ${page}`}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  } else if (
                    page === currentPage - 2 ||
                    page === currentPage + 2
                  ) {
                    return (
                      <PaginationItem key={page}>
                        <PaginationEllipsis />
                      </PaginationItem>
                    );
                  }
                  return null;
                })}
                
                <PaginationItem>
                  <PaginationNext 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages) handlePageChange(currentPage + 1);
                    }}
                    className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>

        {/* Accessibility & Trust Note */}
        <Card className="mb-12 border-2">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Written for Real People, Not Medical Textbooks</h2>
            <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
              Every guide in the Learn Hub is written in plain language and tested for readability. We focus on practical application, not clinical theory.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-6">
              <div>
                <h3 className="font-semibold mb-3">Our content is informed by:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Lived experience with mobility challenges</li>
                  <li>• Input from physical and occupational therapists</li>
                  <li>• Feedback from people who've actually struggled with compression and adaptive dressing</li>
                  <li>• Authoritative medical sources (linked when relevant)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">What we don't do:</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  We don't make medical claims. We don't promise outcomes. We don't tell you what your healthcare provider should prescribe. We provide education and context so you can make informed decisions and follow your provider's guidance more confidently.
                </p>
              </div>
            </div>
            
            <div className="bg-muted/40 p-6 rounded-lg max-w-4xl mx-auto">
              <h3 className="font-semibold mb-3">Accessibility commitment:</h3>
              <p className="text-sm text-muted-foreground">
                All videos include captions and transcripts. All images include descriptive alt text. Content structure is designed for screen readers and keyboard navigation. If you encounter accessibility barriers, please <Link to="/contact" className="text-primary underline">contact us</Link>.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Newsletter Signup */}
        <Card className="bg-muted/40 mb-12">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Get Mobility Tips in Your Inbox</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              New guides, practical tips, and adaptive living strategies delivered monthly. Unsubscribe anytime.
            </p>
            <form className="max-w-md mx-auto space-y-4">
              <Input
                type="email"
                placeholder="Email Address (required)"
                className="h-12"
                required
                aria-label="Email Address"
              />
              <div className="space-y-2 text-left">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Mobility Tips – Adaptive techniques and independence strategies</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Compression Guides – Sizing, care, and compression education</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Product Updates – New products and features from AccessAble</span>
                </label>
              </div>
              <Button type="submit" className="w-full h-12">
                Subscribe
              </Button>
              <p className="text-xs text-muted-foreground">
                We respect your inbox. Read our <Link to="/policies/privacy" className="underline">Privacy Policy</Link> or unsubscribe anytime.
              </p>
            </form>
          </CardContent>
        </Card>

        {/* Final CTA Section */}
        <Card className="mb-12 bg-primary text-primary-foreground">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Learn First. Choose What Fits.</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
              You don't need to buy anything to use these guides. They're here whether you're researching options, following a provider's recommendation, or helping someone else navigate compression and mobility tools.
            </p>
            <p className="mb-8 max-w-2xl mx-auto opacity-90">
              Explore the guides that match your situation. When you're ready, our products are designed around the same principles: independence, dignity, and real-world usability.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/learn">Browse All Guides</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/collections/all">Shop Adaptive Compression</Link>
              </Button>
              <Button size="lg" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/contact">Talk to Our Team</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Trust Badges / Footer Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 py-8 border-t">
          <div className="text-center">
            <div className="font-semibold mb-2">Evidence-Based Content</div>
            <p className="text-xs text-muted-foreground">Informed by PT/OT input and lived experience</p>
          </div>
          
          <div className="text-center">
            <div className="font-semibold mb-2">Plain Language</div>
            <p className="text-xs text-muted-foreground">No medical jargon, ADA-conscious writing</p>
          </div>
          
          <div className="text-center">
            <div className="font-semibold mb-2">Fully Accessible</div>
            <p className="text-xs text-muted-foreground">Videos with captions, keyboard-navigable, screen-reader tested</p>
          </div>
          
          <div className="text-center">
            <div className="font-semibold mb-2">Always Free</div>
            <p className="text-xs text-muted-foreground">No paywall, no registration required to read</p>
          </div>
          
          <div className="text-center">
            <div className="font-semibold mb-2">Regularly Updated</div>
            <p className="text-xs text-muted-foreground">Content reviewed and refreshed as standards evolve</p>
          </div>
        </div>
      </main>
    </div>
  );
}
