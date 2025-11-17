import { Link } from "react-router-dom";

export default function TermsOfService() {
  return (
    <div className="min-h-screen">
      <nav className="container mx-auto px-4 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li>/</li>
          <li aria-current="page" className="text-muted-foreground">Terms of Service</li>
        </ol>
      </nav>

      <main id="main-content" className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-sm text-muted-foreground mb-8">Last Updated: January 1, 2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p>By accessing and using the AccessAble website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Use of Site</h2>
            <p className="mb-4">You agree to use our website only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit harmful code or malware</li>
              <li>Engage in unauthorized data collection</li>
              <li>Impersonate others or provide false information</li>
              <li>Interfere with or disrupt the website's operation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Product Information</h2>
            <p className="mb-4">We strive to provide accurate product information, but we do not warrant that:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Product descriptions are completely accurate or error-free</li>
              <li>All products are available in all sizes or colors</li>
              <li>Pricing is free from errors</li>
            </ul>
            <p className="mt-4">We reserve the right to correct errors and update information at any time without prior notice. If a product is listed at an incorrect price due to error, we may refuse or cancel orders placed for that product.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Orders and Payment</h2>
            <p className="mb-4">When you place an order:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>You certify that you are authorized to use the payment method provided</li>
              <li>You agree to pay all charges at the prices in effect when you place your order</li>
              <li>We reserve the right to refuse or cancel any order for any reason</li>
              <li>Receipt of an order confirmation does not constitute acceptance of your order</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Product Warranties</h2>
            <p className="mb-4">Our products are warranted to be free from defects in materials and workmanship under normal use for a period of 90 days from the date of purchase. This warranty does not cover:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Normal wear and tear</li>
              <li>Improper use or care</li>
              <li>Damage from accidents or misuse</li>
              <li>Products purchased from unauthorized sellers</li>
            </ul>
            <p className="mt-4"><strong>Disclaimer:</strong> EXCEPT AS EXPRESSLY PROVIDED ABOVE, PRODUCTS ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
            <p className="mb-4">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>AccessAble shall not be liable for any indirect, incidental, special, consequential, or punitive damages</li>
              <li>Our total liability shall not exceed the amount paid by you for the product or service in question</li>
              <li>We are not liable for delays or failures due to causes beyond our reasonable control</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Medical Disclaimer</h2>
            <p className="mb-4">
              <strong>Important:</strong> The information and products provided on this website are not intended to diagnose, treat, cure, or prevent any disease. These statements have not been evaluated by the FDA. Always consult with a qualified healthcare provider before starting any compression therapy or if you have specific medical concerns.
            </p>
            <p>AccessAble is not responsible for any adverse effects or consequences resulting from the use of our products.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Intellectual Property</h2>
            <p>All content on this website, including text, images, logos, and software, is the property of AccessAble or its licensors and is protected by copyright and other intellectual property laws. You may not use, reproduce, or distribute any content without our express written permission.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. User-Generated Content</h2>
            <p className="mb-4">By submitting reviews, comments, or other content to our website, you grant AccessAble a perpetual, royalty-free license to use, reproduce, modify, and display such content. You warrant that:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>You own or have rights to the content you submit</li>
              <li>The content does not violate any laws or third-party rights</li>
              <li>The content does not contain false or misleading information</li>
            </ul>
            <p className="mt-4">We reserve the right to remove any user-generated content that violates these Terms or is otherwise objectionable.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Dispute Resolution</h2>
            <p className="mb-4">Any disputes arising from these Terms or your use of our services shall be resolved through:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Informal Resolution:</strong> Contact us first to attempt resolution</li>
              <li><strong>Arbitration:</strong> Binding arbitration if informal resolution fails</li>
              <li><strong>Governing Law:</strong> These Terms are governed by the laws of [State/Country]</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">11. Changes to Terms</h2>
            <p>We may modify these Terms at any time. Material changes will be posted on this page with an updated "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the new Terms.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">12. Contact Information</h2>
            <p className="mb-4">For questions about these Terms:</p>
            <ul className="list-none space-y-2">
              <li><strong>Email:</strong> legal@accessible.com</li>
              <li><strong>Phone:</strong> 1-800-XXX-XXXX</li>
              <li><strong>Mail:</strong> AccessAble, Attn: Legal Department, [Address]</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
