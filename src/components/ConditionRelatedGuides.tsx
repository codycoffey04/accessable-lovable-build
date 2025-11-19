import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

interface ConditionRelatedGuidesProps {
  condition: string;
}

const relatedArticles: Record<string, Array<{ title: string; slug: string; excerpt: string; readTime: string }>> = {
  'arthritis': [
    {
      title: 'Adaptive Dressing With Arthritis',
      slug: 'adaptive-dressing-arthritis',
      excerpt: 'Techniques for putting on socks, shoes, and other clothing when your hands have limited strength.',
      readTime: '6 min'
    },
    {
      title: 'One-Handed Donning Techniques',
      slug: 'one-handed-donning',
      excerpt: 'Strategies for putting on compression socks when one hand is weaker or non-functional.',
      readTime: '5 min'
    },
    {
      title: 'Morning Stiffness and Compression',
      slug: 'morning-stiffness-compression',
      excerpt: 'Timing strategies for putting on compression socks when your hands are stiffest in the morning.',
      readTime: '4 min'
    }
  ],
  'diabetes': [
    {
      title: 'Compression 101: What You Need to Know',
      slug: 'compression-101',
      excerpt: 'Understanding graduated compression and circulation support',
      readTime: '5 min'
    },
    {
      title: 'Travel Tips for Circulation Health',
      slug: 'travel-tips',
      excerpt: 'Maintaining foot health and comfort during long journeys',
      readTime: '6 min'
    },
    {
      title: 'How to Put On Compression Socks',
      slug: 'how-to-put-on-socks',
      excerpt: 'Gentle techniques for putting on socks with foot sensitivity',
      readTime: '4 min'
    }
  ],
  'limited-mobility': [
    {
      title: 'Seated Donning Techniques',
      slug: 'seated-donning-techniques',
      excerpt: 'Step-by-step strategies for putting on compression socks entirely from a seated position.',
      readTime: '5 min'
    },
    {
      title: 'Compression for Wheelchair Users',
      slug: 'compression-wheelchair-users',
      excerpt: 'Specific guidance for putting on and wearing compression socks when you use a wheelchair.',
      readTime: '6 min'
    },
    {
      title: 'Adapting Compression to Limited Reach',
      slug: 'adapting-compression-limited-reach',
      excerpt: 'Creative positioning and tool use for people who cannot reach their feet.',
      readTime: '5 min'
    }
  ],
  'post-surgery': [
    {
      title: 'Compression After Surgery – What to Expect',
      slug: 'compression-after-surgery',
      excerpt: 'Common questions about post-surgical compression use, duration, and daily management.',
      readTime: '6 min'
    },
    {
      title: 'How to Use a Sock Donning Aid',
      slug: 'how-to-use-donning-aid',
      excerpt: 'Step-by-step instructions with video demonstration for seated donning.',
      readTime: '4 min'
    },
    {
      title: 'Hip Precautions and Compression Socks',
      slug: 'hip-precautions-compression',
      excerpt: 'Specific strategies for donning socks while respecting 90-degree hip restrictions.',
      readTime: '5 min'
    }
  ],
  'wheelchair-users': [
    {
      title: 'Mobility Aids & Sock Compatibility',
      slug: 'mobility-aids',
      excerpt: 'Wheelchair-specific guidance for compression products',
      readTime: '7 min'
    },
    {
      title: 'How to Put On Compression Socks',
      slug: 'how-to-put-on-socks',
      excerpt: 'Seated application techniques and donning aids',
      readTime: '4 min'
    },
    {
      title: 'Compression 101: What You Need to Know',
      slug: 'compression-101',
      excerpt: 'Understanding compression for prolonged sitting',
      readTime: '5 min'
    }
  ]
};

export const ConditionRelatedGuides = ({ condition }: ConditionRelatedGuidesProps) => {
  const articles = relatedArticles[condition] || relatedArticles['limited-mobility'];

  return (
    <section className="py-12 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">You Might Find These Helpful</h2>
          <p className="text-center text-muted-foreground mb-8">
            Expert guides for independent living
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Card key={article.slug} className="overflow-hidden group hover:border-primary/50 transition-colors">
                <div className="aspect-video bg-muted">
                  {/* Article thumbnail placeholder */}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{article.readTime}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {article.excerpt}
                  </p>
                  <Link to={`/learn/${article.slug}`}>
                    <Button variant="link" className="p-0 h-auto">
                      Read Article →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground mb-4">
              ⚠️ All linked articles include above-the-fold FDA disclaimers for condition-specific content
            </p>
            <Link to="/learn">
              <Button variant="outline">Browse All Guides</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
