import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

export const ExitIntentModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if modal has been shown before
    const shown = localStorage.getItem("exit-intent-shown");
    if (shown) {
      setHasShown(true);
      return;
    }

    // Exit intent detection - mouse leaving viewport at top
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        localStorage.setItem("exit-intent-shown", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px]" aria-describedby="exit-intent-description">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4"
          onClick={handleClose}
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </Button>
        
        <DialogHeader>
          <DialogTitle className="text-2xl">Get 10% Off Your First Order</DialogTitle>
          <DialogDescription id="exit-intent-description">
            Expert guides, new products, and adaptive living tips—delivered to your inbox.
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-6 mt-4" onSubmit={(e) => { e.preventDefault(); handleClose(); }}>
          <div>
            <Label htmlFor="exit-email">Email Address <span className="text-destructive">*</span></Label>
            <Input
              id="exit-email"
              type="email"
              placeholder="your@email.com"
              required
              className="h-12"
              aria-required="true"
            />
          </div>

          <div className="space-y-3">
            <p className="text-sm font-medium">What would you like to receive? (Optional)</p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="pref-mobility" />
                <Label htmlFor="pref-mobility" className="font-normal cursor-pointer">
                  Mobility tips and guides
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="pref-products" />
                <Label htmlFor="pref-products" className="font-normal cursor-pointer">
                  New product announcements
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="pref-pro" />
                <Label htmlFor="pref-pro" className="font-normal cursor-pointer">
                  AccessAble Pro updates
                </Label>
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full h-12 text-lg">
            Get My Discount
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            We respect your inbox. Unsubscribe anytime.{" "}
            <Link to="/policies/privacy" className="underline hover:text-foreground">
              Privacy Policy
            </Link>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};
