import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function AccessibilityStatement() {
  return (
    <div className="min-h-screen">
      <nav className="container mx-auto px-4 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li>/</li>
          <li aria-current="page" className="text-muted-foreground">Accessibility Statement</li>
        </ol>
      </nav>

      <main id="main-content" className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Accessibility Statement</h1>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Commitment to Accessibility</h2>
            <p className="text-lg text-muted-foreground mb-6">
              AccessAble is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to ensure we provide equal access to all our users.
            </p>
            <p className="text-muted-foreground">
              We strive to meet or exceed the requirements of the <strong>Web Content Accessibility Guidelines (WCAG) 2.2 Level AA</strong>, an internationally recognized standard for web accessibility developed by the World Wide Web Consortium (W3C).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Accessibility Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Keyboard Navigation</h3>
                      <p className="text-sm text-muted-foreground">
                        All interactive elements can be accessed and activated using only a keyboard. Tab, Arrow, Enter, Escape, and Space keys are fully supported.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Screen Reader Compatibility</h3>
                      <p className="text-sm text-muted-foreground">
                        Our site is compatible with popular screen readers including JAWS, NVDA, and VoiceOver. ARIA labels and live regions ensure dynamic content changes are announced.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">High-Contrast Mode</h3>
                      <p className="text-sm text-muted-foreground">
                        Toggle high-contrast mode from the footer for enhanced visibility. Maintains 7:1 contrast ratio for all text and UI elements.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Touch Target Sizing</h3>
                      <p className="text-sm text-muted-foreground">
                        All interactive elements meet WCAG 2.2 requirements with minimum 48x48px touch targets and 8px spacing between adjacent targets.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Image Alt Text</h3>
                      <p className="text-sm text-muted-foreground">
                        All images include descriptive alternative text. Product images describe both the product and mobility context when applicable.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Video Accessibility</h3>
                      <p className="text-sm text-muted-foreground">
                        All video content includes captions, transcripts, and audio descriptions for users who are deaf, hard of hearing, or blind.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Skip Navigation Links</h3>
                      <p className="text-sm text-muted-foreground">
                        "Skip to main content" links on every page allow keyboard users to bypass repetitive navigation and jump directly to content.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Form Accessibility</h3>
                      <p className="text-sm text-muted-foreground">
                        All forms include visible labels, proper field associations, clear error messages, and keyboard-friendly controls.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Testing and Monitoring</h2>
            <p className="text-muted-foreground mb-4">
              We regularly test our website using:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>Automated accessibility scanning tools (WAVE, Axe DevTools)</li>
              <li>Manual keyboard navigation testing</li>
              <li>Screen reader testing with NVDA and JAWS</li>
              <li>Color contrast analysis</li>
              <li>Real user testing with people who have disabilities</li>
            </ul>
            <p className="text-muted-foreground">
              We are committed to ongoing monitoring and improvement to ensure our site remains accessible as we add new features and content.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Known Limitations</h2>
            <p className="text-muted-foreground mb-4">
              While we strive for full accessibility, we acknowledge that some areas may still present challenges:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Some third-party embedded content (payment processors, social media) may have accessibility limitations beyond our control</li>
              <li>Older PDF documents may not be fully accessible; we are working to remediate these</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              We are actively working to address these limitations and welcome your feedback.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Feedback and Contact Information</h2>
            <p className="text-muted-foreground mb-6">
              We welcome your feedback on the accessibility of our website. If you encounter any accessibility barriers or have suggestions for improvement, please contact us:
            </p>
            <div className="bg-muted/40 rounded-lg p-6">
              <ul className="space-y-3">
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:accessibility@accessible.com" className="text-primary hover:underline">
                    accessibility@accessible.com
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong> 1-800-XXX-XXXX (Monday-Friday, 9am-5pm ET)
                </li>
                <li>
                  <strong>Mail:</strong> AccessAble, Attn: Accessibility Coordinator, [Address]
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                We aim to respond to accessibility feedback within 3 business days and to resolve issues as quickly as possible.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Third-Party Applications</h2>
            <p className="text-muted-foreground">
              Our website integrates with third-party services (Shopify for e-commerce). While we work with vendors who share our commitment to accessibility, we cannot guarantee the accessibility of all third-party content. If you experience accessibility issues with third-party content, please let us know so we can work with our vendors to address them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Updates to This Statement</h2>
            <p className="text-muted-foreground">
              This accessibility statement was last updated on January 1, 2024. We review and update this statement regularly as we make improvements to our site and as accessibility standards evolve.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
