import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';

// Mock review data
const mockReviews = [
  {
    id: '1',
    rating: 5,
    author: 'Margaret T.',
    userType: 'Wheelchair User',
    date: '2025-01-15',
    text: 'These compression socks are so much easier to put on with my sock aid. The wide opening really helps, and they\'re comfortable all day.',
    helpful: 25,
    notHelpful: 2,
    verified: true,
  },
  {
    id: '2',
    rating: 4,
    author: 'John D.',
    userType: 'Nurse',
    date: '2025-01-10',
    text: 'Great quality socks. I recommend these to my patients who need compression. Easy to use with limited dexterity.',
    helpful: 18,
    notHelpful: 1,
    verified: true,
  },
];

export const ReviewsSection = ({ product }: { product: any }) => {
  const [ratingFilter, setRatingFilter] = useState('all');
  const [userTypeFilter, setUserTypeFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 10;

  const aggregateRating = 4.7;
  const totalReviews = 500;
  const ratingBreakdown = [
    { stars: 5, percentage: 85, count: 425 },
    { stars: 4, percentage: 10, count: 50 },
    { stars: 3, percentage: 3, count: 15 },
    { stars: 2, percentage: 1, count: 5 },
    { stars: 1, percentage: 1, count: 5 },
  ];

  const filteredReviews = mockReviews.filter(review => {
    if (ratingFilter !== 'all' && review.rating !== parseInt(ratingFilter)) return false;
    if (userTypeFilter !== 'all' && review.userType !== userTypeFilter) return false;
    if (searchQuery && !review.text.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);

  return (
    <section className="py-12 border-t" id="reviews">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Customer Reviews</h2>

        {/* FDA Moderation Notice */}
        <Alert className="mb-6">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            <strong>Review Moderation:</strong> All reviews are pre-approved to ensure accuracy. 
            Reviews containing medical claims are not permitted. These statements have not been 
            evaluated by the FDA.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Aggregate Rating */}
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">{aggregateRating}</div>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(aggregateRating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Based on {totalReviews} reviews
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Rating Breakdown */}
          <Card className="lg:col-span-2">
            <CardContent className="pt-6">
              <div className="space-y-2">
                {ratingBreakdown.map(({ stars, percentage, count }) => (
                  <div key={stars} className="flex items-center gap-3">
                    <span className="text-sm w-12">{stars} stars</span>
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{ width: `${percentage}%` }}
                        role="progressbar"
                        aria-valuenow={percentage}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${stars} star rating: ${percentage}%`}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground w-16 text-right">
                      {count}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Search reviews..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search reviews"
                />
              </div>
              <Select value={ratingFilter} onValueChange={setRatingFilter}>
                <SelectTrigger className="w-full md:w-48" aria-label="Filter by rating">
                  <SelectValue placeholder="All Ratings" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Ratings</SelectItem>
                  <SelectItem value="5">5 Stars</SelectItem>
                  <SelectItem value="4">4 Stars</SelectItem>
                  <SelectItem value="3">3 Stars</SelectItem>
                  <SelectItem value="2">2 Stars</SelectItem>
                  <SelectItem value="1">1 Star</SelectItem>
                </SelectContent>
              </Select>
              <Select value={userTypeFilter} onValueChange={setUserTypeFilter}>
                <SelectTrigger className="w-full md:w-48" aria-label="Filter by user type">
                  <SelectValue placeholder="All Users" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Users</SelectItem>
                  <SelectItem value="Mobility Aid User">Mobility Aid User</SelectItem>
                  <SelectItem value="Nurse">Nurse</SelectItem>
                  <SelectItem value="Wheelchair User">Wheelchair User</SelectItem>
                  <SelectItem value="Traveler">Traveler</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Reviews List */}
        <div className="space-y-4">
          {filteredReviews.slice((currentPage - 1) * reviewsPerPage, currentPage * reviewsPerPage).map((review) => (
            <Card key={review.id}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                            aria-label={i < review.rating ? 'Filled star' : 'Empty star'}
                          />
                        ))}
                      </div>
                      <span className="sr-only">Rated {review.rating} out of 5 stars</span>
                      {review.verified && (
                        <Badge variant="secondary" className="text-xs">
                          Verified Purchase
                        </Badge>
                      )}
                      <Badge variant="outline" className="text-xs">
                        {review.userType}
                      </Badge>
                    </div>
                    <p className="font-semibold mb-1">{review.author}</p>
                    <p className="text-sm text-muted-foreground mb-3">
                      {new Date(review.date).toLocaleDateString()}
                    </p>
                    <p className="mb-4">{review.text}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-muted-foreground">Was this helpful?</span>
                      <Button variant="ghost" size="sm">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        Yes ({review.helpful})
                      </Button>
                      <Button variant="ghost" size="sm">
                        <ThumbsDown className="h-4 w-4 mr-1" />
                        No ({review.notHelpful})
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <nav aria-label="Review pagination" className="mt-8">
            <div className="flex items-center justify-center gap-2">
              <Button
                variant="outline"
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                aria-label="Previous page"
              >
                Previous
              </Button>
              {Array.from({ length: totalPages }).map((_, i) => (
                <Button
                  key={i + 1}
                  variant={currentPage === i + 1 ? 'default' : 'outline'}
                  onClick={() => setCurrentPage(i + 1)}
                  aria-current={currentPage === i + 1 ? 'page' : undefined}
                >
                  {i + 1}
                </Button>
              ))}
              <Button
                variant="outline"
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                aria-label="Next page"
              >
                Next
              </Button>
            </div>
            {/* ARIA live region */}
            <div
              aria-live="polite"
              aria-atomic="true"
              className="sr-only"
            >
              Showing page {currentPage} of {totalPages}
            </div>
          </nav>
        )}
      </div>
    </section>
  );
};
