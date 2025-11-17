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
import About from "./pages/About";
import Pro from "./pages/Pro";
import Contact from "./pages/Contact";
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
            <Route path="/learn/:slug" element={<Learn />} />
            <Route path="/about" element={<About />} />
            <Route path="/pro" element={<Pro />} />
            <Route path="/pro/:section" element={<Pro />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
