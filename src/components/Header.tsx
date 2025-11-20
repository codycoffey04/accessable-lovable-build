import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { CartDrawer } from "@/components/CartDrawer";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded">
        Skip to main content
      </a>
      
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center min-w-fit" aria-label="AccessAble Home">
            <img 
              src="/images/logo_converted.png" 
              alt="AccessAble" 
              className="h-8 sm:h-10 w-auto max-h-10 object-contain"
              style={{ 
                maxWidth: '180px'
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-12 px-4">Shop</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[600px] grid-cols-2">
                    <div>
                      <h3 className="font-medium mb-3">By Need</h3>
                      <ul className="space-y-2">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/collections/compression-socks" className="block px-3 py-2 rounded-md hover:bg-accent">
                              Compression Socks
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/collections/donning-aids" className="block px-3 py-2 rounded-md hover:bg-accent">
                              Donning Sock
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/collections/bundles" className="block px-3 py-2 rounded-md hover:bg-accent">
                              Bundles
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium mb-3">By Condition</h3>
                      <ul className="space-y-2">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/collections/arthritis" className="block px-3 py-2 rounded-md hover:bg-accent">
                              Arthritis
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/collections/diabetes" className="block px-3 py-2 rounded-md hover:bg-accent">
                              Diabetes
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/collections/limited-mobility" className="block px-3 py-2 rounded-md hover:bg-accent">
                              Limited Mobility
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/collections/post-surgery" className="block px-3 py-2 rounded-md hover:bg-accent">
                              Post-Surgery
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/collections/travel" className="block px-3 py-2 rounded-md hover:bg-accent">
                              Travel & Circulation
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/learn" className="inline-flex h-12 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Learn
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/about" className="inline-flex h-12 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  About
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/pro" className="inline-flex h-12 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  AccessAble Pro
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/contact" className="inline-flex h-12 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Search, Account, Cart */}
          <div className="flex items-center gap-2">
            {/* Search Button */}
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Account */}
            <Button variant="ghost" size="icon" className="h-12 w-12 hidden sm:flex" aria-label="Account">
              <User className="h-5 w-5" />
            </Button>

            {/* Cart */}
            <CartDrawer />

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="h-12 w-12" aria-label="Menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="mt-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold">Shop</h3>
                    <ul className="ml-4 space-y-2">
                      <li><Link to="/collections/compression-socks" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Compression Socks</Link></li>
                      <li><Link to="/collections/donning-aids" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Donning Sock</Link></li>
                      <li><Link to="/collections/bundles" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Bundles</Link></li>
                      <li><Link to="/collections/arthritis" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Arthritis</Link></li>
                      <li><Link to="/collections/diabetes" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Diabetes</Link></li>
                      <li><Link to="/collections/limited-mobility" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Limited Mobility</Link></li>
                    </ul>
                  </div>
                  <Link to="/learn" className="block py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Learn</Link>
                  <Link to="/about" className="block py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>About</Link>
                  <Link to="/pro" className="block py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>AccessAble Pro</Link>
                  <Link to="/contact" className="block py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="py-4 border-t" role="search">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products, conditions, content..."
                className="pl-10 h-12"
                aria-label="Search"
                autoFocus
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
