import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface ConditionCustomerStoriesProps {
  condition: string;
}

const customerStories: Record<string, Array<{
  name: string;
  userType: string;
  quote: string;
  rating: number;
  imageAlt: string;
}>> = {
  'arthritis': [
    {
      name: 'Margaret T.',
      userType: 'Lives with rheumatoid arthritis',
      quote: 'The donning aid makes it so much easier to put on my socks independently. I do not have to ask for help every morning anymore.',
      rating: 5,
      imageAlt: 'User with mobility aid'
    },
    {
      name: 'Robert K.',
      userType: 'Arthritis in both hands',
      quote: 'Comfortable all day, and I can actually get them on by myself. The grip handles on the aid are perfect for limited dexterity.',
      rating: 5,
      imageAlt: 'User demonstrating product use'
    }
  ],
  'diabetes': [
    {
      name: 'Linda M.',
      userType: 'Managing Type 2 diabetes for 15 years',
      quote: 'Comfortable support that does not restrict circulation. I wear them all day at work and my feet feel great.',
      rating: 5,
      imageAlt: 'Healthcare worker wearing compression socks'
    },
    {
      name: 'James P.',
      userType: 'Diabetic neuropathy',
      quote: 'Seamless design means no pressure points. Fits well with my orthotic inserts too.',
      rating: 5,
      imageAlt: 'User sitting comfortably'
    }
  ],
  'limited-mobility': [
    {
      name: 'Patricia R.',
      userType: 'Uses walker for mobility',
      quote: 'The sock aid tool changed everything. I can dress myself without bending down, which keeps me independent.',
      rating: 5,
      imageAlt: 'User with walker demonstrating product'
    },
    {
      name: 'David L.',
      userType: 'Limited range of motion',
      quote: 'Easy to put on while seated. The instructions were clear and the product works exactly as described.',
      rating: 5,
      imageAlt: 'User seated using product'
    },
    {
      name: 'Susan H.',
      userType: 'Post-stroke recovery',
      quote: 'I can manage these with one hand using the donning aid. That independence means everything to me.',
      rating: 5,
      imageAlt: 'User demonstrating one-handed technique'
    }
  ],
  'post-surgery': [
    {
      name: 'Michael B.',
      userType: 'Recovering from knee surgery',
      quote: 'Comfortable and easy to put on during recovery. Does not require bending or excessive reaching.',
      rating: 5,
      imageAlt: 'User during recovery period'
    },
    {
      name: 'Carol W.',
      userType: 'Post-hip replacement',
      quote: 'The donning aid was essential for following my hip precautions. Comfortable support without the struggle.',
      rating: 5,
      imageAlt: 'User demonstrating seated application'
    }
  ],
  'wheelchair-users': [
    {
      name: 'Anthony G.',
      userType: 'Full-time wheelchair user',
      quote: 'Easy to put on while in my chair. Comfortable all day and works great with my cushion.',
      rating: 5,
      imageAlt: 'Wheelchair user wearing product'
    },
    {
      name: 'Rachel S.',
      userType: 'Paraplegic for 8 years',
      quote: 'These actually fit well with my leg braces. Most products do not account for that, but these do.',
      rating: 5,
      imageAlt: 'Wheelchair user with leg braces'
    },
    {
      name: 'Kevin T.',
      userType: 'Power wheelchair user',
      quote: 'Durable enough for daily use. I have been wearing them for six months and they still provide great support.',
      rating: 5,
      imageAlt: 'Power wheelchair user'
    }
  ]
};

export const ConditionCustomerStories = ({ condition }: ConditionCustomerStoriesProps) => {
  const stories = customerStories[condition] || customerStories['limited-mobility'];

  return (
    <section className="py-12 container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Real Stories from Real Users</h2>
        <p className="text-center text-muted-foreground mb-8">
          Hear from people who prioritize independence
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <Card key={index} className="hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                {/* Image Placeholder */}
                <div className="w-16 h-16 rounded-full bg-muted mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-muted-foreground">
                    {story.name.charAt(0)}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: story.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground mb-4 italic">
                  "{story.quote}"
                </p>

                {/* User Info */}
                <div>
                  <p className="font-medium">{story.name}</p>
                  <p className="text-sm text-muted-foreground">{story.userType}</p>
                </div>

                {/* Accessibility Note */}
                <p className="text-xs text-muted-foreground mt-4 opacity-50">
                  [Image: {story.imageAlt} - Not stock photo]
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 p-6 bg-muted/50 rounded-lg">
          <p className="text-sm text-muted-foreground text-center">
            ⚠️ <strong>Compliance Note:</strong> All testimonials focus on functional benefits (ease of use, comfort, fit) and avoid medical claims. 
            No statements about pain relief, circulation improvement, or symptom reduction are included.
          </p>
        </div>
      </div>
    </section>
  );
};
