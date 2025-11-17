import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <nav className="container mx-auto px-4 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li>/</li>
          <li aria-current="page" className="text-muted-foreground">Privacy Policy</li>
        </ol>
      </nav>

      <main id="main-content" className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">Last Updated: January 1, 2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            <p className="mb-4">We collect information you provide directly to us, including:</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Name, email address, phone number, and shipping address</li>
              <li>Payment information (processed securely through our payment processors)</li>
              <li>Account credentials and preferences</li>
              <li>Purchase history and product reviews</li>
              <li>Communication preferences and correspondence with us</li>
            </ul>
            <p>We also automatically collect certain information when you visit our website, including IP address, browser type, device information, and usage data through cookies and similar technologies.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your orders and account</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Improve our products and services</li>
              <li>Detect and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Information Sharing and Disclosure</h2>
            <p className="mb-4">We do not sell your personal information. We may share your information with:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Service Providers:</strong> Third parties who perform services on our behalf (payment processing, shipping, email delivery)</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
            <p>We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Your Rights (GDPR & CCPA)</h2>
            <p className="mb-4">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Opt-Out:</strong> Opt-out of marketing communications or data sales</li>
              <li><strong>Non-Discrimination:</strong> Not be discriminated against for exercising your rights</li>
            </ul>
            <p className="mt-4">To exercise these rights, contact us at privacy@accessible.com or 1-800-XXX-XXXX.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Cookies Policy</h2>
            <p className="mb-4">We use cookies and similar tracking technologies to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Personalize content and advertising</li>
              <li>Provide social media features</li>
            </ul>
            <p className="mt-4">You can control cookies through your browser settings. Disabling cookies may limit functionality.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Children's Privacy</h2>
            <p>Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. International Data Transfers</h2>
            <p>Your information may be transferred to and processed in countries other than your own. We take appropriate safeguards to ensure your information remains protected.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new policy on this page with an updated "Last Updated" date.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
            <p className="mb-4">For privacy-related questions or concerns:</p>
            <ul className="list-none space-y-2">
              <li><strong>Email:</strong> privacy@accessible.com</li>
              <li><strong>Phone:</strong> 1-800-XXX-XXXX</li>
              <li><strong>Mail:</strong> AccessAble, Attn: Privacy Officer, [Address]</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
