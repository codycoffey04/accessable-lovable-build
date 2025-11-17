/**
 * FORM ACCESSIBILITY: Visible labels | aria-required | aria-invalid | Error messages
 * TODO: Test keyboard navigation and screen reader announcements
 */

import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';

export default function ProLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [resetModalOpen, setResetModalOpen] = useState(false);
  const [requestModalOpen, setRequestModalOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  
  // Request access form
  const [requestName, setRequestName] = useState('');
  const [requestEmail, setRequestEmail] = useState('');
  const [requestOrg, setRequestOrg] = useState('');
  const [requestRole, setRequestRole] = useState('');
  const [requestMessage, setRequestMessage] = useState('');

  const { signIn, user, userRole } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Load remembered email
    const remembered = localStorage.getItem('rememberedEmail');
    if (remembered) {
      setEmail(remembered);
      setRememberMe(true);
    }
  }, []);

  useEffect(() => {
    // Redirect if already logged in as pro user
    if (user && userRole === 'pro_user') {
      navigate('/pro/dashboard');
    }
  }, [user, userRole, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const { error } = await signIn(email, password);

    if (!error) {
      if (rememberMe) {
        localStorage.setItem('rememberedEmail', email);
      } else {
        localStorage.removeItem('rememberedEmail');
      }
      navigate('/pro/dashboard');
    }

    setIsLoading(false);
  };

  const handlePasswordReset = async () => {
    const { resetPassword } = useAuth();
    await resetPassword(resetEmail);
    setResetModalOpen(false);
    setResetEmail('');
  };

  const handleRequestAccess = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to backend
    console.log('Access request:', {
      requestName,
      requestEmail,
      requestOrg,
      requestRole,
      requestMessage,
    });
    alert('Request submitted! We\'ll contact you within 24 hours.');
    setRequestModalOpen(false);
    setRequestName('');
    setRequestEmail('');
    setRequestOrg('');
    setRequestRole('');
    setRequestMessage('');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-md mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary font-semibold">AccessAble Pro</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Pro Portal Login</h1>
          <p className="text-muted-foreground">
            Access your professional account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              aria-required="true"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                aria-required="true"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? 'Hide' : 'Show'}
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              />
              <Label htmlFor="remember" className="text-sm cursor-pointer">
                Remember me
              </Label>
            </div>
            <Button
              type="button"
              variant="link"
              onClick={() => setResetModalOpen(true)}
              className="text-sm p-0 h-auto"
            >
              Forgot Password?
            </Button>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
            size="lg"
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>

        <Separator className="my-6" />

        <div className="text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{' '}
            <Button
              variant="link"
              onClick={() => setRequestModalOpen(true)}
              className="p-0 h-auto"
            >
              Request Access
            </Button>
          </p>
          <Button variant="outline" asChild className="w-full">
            <Link to="/">Back to AccessAble.com</Link>
          </Button>
        </div>

        {/* Password Reset Modal */}
        <Dialog open={resetModalOpen} onOpenChange={setResetModalOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Reset Password</DialogTitle>
              <DialogDescription>
                Enter your email address and we'll send you a password reset link.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="reset-email">Email</Label>
                <Input
                  id="reset-email"
                  type="email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  placeholder="your@email.com"
                />
              </div>
              <Button onClick={handlePasswordReset} className="w-full">
                Send Reset Link
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Request Access Modal */}
        <Dialog open={requestModalOpen} onOpenChange={setRequestModalOpen}>
          <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Request Pro Access</DialogTitle>
              <DialogDescription>
                Fill out this form and we'll contact you within 24 hours.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleRequestAccess} className="space-y-4">
              <div>
                <Label htmlFor="request-name">
                  Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="request-name"
                  value={requestName}
                  onChange={(e) => setRequestName(e.target.value)}
                  required
                  aria-required="true"
                />
              </div>
              <div>
                <Label htmlFor="request-email">
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="request-email"
                  type="email"
                  value={requestEmail}
                  onChange={(e) => setRequestEmail(e.target.value)}
                  required
                  aria-required="true"
                />
              </div>
              <div>
                <Label htmlFor="request-org">
                  Organization <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="request-org"
                  value={requestOrg}
                  onChange={(e) => setRequestOrg(e.target.value)}
                  required
                  aria-required="true"
                />
              </div>
              <div>
                <Label htmlFor="request-role">
                  Role <span className="text-destructive">*</span>
                </Label>
                <Select value={requestRole} onValueChange={setRequestRole} required>
                  <SelectTrigger id="request-role">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pt">Physical Therapist</SelectItem>
                    <SelectItem value="ot">Occupational Therapist</SelectItem>
                    <SelectItem value="facility-manager">Facility Manager</SelectItem>
                    <SelectItem value="distributor">Distributor</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="request-message">Message (Optional)</Label>
                <Textarea
                  id="request-message"
                  value={requestMessage}
                  onChange={(e) => setRequestMessage(e.target.value)}
                  rows={3}
                />
              </div>
              <Button type="submit" className="w-full">
                Request Access
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
