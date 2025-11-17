import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

export default function FDADisclaimer() {
  return (
    <div className="min-h-screen">
      <nav className="container mx-auto px-4 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li>/</li>
          <li aria-current="page" className="text-muted-foreground">FDA Disclaimer</li>
        </ol>
      </nav>

      <main id="main-content" className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <AlertTriangle className="h-12 w-12 text-destructive" />
            <h1 className="text-4xl font-bold">FDA Disclaimer</h1>
          </div>

          <div className="bg-destructive/10 border-l-4 border-destructive p-6 mb-8">
            <p className="font-bold text-lg mb-2">Important Notice</p>
            <p className="text-muted-foreground">
              The statements and information on this website have not been evaluated by the United States Food and Drug Administration (FDA). Our products are not intended to diagnose, treat, cure, or prevent any disease.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">What This Means</h2>
            <p className="text-muted-foreground mb-4">
              AccessAble compression socks and related products are designed to provide comfort and support for daily activities. While many users find our products helpful for their lifestyle needs, we make no medical claims about their ability to treat, cure, or prevent any medical condition.
            </p>
            <p className="text-muted-foreground">
              The FDA disclaimer is a standard requirement for products that make health-related statements but are not intended for medical use. It helps consumers understand that our products have not undergone FDA evaluation for medical efficacy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Consult Your Healthcare Provider</h2>
            <p className="text-muted-foreground mb-4">
              <strong>Always consult with a qualified healthcare provider before starting any new health regimen, including the use of compression therapy.</strong>
            </p>
            <p className="text-muted-foreground mb-4">
              Your doctor or healthcare provider can:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Assess whether compression therapy is appropriate for your specific situation</li>
              <li>Recommend the correct compression level for your needs</li>
              <li>Identify any contraindications or safety concerns</li>
              <li>Monitor your progress and adjust recommendations as needed</li>
              <li>Provide guidance on proper use and duration of wear</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Product Information vs. Medical Advice</h2>
            <p className="text-muted-foreground mb-4">
              The information provided on our website, including our Learn Hub articles, is for educational purposes only and should not be construed as medical advice. This information is intended to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>Help you understand how compression products work</li>
              <li>Provide guidance on sizing and fit</li>
              <li>Offer tips for proper use and care</li>
              <li>Share general information about mobility and independence</li>
            </ul>
            <p className="text-muted-foreground">
              It is <strong>not</strong> intended to replace professional medical advice, diagnosis, or treatment from qualified healthcare providers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">When to Seek Medical Attention</h2>
            <p className="text-muted-foreground mb-4">
              <strong>Stop using compression products and consult a healthcare provider immediately if you experience:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Numbness, tingling, or loss of sensation</li>
              <li>Increased pain or discomfort</li>
              <li>Skin discoloration, redness, or irritation</li>
              <li>Swelling that worsens or doesn't improve</li>
              <li>Open wounds or sores</li>
              <li>Any signs of circulation problems</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contraindications</h2>
            <p className="text-muted-foreground mb-4">
              Compression therapy may not be appropriate for everyone. Consult your healthcare provider before using compression products if you have:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Peripheral arterial disease or poor arterial circulation</li>
              <li>Congestive heart failure</li>
              <li>Septic phlebitis</li>
              <li>Phlegmasia cerulea dolens</li>
              <li>Acute dermatitis, weeping skin lesions, or infections</li>
              <li>Severe diabetes with peripheral neuropathy</li>
              <li>Known allergy to compression garment materials</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Commitment to Transparency</h2>
            <p className="text-muted-foreground mb-4">
              AccessAble is committed to providing honest, transparent information about our products. We:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Never make unsubstantiated medical claims</li>
              <li>Clearly distinguish between product information and medical advice</li>
              <li>Encourage consultation with healthcare providers</li>
              <li>Source educational content from reputable medical organizations (CDC, Mayo Clinic, etc.)</li>
              <li>Moderate customer reviews to ensure they don't contain inappropriate medical claims</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Questions?</h2>
            <p className="text-muted-foreground mb-4">
              If you have questions about this disclaimer or our products, please contact us:
            </p>
            <div className="bg-muted/40 rounded-lg p-6">
              <ul className="space-y-2">
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:support@accessible.com" className="text-primary hover:underline">
                    support@accessible.com
                  </a>
                </li>
                <li><strong>Phone:</strong> 1-800-XXX-XXXX (24/7)</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                For medical questions, please consult your healthcare provider.
              </p>
            </div>
          </section>

          <section>
            <p className="text-sm text-muted-foreground">
              <strong>Last Updated:</strong> January 1, 2024
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
