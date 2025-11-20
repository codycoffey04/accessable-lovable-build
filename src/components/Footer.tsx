import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";

export const Footer = () => {
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('high-contrast');
    if (saved === 'true') {
      setHighContrast(true);
      document.documentElement.classList.add('high-contrast');
    }
  }, []);

  const toggleHighContrast = (checked: boolean) => {
    setHighContrast(checked);
    localStorage.setItem('high-contrast', checked.toString());
    if (checked) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  };

  return (
    <footer className="border-t bg-muted/40 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Shop Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/collections/compression-socks" className="text-muted-foreground hover:text-foreground transition-colors">Compression Socks</Link></li>
              <li><Link to="/collections/donning-aids" className="text-muted-foreground hover:text-foreground transition-colors">Donning Sock</Link></li>
              <li><Link to="/collections/bundles" className="text-muted-foreground hover:text-foreground transition-colors">Bundles</Link></li>
              <li><Link to="/collections/all" className="text-muted-foreground hover:text-foreground transition-colors">All Products</Link></li>
            </ul>
          </div>

          {/* Learn Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Learn</h3>
            <ul className="space-y-2">
              <li><Link to="/learn/mobility" className="text-muted-foreground hover:text-foreground transition-colors">Mobility Guides</Link></li>
              <li><Link to="/learn/compression" className="text-muted-foreground hover:text-foreground transition-colors">Compression Basics</Link></li>
              <li><Link to="/learn/conditions" className="text-muted-foreground hover:text-foreground transition-colors">Condition Pages</Link></li>
              <li><Link to="/learn/how-to" className="text-muted-foreground hover:text-foreground transition-colors">How-To Videos</Link></li>
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">Our Story</Link></li>
              <li><Link to="/pro" className="text-muted-foreground hover:text-foreground transition-colors">AccessAble Pro</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
              <li><Link to="/policies/accessibility" className="text-muted-foreground hover:text-foreground transition-colors">Accessibility Statement</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/policies/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/policies/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link to="/policies/shipping-returns" className="text-muted-foreground hover:text-foreground transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/policies/fda-disclaimer" className="text-muted-foreground hover:text-foreground transition-colors">FDA Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        {/* High Contrast Toggle */}
        <div className="border-t pt-6 mb-6">
          <div className="flex items-center space-x-2">
            <Switch
              id="high-contrast"
              checked={highContrast}
              onCheckedChange={toggleHighContrast}
              aria-label="Toggle high contrast mode"
            />
            <Label htmlFor="high-contrast" className="cursor-pointer">
              High-Contrast Mode
            </Label>
          </div>
        </div>

        {/* Contact & Social */}
        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>
            <p>Email: support@accessible.com | Phone: 1-800-XXX-XXXX (24/7)</p>
            <p className="mt-1">© {new Date().getFullYear()} AccessAble. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground transition-colors" aria-label="Facebook">Facebook</a>
            <a href="#" className="hover:text-foreground transition-colors" aria-label="Instagram">Instagram</a>
            <a href="#" className="hover:text-foreground transition-colors" aria-label="Twitter">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
