/**
 * Sizing Modal Component
 * Blueprint V2 Section 4.1: "Find Your Size" modal with measurement guide and video
 */

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Ruler, Play, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface SizingModalProps {
  productType?: 'compression-socks' | 'donning-aid';
}

export function SizingModal({ productType = 'compression-socks' }: SizingModalProps) {
  // Size chart data for compression socks
  const sizeChart = [
    { size: 'S', calf: '12-14"', ankle: '8-9"', shoe: '5-7' },
    { size: 'M', calf: '14-16"', ankle: '9-10"', shoe: '7-9' },
    { size: 'L', calf: '16-18"', ankle: '10-11"', shoe: '9-11' },
    { size: 'XL', calf: '18-20"', ankle: '11-12"', shoe: '11-13' },
    { size: 'XXL', calf: '20-22"', ankle: '12-13"', shoe: '13-15' },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="p-0 h-auto text-primary underline text-sm">
          Find Your Size
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Ruler className="h-5 w-5" />
            How to Find Your Perfect Size
          </DialogTitle>
          <DialogDescription>
            Follow these steps to measure and select the right size for your compression socks.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Measurement Instructions */}
          <section>
            <h3 className="text-lg font-semibold mb-3">Step 1: Measure Your Calf</h3>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-4">
              <li>Sit with your leg bent at a 90-degree angle</li>
              <li>Measure around the widest part of your calf (usually about 4-6 inches below your knee)</li>
              <li>Keep the measuring tape snug but not tight</li>
              <li>Record the measurement in inches</li>
            </ol>
            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-sm font-medium mb-2">💡 Tip:</p>
              <p className="text-sm text-muted-foreground">
                If you're between sizes, choose the larger size for comfort. Compression socks should feel supportive, not constricting.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-3">Step 2: Measure Your Ankle</h3>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-4">
              <li>Measure around the narrowest part of your ankle (just above the ankle bone)</li>
              <li>Keep the measuring tape snug but not tight</li>
              <li>Record the measurement in inches</li>
            </ol>
          </section>

          {/* Size Chart Table */}
          <section>
            <h3 className="text-lg font-semibold mb-3">Size Chart</h3>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead scope="col">Size</TableHead>
                    <TableHead scope="col">Calf Circumference</TableHead>
                    <TableHead scope="col">Ankle Circumference</TableHead>
                    <TableHead scope="col">Shoe Size (US Women's)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sizeChart.map((row) => (
                    <TableRow key={row.size}>
                      <TableCell className="font-medium">{row.size}</TableCell>
                      <TableCell>{row.calf}</TableCell>
                      <TableCell>{row.ankle}</TableCell>
                      <TableCell>{row.shoe}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              <strong>Wide-Calf Options:</strong> Available in sizes L, XL, and XXL for calf measurements up to 24 inches.
            </p>
          </section>

          {/* Video Tutorial */}
          <section>
            <h3 className="text-lg font-semibold mb-3">Video Tutorial</h3>
            <div className="bg-muted/50 p-6 rounded-lg text-center">
              <Play className="h-12 w-12 mx-auto mb-4 text-primary" />
              <p className="text-muted-foreground mb-4">
                Watch our step-by-step video guide on how to measure for compression socks.
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                This video includes captions, transcripts, and audio descriptions for full accessibility.
              </p>
              <Button asChild>
                <a href="#video-tutorial" target="_blank" rel="noopener noreferrer">
                  <Play className="h-4 w-4 mr-2" />
                  Watch Measurement Video
                </a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Video includes: Captions ✓ | Transcript ✓ | Audio Description ✓
            </p>
          </section>

          {/* Additional Resources */}
          <section className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-3">Need More Help?</h3>
            <div className="space-y-2">
              <Link 
                to="/pages/size-guide" 
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                View Full Size Guide
              </Link>
              <Link 
                to="/learn/compression" 
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                Learn About Compression Levels
              </Link>
            </div>
          </section>

          {/* Fit Guarantee */}
          <section className="bg-primary/5 p-4 rounded-lg border border-primary/20">
            <h3 className="font-semibold mb-2">30-Day Fit Guarantee</h3>
            <p className="text-sm text-muted-foreground">
              Not the right fit? We offer free exchanges within 30 days. Contact us and we'll send the correct size before you return the first pair.
            </p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}

