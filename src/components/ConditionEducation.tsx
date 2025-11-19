/**
 * VIDEO ACCESSIBILITY: All videos MUST have captions (WebVTT), transcript (PDF), and audio description
 * COMPLIANCE: NO medical claims - use safe language only
 */

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type ConditionType = 'arthritis' | 'diabetes' | 'limited-mobility' | 'post-surgery' | 'wheelchair-users';

interface ConditionEducationProps {
  condition: ConditionType;
}

interface ConditionContent {
  title: string;
  headline: string;
  subheadline: string;
  educationalContent: {
    paragraphs: string[];
    videoTitle: string;
    videoLink?: string;
    sourceCitation?: { text: string; url: string };
  };
  challenges: Array<{
    title: string;
    description: string;
  }>;
  howItHelps: {
    whyCompression: string;
    whatAdaptiveFeatures: string;
    features: Array<{
      feature: string;
      description: string;
    }>;
    disclaimer: string;
  };
  practicalTips: Array<{
    title: string;
    description: string;
  }>;
  caregiverNotes?: Array<{
    title: string;
    description: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

const conditionContent: Record<ConditionType, ConditionContent> = {
  'post-surgery': {
    title: 'Post-Surgical Recovery',
    headline: 'Understanding Post-Surgical Compression and Mobility',
    subheadline: 'Designed for comfort and independence when bending and reaching are restricted.',
    educationalContent: {
      paragraphs: [
        'After joint replacement, vascular procedures, or other surgeries, many healthcare providers recommend graduated compression socks as part of recovery. The challenge: your provider says to wear them daily, but your surgical restrictions make putting them on nearly impossible.',
        'Post-surgical movement restrictions are common. You may not be cleared to bend past 90 degrees. Your hands might not have full strength yet. Balance might be uncertain. These limitations make traditional compression sock donning difficult or impossible without help.',
        'The daily-life challenge:',
        'Your doctor recommends compression. Your body says you can\'t bend to reach your feet. Standard compression socks require grip strength and flexibility you don\'t have during recovery. Asking for help every morning feels like losing independence.',
        'How adaptive design helps:',
        'Wide-mouth compression socks reduce the flexibility needed to get your foot in. Ergonomic donning aids bring the sock closer to you, reducing how far you need to bend. Pull-tab systems require less grip strength. These features can help you follow your provider\'s compression guidance while respecting your surgical restrictions.'
      ],
      videoTitle: 'Putting On Compression Socks After Surgery',
      videoLink: '#',
      sourceCitation: {
        text: 'For more information on post-surgical compression recommendations, visit the American College of Surgeons patient education resources.',
        url: 'https://www.facs.org/'
      }
    },
    challenges: [
      {
        title: 'Bending Restrictions',
        description: 'Hip precautions (common after hip replacement) often limit bending to 90 degrees. Reaching your feet becomes impossible. Traditional sock donning requires bending you\'re not cleared to do.'
      },
      {
        title: 'Limited Grip Strength',
        description: 'Surgery affects your whole body. Even if the surgery wasn\'t on your hands, you may have reduced grip strength during recovery. Tight compression fabric is hard to hold and manipulate.'
      },
      {
        title: 'Reduced Flexibility',
        description: 'Knee replacement, spinal surgery, or abdominal procedures can limit your range of motion. Getting a sock over your heel requires ankle flexibility you may not have immediately after surgery.'
      },
      {
        title: 'Balance Concerns',
        description: 'Standing on one leg to put on a sock requires balance. Post-surgical pain, medication, or surgical site restrictions can make balance uncertain. Risk of falling is real.'
      },
      {
        title: 'Fatigue',
        description: 'Recovery takes energy. Simple tasks feel exhausting. Wrestling with compression socks early in recovery can drain energy you need for physical therapy and healing.'
      },
      {
        title: 'Independence vs. Safety',
        description: 'You want to do things yourself. But your provider\'s restrictions are there for a reason. You need methods that respect both independence and safety.'
      }
    ],
    howItHelps: {
      whyCompression: 'Many healthcare providers recommend graduated compression socks after joint replacement, vascular procedures, or surgeries that require extended periods of limited mobility. Compression is commonly part of post-surgical protocols. Your provider will specify compression level (often 15-20 or 20-30 mmHg) and duration of wear.',
      whatAdaptiveFeatures: 'Adaptive compression socks and donning aids are designed to make following your provider\'s compression guidance physically possible when you have movement restrictions.',
      features: [
        {
          feature: 'Wide-mouth opening',
          description: 'Reduces ankle flexibility needed to get your foot in'
        },
        {
          feature: 'Integrated pull-tabs',
          description: 'Gives you something to grip and pull that requires less fine motor control'
        },
        {
          feature: 'Donning aid with long handle',
          description: 'Brings the sock closer to you, reducing how far you need to bend'
        },
        {
          feature: 'Non-slip surfaces',
          description: 'Keeps sock stable while you position it, useful when coordination is affected'
        }
      ],
      disclaimer: 'These tools don\'t treat or heal anything. They make it easier to put on compression socks yourself when your body has surgical restrictions.'
    },
    practicalTips: [
      {
        title: 'Tip 1: Put socks on before getting out of bed',
        description: 'Sit on the edge of your bed. Use the donning aid while seated. You have support from the bed and don\'t need to balance on one leg.'
      },
      {
        title: 'Tip 2: Use a low footstool',
        description: 'If you can\'t reach the floor comfortably, place the donning aid on a low footstool or step. Reduces how far you need to reach.'
      },
      {
        title: 'Tip 3: Keep socks near your bed',
        description: 'Set up your compression socks and donning aid on your nightstand the night before. One less trip across the room in the morning.'
      },
      {
        title: 'Tip 4: Practice before surgery (if possible)',
        description: 'If you know compression will be part of your recovery protocol, practice using the donning aid before surgery. Muscle memory helps when you\'re post-op.'
      },
      {
        title: 'Tip 5: Follow your provider\'s timeline',
        description: 'Don\'t push past your movement restrictions to put on socks. If a method hurts or violates your precautions, stop and ask your provider or physical therapist for guidance.'
      },
      {
        title: 'Tip 6: Have two pairs ready',
        description: 'Recovery is exhausting. Don\'t add laundry stress. Having two pairs means you can rotate them without interrupting your compression schedule.'
      }
    ],
    caregiverNotes: [
      {
        title: 'Know the restrictions',
        description: 'Understand your family member\'s surgical precautions. Hip precautions? Knee extension limits? Weight-bearing restrictions? These affect how they can safely put on socks.'
      },
      {
        title: 'Resist taking over',
        description: 'If they can do it with adaptive tools, let them. Independence matters for recovery confidence. Offer to help position the donning aid or hand them the sock—but let them do the actual donning if they\'re able.'
      },
      {
        title: 'Watch for violations',
        description: 'If you see them bending past their restrictions or struggling in unsafe ways, intervene. Offer to help directly rather than watching them risk re-injury.'
      },
      {
        title: 'Keep tools accessible',
        description: 'Put the donning aid and clean socks where they can reach them without bending or twisting. Nightstand height works well.'
      },
      {
        title: 'Respect their timeline',
        description: 'Some days are harder than others. If they need help today but wanted to do it themselves yesterday, that\'s normal recovery. Don\'t frame it as regression.'
      }
    ],
    faqs: [
      {
        question: 'Can I use these products immediately after surgery?',
        answer: 'Check with your healthcare provider. Most patients can use adaptive compression socks and donning aids as soon as compression is recommended—often within the first few days post-op. Your provider knows your specific situation.'
      },
      {
        question: 'What if I can\'t reach my feet at all?',
        answer: 'If you cannot safely reach your feet even with a donning aid, ask for help. Your physical therapist can teach a caregiver safe techniques or suggest positioning strategies. Independence is important, but safety comes first.'
      },
      {
        question: 'How long will I need compression after surgery?',
        answer: 'This varies by surgery type and individual recovery. Your surgeon or physical therapist will specify duration—often weeks to months. Follow their guidance.'
      },
      {
        question: 'Can I sleep in compression socks?',
        answer: 'Check with your provider. Compression is typically worn during waking hours and removed at night, but post-surgical protocols vary. Don\'t guess—ask your care team.'
      },
      {
        question: 'What if the compression level prescribed is different from what you sell?',
        answer: 'We offer 15-20 mmHg and 20-30 mmHg options (the most commonly prescribed levels). If your provider prescribes a different level, follow their guidance. You may need to source that specific level from a medical supply company.'
      },
      {
        question: 'Will these work with my knee brace / walking boot / other equipment?',
        answer: 'The wide-mouth opening makes it easier to position socks around braces. Many post-surgical patients use compression with orthopedic equipment. If you have specific compatibility questions, contact our team—we\'re happy to help.'
      }
    ]
  },
  'arthritis': {
    title: 'Limited Hand Strength / Arthritis',
    headline: 'Understanding Limited Hand Strength and Daily Dressing',
    subheadline: 'Designed for comfort and ease with limited hand dexterity and grip strength.',
    educationalContent: {
      paragraphs: [
        'Arthritis, reduced grip strength, hand pain, tremors, stroke recovery, or neurological conditions can make gripping and pulling tight fabric difficult. Compression socks—which are designed to be snug—become nearly impossible to put on with traditional methods.',
        'The daily challenge isn\'t whether compression socks might be helpful for circulation support during long periods of sitting or standing. The challenge is: your hands hurt, and standard compression socks require strength and dexterity your hands don\'t have right now.',
        'The daily-life friction:',
        'Your hands don\'t grip like they used to. Tight fabric won\'t stretch. Your fingers don\'t have the strength to pull graduated compression over your heel. You can see the socks. You know how to put on socks. But your hands won\'t cooperate.',
        'How adaptive design helps:',
        'Wide-mouth openings reduce the pulling force needed. Integrated pull-tabs give you something substantial to grip (not just slippery fabric). Ergonomic donning aids with wide handles transfer the work from your fingers to your larger arm muscles. These features are designed specifically for hands that hurt.'
      ],
      videoTitle: 'Putting On Compression Socks With Arthritis',
      videoLink: '#',
      sourceCitation: {
        text: 'For more information on arthritis and hand function, visit the Arthritis Foundation\'s resources on daily living adaptations.',
        url: 'https://www.arthritis.org/'
      }
    },
    challenges: [
      {
        title: 'Reduced Grip Force',
        description: 'Arthritis, carpal tunnel, stroke recovery, or general hand weakness means you can\'t generate the grip force needed to pull tight compression fabric. Your hands fatigue quickly.'
      },
      {
        title: 'Pain With Gripping',
        description: 'Squeezing tight fabric hurts. Your joints ache. You can do it once, but putting on compression socks every morning means repeated painful gripping.'
      },
      {
        title: 'Swollen Fingers or Joints',
        description: 'Swelling makes it harder to close your hand around fabric. Pinching and pulling become difficult. Standard compression sock fabric is too narrow to grip comfortably.'
      },
      {
        title: 'Tremor or Coordination Challenges',
        description: 'Parkinson\'s, essential tremor, or post-stroke coordination issues make fine motor tasks difficult. Threading your foot into a narrow sock opening requires precision your hands don\'t have.'
      },
      {
        title: 'Morning Stiffness',
        description: 'Hands are often stiffest in the morning—exactly when you need to put on compression socks. Waiting for stiffness to ease means delaying your day.'
      },
      {
        title: 'One-Handed Dressing',
        description: 'Stroke recovery or other conditions may mean you dress with one hand. Standard compression socks require two-handed coordination.'
      }
    ],
    howItHelps: {
      whyCompression: 'Many people with arthritis, limited mobility, or circulation concerns use compression socks for comfort during long periods of sitting or standing. Healthcare providers sometimes recommend graduated compression for daily wear. The problem: standard compression socks weren\'t designed for hands with limited strength.',
      whatAdaptiveFeatures: 'Adaptive compression socks and donning aids transfer the work from your fingers to design features that require less grip strength and fine motor control.',
      features: [
        {
          feature: 'Wide-mouth opening (3x standard width)',
          description: 'Reduces force needed to stretch the opening over your foot'
        },
        {
          feature: 'Integrated pull-tabs',
          description: 'Thick, textured loops you can hook your fingers through; easier to grip than bare fabric'
        },
        {
          feature: 'Ergonomic donning aid handle',
          description: 'Wide grip surface designed for arthritic hands; uses larger arm muscles instead of finger strength'
        },
        {
          feature: 'Non-slip sock surface on donning aid',
          description: 'Holds sock stable so you don\'t have to grip it with both hands'
        }
      ],
      disclaimer: 'These tools don\'t treat arthritis or hand conditions. They make it physically possible to put on compression socks when your hands have limited strength or dexterity.'
    },
    practicalTips: [
      {
        title: 'Tip 1: Use pull-tabs first, donning aid second',
        description: 'Try putting the socks on using just the wide opening and pull-tabs. If that works, great—you don\'t need the donning aid every time. If your hands are having a hard day, use the aid.'
      },
      {
        title: 'Tip 2: Put socks on in the morning',
        description: 'Your hands may be stiffer in the morning, but that\'s also when you typically need to put on socks. Build the routine early so you don\'t forget later.'
      },
      {
        title: 'Tip 3: Sit down',
        description: 'Don\'t try to put on compression socks while standing. Sit on your bed or a chair. Use your lap to position the donning aid if needed.'
      },
      {
        title: 'Tip 4: Use one hand if needed',
        description: 'If one hand is stronger, let it do more work. Use your weaker hand to stabilize while your stronger hand pulls the pull-tab or handle.'
      },
      {
        title: 'Tip 5: Take breaks',
        description: 'If your hands fatigue, pause. You don\'t have to get both socks on in one continuous effort. Do one foot, rest, then do the other.'
      },
      {
        title: 'Tip 6: Keep tools accessible',
        description: 'Store your donning aid and clean socks where you can reach them easily—bedside table, bathroom shelf, wherever makes sense for your routine.'
      }
    ],
    faqs: [
      {
        question: 'Will these work if I have severe arthritis?',
        answer: 'Many people with severe hand arthritis use our compression socks and donning aids successfully. The wide opening and pull-tabs reduce grip strength needed. If you\'re concerned about whether these will work for your specific hand limitations, contact us—we can discuss your situation.'
      },
      {
        question: 'Can I use these with one hand?',
        answer: 'The design makes one-handed donning easier than standard compression socks, but it may still require some two-handed coordination depending on your specific limitations. The donning aid can be stabilized with your foot or body while you pull with one hand.'
      },
      {
        question: 'Do the pull-tabs make the socks look medical or institutional?',
        answer: 'The pull-tabs are integrated into the sock design and fold down once the sock is on. They\'re functional, not decorative, but they don\'t look clinical.'
      },
      {
        question: 'What if my hands swell throughout the day?',
        answer: 'If morning is your best hand function time, put your compression socks on then. The socks themselves don\'t require grip strength to wear—only to put on.'
      },
      {
        question: 'Are these easier than using a traditional sock aid?',
        answer: 'Many users find our combination (wide-mouth socks + ergonomic donning aid) easier than trying to use a standard sock aid with standard narrow compression socks. The wide opening makes a significant difference.'
      },
      {
        question: 'Can I wash these in the washing machine?',
        answer: 'Yes. Machine wash cold, gentle cycle. The pull-tabs and wide opening don\'t require special care. Full washing instructions included with purchase.'
      }
    ]
  },
  'limited-mobility': {
    title: 'Limited Mobility & Flexibility',
    headline: 'Understanding Limited Mobility and Daily Dressing',
    subheadline: 'Designed for comfort and independence when bending, reaching, or balance is challenging.',
    educationalContent: {
      paragraphs: [
        'Limited hip flexibility, knee range of motion, back pain, balance concerns, wheelchair use, or chronic mobility challenges can make reaching your feet difficult or impossible. Compression socks require you to bend, balance on one foot, and manipulate tight fabric—all things that may not be physically accessible for you.',
        'The challenge isn\'t whether compression might support comfort during long periods of sitting. The challenge is: your body doesn\'t bend that way anymore, and standard compression socks assume you can reach your feet easily.',
        'The daily-life friction:',
        'Bending forward to reach your feet hurts, or isn\'t possible. Standing on one leg while putting on a sock is unstable. Your hip, knee, or back range of motion is limited. Traditional sock donning requires flexibility and balance you don\'t have.',
        'How adaptive design helps:',
        'Donning aids with extended handles bring the sock closer to you, reducing how far you need to bend. Wide-mouth openings mean you don\'t have to point your toes or flex your ankle as much. Methods that work while seated eliminate balance requirements. These features are designed for bodies with limited mobility and flexibility.'
      ],
      videoTitle: 'Putting On Compression Socks With Limited Flexibility',
      videoLink: '#',
      sourceCitation: {
        text: 'For more information on mobility limitations and adaptive equipment, visit the National Institute on Aging\'s resources on assistive devices.',
        url: 'https://www.nia.nih.gov/health/assistive-devices-and-technology'
      }
    },
    challenges: [
      {
        title: 'Can\'t Reach Your Feet',
        description: 'Hip arthritis, back pain, limited spinal flexibility, or wheelchair use means bending forward to reach your feet is difficult or impossible. Traditional sock donning requires that reach.'
      },
      {
        title: 'Limited Hip Flexion',
        description: 'Your hips don\'t bend past a certain point. Bringing your foot up toward your body (to put on a sock in your lap) isn\'t possible. You need the sock to come to you, not the other way around.'
      },
      {
        title: 'Knee Stiffness or Pain',
        description: 'Limited knee range of motion makes it hard to position your foot. Bending your knee fully to bring your foot within reach might not be comfortable or possible.'
      },
      {
        title: 'Balance Concerns',
        description: 'Standing on one leg while putting a sock on the other requires balance. If you use a walker, cane, or wheelchair, or if balance is uncertain, standing on one leg isn\'t safe.'
      },
      {
        title: 'Back Pain or Restrictions',
        description: 'Bending forward to reach your feet can trigger back pain. If you have chronic back issues or spinal conditions, forward bending might be restricted by your provider.'
      },
      {
        title: 'Seated Positioning',
        description: 'If you use a wheelchair or spend most of your time seated, reaching your feet from a seated position requires significant flexibility. Standard sock donning assumes you\'re standing or can easily lift your foot.'
      }
    ],
    howItHelps: {
      whyCompression: 'Many people who spend extended periods sitting (wheelchair users, desk workers, travelers) or who have limited mobility use compression socks for comfort and support during long wear. Healthcare providers sometimes recommend graduated compression for daily use. The problem: standard compression socks require flexibility and reach many people don\'t have.',
      whatAdaptiveFeatures: 'Adaptive compression socks and donning aids make it physically possible to put on compression socks when your body has limited flexibility, reach, or balance.',
      features: [
        {
          feature: 'Extended-handle donning aid',
          description: 'Brings the sock closer to you; reduces how far you need to bend forward'
        },
        {
          feature: 'Wide-mouth opening',
          description: 'Reduces ankle flexibility needed to slide your foot in'
        },
        {
          feature: 'Seated donning methods',
          description: 'Eliminates need for standing balance'
        },
        {
          feature: 'Pull-tabs',
          description: 'Gives you something to grip and pull when you can\'t reach the sock body'
        }
      ],
      disclaimer: 'These tools don\'t increase your flexibility or treat mobility limitations. They make it possible to put on compression socks without requiring flexibility or reach you don\'t have.'
    },
    practicalTips: [
      {
        title: 'Tip 1: Always sit down',
        description: 'Don\'t attempt to put on compression socks while standing if balance is uncertain. Sit on your bed, a stable chair, or in your wheelchair.'
      },
      {
        title: 'Tip 2: Use a low footstool',
        description: 'If you can\'t reach the floor comfortably, place the donning aid on a low footstool or step. Even a few inches of height reduction can make a significant difference.'
      },
      {
        title: 'Tip 3: Position the aid before sitting',
        description: 'Set up the donning aid with the sock loaded while you\'re standing (if you can) or have someone help you position it. Then sit and slide your foot in.'
      },
      {
        title: 'Tip 4: Use bed edge for stability',
        description: 'Sitting on the edge of your bed gives you something to push against. You can use your arms to stabilize yourself while donning.'
      },
      {
        title: 'Tip 5: Keep tools within reach',
        description: 'Store your donning aid and clean compression socks where you can access them without excessive bending—bedside table, wheelchair bag, bathroom shelf.'
      },
      {
        title: 'Tip 6: Consider timing',
        description: 'If your mobility varies throughout the day (stiffer in morning, better after moving), put socks on when your body is at its best. There\'s no rule that says they must go on first thing in the morning.'
      }
    ],
    caregiverNotes: [
      {
        title: 'Understand their range of motion',
        description: 'Know what movements are difficult or restricted. Don\'t assume they can bend forward just because they could last month. Mobility can change.'
      },
      {
        title: 'Help with setup, not donning',
        description: 'Position the donning aid where they can reach it. Load the sock onto the frame. But let them slide their foot in and pull up if they\'re able. Setup assistance preserves independence.'
      },
      {
        title: 'Watch for unsafe workarounds',
        description: 'If you see them bending in ways that cause pain or risk, intervene. Offer to help directly rather than watching them struggle unsafely.'
      },
      {
        title: 'Respect wheelchair positioning',
        description: 'If they use a wheelchair, understand that reaching their feet from seated position is difficult. Offer to position the aid or help lift their foot to the aid if needed.'
      },
      {
        title: 'Be patient with seated methods',
        description: 'Seated donning takes longer than standing methods. Don\'t rush them. Let them work at their pace.'
      }
    ],
    faqs: [
      {
        question: 'Can I use these from a wheelchair?',
        answer: 'Yes. Many wheelchair users use our extended-handle donning aid successfully. You can position the aid on the floor or a low surface and slide your foot in while seated. Some users find it helpful to have assistance positioning the aid initially.'
      },
      {
        question: 'What if I can\'t reach the floor at all?',
        answer: 'Use a low footstool, ottoman, or elevated surface. Even raising the donning aid 6-12 inches can make it accessible. If you still can\'t reach, you may need assistance with positioning—but you can still do the actual donning once it\'s positioned.'
      },
      {
        question: 'Will these work if I have limited hip flexion?',
        answer: 'The extended-handle donning aid is specifically designed to reduce hip flexion required. It won\'t eliminate bending entirely, but it significantly reduces how far forward you need to bend.'
      },
      {
        question: 'Can I use these with back pain restrictions?',
        answer: 'Many people with chronic back pain use these tools successfully. The key is reducing forward bending. If you\'re not cleared to bend forward at all, you may need assistance with positioning the aid, but you can still pull the sock up yourself.'
      },
      {
        question: 'Are these compatible with leg braces or orthotics?',
        answer: 'The wide-mouth opening makes it easier to position socks around braces and orthotics. Many users with leg braces find this design more accessible than standard compression socks.'
      },
      {
        question: 'What if my balance is unstable?',
        answer: 'Use seated methods only. Do not attempt to stand on one leg. Sitting on your bed or a chair eliminates balance requirements. If seated reach is still difficult, the extended-handle aid helps.'
      }
    ]
  },
  'diabetes': {
    title: 'Diabetes',
    headline: 'Understanding Diabetes and Foot Health',
    subheadline: 'Built for all-day comfort and foot health.',
    educationalContent: {
      paragraphs: [
        'Diabetes affects circulation and nerve function in the feet, making proper foot care essential. The American Diabetes Association emphasizes the importance of daily foot inspections and appropriate footwear.',
        'Comfortable, well-fitting products that don\'t restrict circulation are key for people managing diabetes. Avoid products with tight bands or seams that could cause pressure points.',
        'Our designs prioritize all-day comfort with seamless construction and graduated support, suitable for those focused on foot health and circulation.'
      ],
      videoTitle: 'Daily Foot Care for Diabetes Management',
      sourceCitation: {
        text: 'American Diabetes Association: Foot Complications',
        url: 'https://diabetes.org/diabetes/foot-complications'
      }
    },
    challenges: [],
    howItHelps: {
      whyCompression: '',
      whatAdaptiveFeatures: '',
      features: [],
      disclaimer: ''
    },
    practicalTips: [],
    faqs: []
  },
  'wheelchair-users': {
    title: 'Wheelchair Users',
    headline: 'Mobility-Focused Design for Wheelchair Users',
    subheadline: 'Designed for comfort and independence when seated.',
    educationalContent: {
      paragraphs: [
        'Wheelchair users have unique needs when it comes to compression and mobility products. Prolonged sitting, pressure points, and circulation considerations all factor into product selection.',
        'Products for wheelchair users should be easy to put on while seated, provide consistent support without restricting movement, and work well with existing mobility equipment.',
        'Our designs are tested by wheelchair users to ensure compatibility with various chair types, cushions, and daily routines. Built for active lifestyles and all-day comfort.'
      ],
      videoTitle: 'Adaptive Solutions for Wheelchair Users',
      sourceCitation: {
        text: 'Christopher & Dana Reeve Foundation: Daily Living',
        url: 'https://www.christopherreeve.org/living-with-paralysis/daily-living'
      }
    },
    challenges: [],
    howItHelps: {
      whyCompression: '',
      whatAdaptiveFeatures: '',
      features: [],
      disclaimer: ''
    },
    practicalTips: [],
    faqs: []
  }
};

export const ConditionEducation = ({ condition }: ConditionEducationProps) => {
  const content = conditionContent[condition];
  if (!content) return null;

  return (
    <section className="py-12 bg-muted/40" aria-labelledby="education-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* FDA Disclaimer - Above content for condition-specific pages */}
          <Card className="mb-8 border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-900">
            <CardContent className="p-6">
              <div className="flex gap-3">
                <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-amber-900 dark:text-amber-100 mb-2">
                    Important Medical Disclaimer
                  </p>
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease. {condition === 'post-surgery' && 'Follow your healthcare provider\'s post-surgical guidance.'} <Link to="/fda-disclaimer" className="underline">Full Policy →</Link>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 id="education-heading" className="text-3xl font-bold mb-6">{content.headline}</h2>
          
          {/* Educational Content */}
          <div className="space-y-6 text-lg text-muted-foreground">
            {content.educationalContent.paragraphs.map((paragraph, index) => {
              // Handle bold text markers
              if (paragraph.includes(':')) {
                const [bold, rest] = paragraph.split(':');
                return (
                  <p key={index}>
                    <strong>{bold}:</strong>{rest}
                  </p>
                );
              }
              return <p key={index}>{paragraph}</p>;
            })}
          </div>

          {/* Video Placeholder */}
          <div className="my-8">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center p-8">
                <p className="font-medium mb-2">[Video: {content.educationalContent.videoTitle}]</p>
                <p className="text-sm text-muted-foreground mb-4">
                  ⚠️ Accessibility Requirements: Captions (WebVTT), Full Transcript (PDF), Audio Description
                </p>
                {content.educationalContent.videoLink && (
                  <Button asChild variant="outline">
                    <Link to={content.educationalContent.videoLink}>→ Watch Video</Link>
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Source Citation */}
          {content.educationalContent.sourceCitation && (
            <div className="mb-8 pt-6 border-t">
              <p className="text-sm text-muted-foreground">
                <strong>Source Citation:</strong>{' '}
                <a 
                  href={content.educationalContent.sourceCitation.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {content.educationalContent.sourceCitation.text} →
                </a>
              </p>
            </div>
          )}

          {/* Common Challenges Section */}
          {content.challenges.length > 0 && (
            <div className="my-12">
              <h3 className="text-2xl font-bold mb-6">Common {content.title === 'Post-Surgical Recovery' ? 'Post-Surgical' : content.title === 'Limited Hand Strength / Arthritis' ? 'Challenges With Limited Hand Strength' : 'Challenges With Limited Mobility & Flexibility'}</h3>
              <p className="text-lg text-muted-foreground mb-6">Daily-Life Friction Points</p>
              <div className="space-y-6">
                {content.challenges.map((challenge, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-2">{challenge.title}</h4>
                      <p className="text-muted-foreground">{challenge.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* How Compression & Adaptive Tools Help */}
          {content.howItHelps.whyCompression && (
            <div className="my-12">
              <h3 className="text-2xl font-bold mb-6">How Compression & Adaptive Tools Help</h3>
              <p className="text-sm font-medium text-muted-foreground mb-4">Educational Context (Not Medical Claims)</p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Why {condition === 'post-surgery' ? 'compression is often recommended after surgery' : condition === 'arthritis' ? 'people with limited hand strength use compression' : 'people with limited mobility use compression'}:</h4>
                  <p className="text-muted-foreground">{content.howItHelps.whyCompression}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">What adaptive features do:</h4>
                  <p className="text-muted-foreground mb-4">{content.howItHelps.whatAdaptiveFeatures}</p>
                  
                  <ul className="space-y-3 list-disc list-inside ml-4">
                    {content.howItHelps.features.map((feature, index) => (
                      <li key={index} className="text-muted-foreground">
                        <strong>{feature.feature}</strong> – {feature.description}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Card className="bg-muted/50 border-primary/20">
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground italic">{content.howItHelps.disclaimer}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Practical Tips */}
          {content.practicalTips.length > 0 && (
            <div className="my-12">
              <h3 className="text-2xl font-bold mb-6">Practical {content.title === 'Post-Surgical Recovery' ? 'Post-Surgical' : content.title === 'Limited Hand Strength / Arthritis' ? 'Tips for Limited Hand Strength' : 'Tips for Limited Mobility & Flexibility'}</h3>
              <p className="text-sm font-medium text-muted-foreground mb-6">Daily Strategies (Not Medical Advice)</p>
              <div className="space-y-4">
                {content.practicalTips.map((tip, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2">{tip.title}</h4>
                      <p className="text-muted-foreground">{tip.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Caregiver Notes */}
          {content.caregiverNotes && content.caregiverNotes.length > 0 && (
            <div className="my-12">
              <h3 className="text-2xl font-bold mb-6">Caregiver Notes</h3>
              <p className="text-lg text-muted-foreground mb-6">
                {condition === 'post-surgery' ? 'Supporting Independence Safely' : 'Supporting Independence While Respecting Limitations'}
              </p>
              <div className="space-y-4">
                {content.caregiverNotes.map((note, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2">{note.title}</h4>
                      <p className="text-muted-foreground">{note.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* FAQs */}
          {content.faqs.length > 0 && (
            <div className="my-12">
              <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
              <Accordion type="single" collapsible className="w-full">
                {content.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
