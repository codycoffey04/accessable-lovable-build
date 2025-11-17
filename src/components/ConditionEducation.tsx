import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle } from "lucide-react";

type ConditionType = 'arthritis' | 'diabetes' | 'limited-mobility' | 'post-surgery' | 'wheelchair-users';

interface ConditionEducationProps {
  condition: ConditionType;
}

const conditionContent: Record<ConditionType, {
  title: string;
  headline: string;
  paragraphs: string[];
  videoTitle: string;
  expertQuote?: { name: string; role: string; quote: string };
  sources: { text: string; url: string }[];
}> = {
  'arthritis': {
    title: 'Arthritis',
    headline: 'Understanding Arthritis and Mobility',
    paragraphs: [
      'Arthritis affects millions of people worldwide, impacting joint function and daily activities. According to the CDC, over 54 million adults in the U.S. have been diagnosed with arthritis.',
      'Maintaining independence with arthritis often involves adaptive equipment and thoughtful product design. Products with easy-on features, larger grips, and minimal fine motor requirements can make daily tasks more manageable.',
      'Our products are designed for all-day comfort and built for active lifestyles, with features specifically tested by users with limited hand dexterity.'
    ],
    videoTitle: 'Living Independently with Arthritis',
    expertQuote: {
      name: 'Sarah Thompson, OT',
      role: 'Occupational Therapist',
      quote: 'Adaptive equipment should enhance independence, not remind users of limitations. Look for products that feel natural to use and integrate seamlessly into daily routines.'
    },
    sources: [
      { text: 'CDC: Arthritis Data & Statistics', url: 'https://www.cdc.gov/arthritis/data_statistics/' },
      { text: 'Mayo Clinic: Arthritis', url: 'https://www.mayoclinic.org/diseases-conditions/arthritis/symptoms-causes/' }
    ]
  },
  'diabetes': {
    title: 'Diabetes',
    headline: 'Understanding Diabetes and Foot Health',
    paragraphs: [
      'Diabetes affects circulation and nerve function in the feet, making proper foot care essential. The American Diabetes Association emphasizes the importance of daily foot inspections and appropriate footwear.',
      'Comfortable, well-fitting products that don\'t restrict circulation are key for people managing diabetes. Avoid products with tight bands or seams that could cause pressure points.',
      'Our designs prioritize all-day comfort with seamless construction and graduated support, suitable for those focused on foot health and circulation.'
    ],
    videoTitle: 'Daily Foot Care for Diabetes Management',
    expertQuote: {
      name: 'Dr. Michael Chen, PT, DPT',
      role: 'Physical Therapist',
      quote: 'Consistent foot care routines and proper equipment selection can significantly impact quality of life for people managing diabetes.'
    },
    sources: [
      { text: 'American Diabetes Association: Foot Complications', url: 'https://diabetes.org/diabetes/foot-complications' },
      { text: 'National Institute of Diabetes: Foot Problems', url: 'https://www.niddk.nih.gov/health-information/diabetes/foot-problems' }
    ]
  },
  'limited-mobility': {
    title: 'Limited Mobility',
    headline: 'Adaptive Solutions for Independent Living',
    paragraphs: [
      'Limited mobility doesn\'t mean limited independence. With the right adaptive equipment and design considerations, many daily tasks can remain manageable and dignified.',
      'Products designed for limited mobility should minimize bending, reaching, and fine motor requirements. Look for features like long handles, easy-grip surfaces, and step-by-step guidance.',
      'Our independence-focused designs are tested by users with various mobility challenges to ensure they work in real-world scenarios, not just in theory.'
    ],
    videoTitle: 'Adaptive Living: Tools for Independence',
    sources: [
      { text: 'National Institute on Aging: Assistive Devices', url: 'https://www.nia.nih.gov/health/assistive-devices-and-technology' },
      { text: 'CDC: Disability & Health', url: 'https://www.cdc.gov/ncbddd/disabilityandhealth/' }
    ]
  },
  'post-surgery': {
    title: 'Post-Surgery Recovery',
    headline: 'Supporting Comfortable Recovery',
    paragraphs: [
      'Post-surgical recovery requires attention to comfort, proper support, and gradual return to activity. Medical guidelines emphasize the importance of following healthcare provider recommendations.',
      'During recovery, products that are easy to put on and remove, provide consistent support, and don\'t require complex adjustments are most helpful. Avoid anything that causes discomfort or requires excessive effort.',
      'Our comfortable recovery support products are designed with ease of use in mind, helping you focus on healing rather than struggling with equipment.'
    ],
    videoTitle: 'Post-Surgery Comfort and Recovery',
    sources: [
      { text: 'Mayo Clinic: Surgical Recovery', url: 'https://www.mayoclinic.org/tests-procedures' },
      { text: 'Johns Hopkins: Recovery After Surgery', url: 'https://www.hopkinsmedicine.org/health/treatment-tests-and-therapies/recovery-after-surgery' }
    ]
  },
  'wheelchair-users': {
    title: 'Wheelchair Users',
    headline: 'Mobility-Focused Design for Wheelchair Users',
    paragraphs: [
      'Wheelchair users have unique needs when it comes to compression and mobility products. Prolonged sitting, pressure points, and circulation considerations all factor into product selection.',
      'Products for wheelchair users should be easy to put on while seated, provide consistent support without restricting movement, and work well with existing mobility equipment.',
      'Our designs are tested by wheelchair users to ensure compatibility with various chair types, cushions, and daily routines. Built for active lifestyles and all-day comfort.'
    ],
    videoTitle: 'Adaptive Solutions for Wheelchair Users',
    sources: [
      { text: 'Christopher & Dana Reeve Foundation: Daily Living', url: 'https://www.christopherreeve.org/living-with-paralysis/daily-living' },
      { text: 'United Spinal Association: Resources', url: 'https://unitedspinal.org/disability-resources/' }
    ]
  }
};

export const ConditionEducation = ({ condition }: ConditionEducationProps) => {
  const content = conditionContent[condition];

  return (
    <section className="py-12 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* FDA Disclaimer - Above content for condition-specific pages */}
          <Card className="mb-8 border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-900">
            <CardContent className="p-6">
              <div className="flex gap-3">
                <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-amber-900 dark:text-amber-100 mb-2">
                    Important Medical Disclaimer
                  </p>
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    This information is educational only and not medical advice. Our products are designed for comfort and ease of use, not to diagnose, treat, cure, or prevent any medical condition. Always consult your healthcare provider before starting any new health regimen or if you have specific medical concerns.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold mb-6">{content.headline}</h2>
          
          {/* Educational Content */}
          <div className="space-y-6 text-lg text-muted-foreground">
            {content.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Video Placeholder */}
          <div className="my-8">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center p-8">
                <p className="font-medium mb-2">[Video: {content.videoTitle}]</p>
                <p className="text-sm text-muted-foreground">
                  ⚠️ Accessibility Requirements: Captions (WebVTT), Full Transcript (PDF), Audio Description
                </p>
              </div>
            </div>
          </div>

          {/* Expert Quote */}
          {content.expertQuote && (
            <Card className="my-8 border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <p className="text-lg italic mb-4">"{content.expertQuote.quote}"</p>
                <p className="text-sm font-medium">
                  — {content.expertQuote.name}, {content.expertQuote.role}
                </p>
              </CardContent>
            </Card>
          )}

          {/* Sources */}
          <div className="mt-8 pt-6 border-t">
            <p className="text-sm font-medium mb-3">Educational Sources:</p>
            <ul className="space-y-2">
              {content.sources.map((source, index) => (
                <li key={index}>
                  <a 
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    {source.text} →
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
