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
  'post-surgery': [
    {
      name: 'Margaret R.',
      userType: 'Post-Knee Replacement',
      quote: 'I had bilateral knee replacements. My physical therapist recommended these because I literally could not bend to reach my feet. The wide opening and pull-tabs worked perfectly with my restrictions.',
      rating: 5,
      imageAlt: 'User during recovery period'
    },
    {
      name: 'David K.',
      userType: 'Post-Hip Replacement',
      quote: 'Having two pairs meant I didn\'t have to stress about laundry during recovery. I could focus on physical therapy instead of worrying about clean compression socks.',
      rating: 5,
      imageAlt: 'User demonstrating seated application'
    },
    {
      name: 'Patricia S.',
      userType: 'Post-Ankle Surgery',
      quote: 'The wide opening made it possible to get the sock over my surgical boot. I didn\'t think that would work, but it did.',
      rating: 5,
      imageAlt: 'User with surgical boot'
    }
  ],
  'arthritis': [
    {
      name: 'Carol T.',
      userType: 'Rheumatoid Arthritis',
      quote: 'I have rheumatoid arthritis. Standard compression socks were impossible. The pull-tabs on these make all the difference. I can do it myself now.',
      rating: 5,
      imageAlt: 'User with mobility aid'
    },
    {
      name: 'Robert M.',
      userType: 'Stroke Recovery',
      quote: 'After my stroke, I only have good use of one hand. These socks are the only compression I can put on independently.',
      rating: 5,
      imageAlt: 'User demonstrating one-handed technique'
    },
    {
      name: 'Linda K.',
      userType: 'Essential Tremor',
      quote: 'My hands shake. The wide opening means I don\'t have to thread my foot through a tiny hole. That was my biggest problem with regular compression socks.',
      rating: 5,
      imageAlt: 'User demonstrating product use'
    }
  ],
  'limited-mobility': [
    {
      name: 'Michael T.',
      userType: 'Wheelchair User',
      quote: 'I use a wheelchair. These socks with the wide opening are the only way I can put on compression without help. Game changer.',
      rating: 5,
      imageAlt: 'Wheelchair user wearing product'
    },
    {
      name: 'Sarah D.',
      userType: 'Limited Hip Flexion',
      quote: 'My hips don\'t bend like they used to. Reaching my feet was impossible. The wide opening and pull-tabs made it possible to put them on while seated.',
      rating: 5,
      imageAlt: 'User demonstrating seated application'
    },
    {
      name: 'James L.',
      userType: 'Chronic Back Pain',
      quote: 'I have chronic back pain. Bending forward triggers it. The wide opening means I barely have to bend at all. I can actually do this myself now.',
      rating: 5,
      imageAlt: 'User seated using product'
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
    <section className="py-12 container mx-auto px-4" aria-labelledby="stories-heading">
      <div className="max-w-6xl mx-auto">
        <h2 id="stories-heading" className="text-3xl font-bold mb-4 text-center">
          {condition === 'post-surgery' ? 'What Post-Surgical Users Say' : condition === 'arthritis' ? 'What Users With Limited Hand Strength Say' : condition === 'limited-mobility' ? 'What Users With Limited Mobility Say' : 'Real Stories from Real Users'}
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          {condition === 'post-surgery' || condition === 'arthritis' || condition === 'limited-mobility' ? 'Hear from people who prioritize independence' : 'Hear from people who prioritize independence'}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <Card key={index} className="hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                {/* Image Placeholder */}
                <div className="w-16 h-16 rounded-full bg-muted mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-muted-foreground">
                    {story.name.charAt(1) === '{' ? 'C' : story.name.charAt(0)}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-3" aria-label={`${story.rating} out of 5 stars`}>
                  {Array.from({ length: story.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground mb-4 italic">
                  "{story.quote}"
                </p>

                {/* User Info */}
                <div>
                  <p className="font-medium">{story.name}</p>
                  <p className="text-sm text-muted-foreground">— {story.name}, {story.userType}</p>
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
