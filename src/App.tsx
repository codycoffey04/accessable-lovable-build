import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Homepage from "./pages/Homepage";
import ProductDetail from "./pages/ProductDetail";
import Collection from "./pages/Collection";
import Learn from "./pages/Learn";
import LearnArticle from "./pages/LearnArticle";
import About from "./pages/About";
import Pro from "./pages/Pro";
import ProBulk from "./pages/ProBulk";
import ProStarterKits from "./pages/ProStarterKits";
import ProResources from "./pages/ProResources";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import SizeGuide from "./pages/SizeGuide";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import ShippingReturns from "./pages/ShippingReturns";
import AccessibilityStatement from "./pages/AccessibilityStatement";
import FDADisclaimer from "./pages/FDADisclaimer";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner position="top-center" />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/products/:handle" element={<ProductDetail />} />
            <Route path="/collections/:collection" element={<Collection />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/learn/:slug" element={<LearnArticle />} />
            <Route path="/about" element={<About />} />
            <Route path="/pro" element={<Pro />} />
            <Route path="/pro/bulk" element={<ProBulk />} />
            <Route path="/pro/starter-kits" element={<ProStarterKits />} />
            <Route path="/pro/resources" element={<ProResources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pages/faq" element={<FAQ />} />
            <Route path="/pages/size-guide" element={<SizeGuide />} />
            <Route path="/policies/privacy" element={<PrivacyPolicy />} />
            <Route path="/policies/terms" element={<TermsOfService />} />
            <Route path="/policies/shipping-returns" element={<ShippingReturns />} />
            <Route path="/policies/accessibility" element={<AccessibilityStatement />} />
            <Route path="/policies/fda-disclaimer" element={<FDADisclaimer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
