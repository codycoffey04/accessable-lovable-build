import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Home,
  ShoppingBag,
  RefreshCcw,
  FileText,
  Settings,
  HelpCircle,
  LogOut,
  Download,
  Phone,
  Mail,
} from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { supabase } from '@/integrations/supabase/client';

export default function ProDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [orders, setOrders] = useState<any[]>([]);
  const [proUserData, setProUserData] = useState<any>(null);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Settings form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [billingAddress, setBillingAddress] = useState({
    street: '',
    city: '',
    state: '',
    zip: '',
  });
  const [shippingAddress, setShippingAddress] = useState({
    street: '',
    city: '',
    state: '',
    zip: '',
  });
  const [notificationPreferences, setNotificationPreferences] = useState({
    orderUpdates: true,
    invoiceNotifications: true,
    productUpdates: false,
  });

  useEffect(() => {
    if (user) {
      fetchProUserData();
      fetchOrders();
    }
  }, [user]);

  useEffect(() => {
    if (user?.email) {
      setEmail(user.email);
    }
  }, [user]);

  const fetchProUserData = async () => {
    const { data } = await supabase
      .from('pro_users')
      .select('*')
      .eq('user_id', user?.id)
      .single();
    setProUserData(data);
  };

  const fetchOrders = async () => {
    const { data } = await supabase
      .from('orders')
      .select('*')
      .eq('user_id', user?.id)
      .order('created_at', { ascending: false });
    setOrders(data || []);
  };

  const handleLogout = async () => {
    await signOut();
    navigate('/pro/login');
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      pending: 'bg-yellow-500',
      processing: 'bg-blue-500',
      shipped: 'bg-purple-500',
      delivered: 'bg-green-500',
      cancelled: 'bg-red-500',
    };
    return colors[status] || 'bg-gray-500';
  };

  const handleDownloadInvoice = (orderId: string) => {
    // Placeholder implementation
    console.log('Downloading invoice for order:', orderId);
    // TODO: Implement actual PDF generation/download logic
    // This could call an edge function or use a PDF library
  };

  const handleUpdateEmail = () => {
    console.log('Updating email to:', email);
    // TODO: Implement email update logic with Supabase Auth
    // await supabase.auth.updateUser({ email: email })
  };

  const handleChangePassword = () => {
    console.log('Changing password');
    // TODO: Implement password change logic with Supabase Auth
    // This should trigger a password reset email or modal
  };

  const handleSaveSettings = () => {
    console.log('Saving settings:', {
      billingAddress,
      shippingAddress,
      notificationPreferences,
    });
    // TODO: Implement save logic to Supabase
    // Update pro_users table with addresses and preferences
  };

  const navItems = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'orders', label: 'Order History', icon: ShoppingBag },
    { id: 'reorder', label: 'Reorder', icon: RefreshCcw },
    { id: 'invoices', label: 'Invoices', icon: FileText },
    { id: 'settings', label: 'Account Settings', icon: Settings },
    { id: 'support', label: 'Support', icon: HelpCircle },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <header className="lg:hidden sticky top-0 z-30 bg-background border-b">
        <div className="flex items-center justify-between p-4">
          <h1 className="font-bold text-lg">Pro Dashboard</h1>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Home className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-2 mt-8">
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    variant={activeTab === item.id ? 'default' : 'ghost'}
                    className="justify-start"
                    onClick={() => setActiveTab(item.id)}
                  >
                    <item.icon className="h-4 w-4 mr-2" />
                    {item.label}
                  </Button>
                ))}
                <Separator className="my-2" />
                <Button variant="ghost" className="justify-start" onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <div className="flex">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:flex flex-col w-64 border-r min-h-screen p-4">
          <div className="mb-8">
            <Link to="/" className="text-xl font-bold">AccessAble Pro</Link>
          </div>
          <nav className="flex flex-col gap-2 flex-1" aria-label="Pro Dashboard Navigation">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeTab === item.id ? 'default' : 'ghost'}
                className="justify-start"
                onClick={() => setActiveTab(item.id)}
                aria-current={activeTab === item.id ? 'page' : undefined}
              >
                <item.icon className="h-4 w-4 mr-2" />
                {item.label}
              </Button>
            ))}
          </nav>
          <Separator className="my-4" />
          <Button variant="ghost" className="justify-start" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-8">
          <div className="max-w-6xl mx-auto">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">
                    Welcome back, {proUserData?.organization || 'Pro User'}
                  </h2>
                  <p className="text-muted-foreground">
                    Manage your professional account and orders
                  </p>
                </div>

                {/* Account Manager Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>Your Account Manager</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="font-semibold">
                        {proUserData?.account_manager || 'Sarah Johnson'}
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="h-4 w-4" />
                        <a href="mailto:manager@accessible.com" className="hover:underline">
                          manager@accessible.com
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4" />
                        <span>1-800-XXX-XXXX</span>
                      </div>
                      <Button size="sm" className="mt-2">Contact</Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm font-medium">Total Orders This Year</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold">{orders.length}</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold">
                        ${orders.reduce((sum, order) => sum + Number(order.total_amount), 0).toFixed(2)}
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm font-medium">Average Order Value</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold">
                        ${orders.length > 0 ? (orders.reduce((sum, order) => sum + Number(order.total_amount), 0) / orders.length).toFixed(2) : '0.00'}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Orders */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Orders</CardTitle>
                    <CardDescription>Your last 5 orders</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {orders.length > 0 ? (
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead scope="col">Order #</TableHead>
                            <TableHead scope="col">Date</TableHead>
                            <TableHead scope="col">Total</TableHead>
                            <TableHead scope="col">Status</TableHead>
                            <TableHead scope="col">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {orders.slice(0, 5).map((order) => (
                            <TableRow key={order.id}>
                              <TableCell>{order.order_number}</TableCell>
                              <TableCell>
                                {new Date(order.created_at).toLocaleDateString()}
                              </TableCell>
                              <TableCell>${order.total_amount}</TableCell>
                              <TableCell>
                                <Badge variant="outline" className={getStatusColor(order.status)}>
                                  {order.status}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Button size="sm" variant="outline">View</Button>
                              </TableCell>
                            </TableRow>
                          ))}</TableBody>
                      </Table>
                    ) : (
                      <p className="text-center text-muted-foreground py-8">
                        No orders yet. Start shopping to see your orders here.
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Order History Tab */}
            {activeTab === 'orders' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Order History</h2>
                <Card>
                  <CardContent className="pt-6">
                    <div className="mb-4 flex gap-4">
                      <Input placeholder="Search by order number..." className="max-w-sm" />
                      <Button variant="outline">Filter</Button>
                    </div>
                    {orders.length > 0 ? (
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead scope="col">Order #</TableHead>
                            <TableHead scope="col">Date</TableHead>
                            <TableHead scope="col">Items</TableHead>
                            <TableHead scope="col">Total</TableHead>
                            <TableHead scope="col">Status</TableHead>
                            <TableHead scope="col">Invoice</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {orders.map((order) => (
                            <TableRow key={order.id}>
                              <TableCell>{order.order_number}</TableCell>
                              <TableCell>
                                {new Date(order.created_at).toLocaleDateString()}
                              </TableCell>
                              <TableCell>{JSON.parse(order.items).length} items</TableCell>
                              <TableCell>${order.total_amount}</TableCell>
                              <TableCell>
                                <Badge variant="outline" className={getStatusColor(order.status)}>
                                  {order.status}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Button size="sm" variant="ghost">
                                  <Download className="h-4 w-4" />
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}</TableBody>
                      </Table>
                    ) : (
                      <p className="text-center text-muted-foreground py-8">
                        No orders found.
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Reorder Tab */}
            {activeTab === 'reorder' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Reorder</h2>
                <Card>
                  <CardHeader>
                    <CardDescription>
                      Quickly reorder from your past purchases
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {orders.length > 0 ? (
                      <div className="space-y-4">
                        {orders.slice(0, 10).map((order) => (
                          <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                            <div>
                              <p className="font-semibold">{order.order_number}</p>
                              <p className="text-sm text-muted-foreground">
                                {new Date(order.created_at).toLocaleDateString()} - ${order.total_amount}
                              </p>
                            </div>
                            <Button>Reorder</Button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-center text-muted-foreground py-8">
                        No past orders to reorder.
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Invoices Tab */}
            {activeTab === 'invoices' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Invoices</h2>
                <Card>
                  <CardContent className="pt-6">
                    {orders.length > 0 ? (
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead scope="col">Order #</TableHead>
                            <TableHead scope="col">Date</TableHead>
                            <TableHead scope="col">Total</TableHead>
                            <TableHead scope="col">Status</TableHead>
                            <TableHead scope="col">Invoice</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {orders.map((order) => (
                            <TableRow key={order.id}>
                              <TableCell>{order.order_number}</TableCell>
                              <TableCell>
                                {new Date(order.created_at).toLocaleDateString()}
                              </TableCell>
                              <TableCell>${order.total_amount}</TableCell>
                              <TableCell>
                                <Badge variant="outline" className={getStatusColor(order.status)}>
                                  {order.status}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Button 
                                  size="sm" 
                                  variant="outline"
                                  onClick={() => handleDownloadInvoice(order.id)}
                                >
                                  <Download className="h-4 w-4 mr-2" />
                                  Download
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    ) : (
                      <p className="text-center text-muted-foreground py-8">
                        No invoices available. Place an order to see invoices here.
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Account Settings Tab */}
            {activeTab === 'settings' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Account Settings</h2>
                
                {/* Email Section */}
                <Card>
                  <CardHeader>
                    <CardTitle>Email Address</CardTitle>
                    <CardDescription>Manage your account email</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="flex gap-2">
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="flex-1"
                        />
                        <Button onClick={handleUpdateEmail} variant="outline">
                          Change Email
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Password Section */}
                <Card>
                  <CardHeader>
                    <CardTitle>Password</CardTitle>
                    <CardDescription>Update your password</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="flex gap-2">
                        <Input
                          id="password"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••"
                          className="flex-1"
                        />
                        <Button onClick={handleChangePassword} variant="outline">
                          Change Password
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Billing Address Section */}
                <Card>
                  <CardHeader>
                    <CardTitle>Billing Address</CardTitle>
                    <CardDescription>Your billing information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="billing-street">Street Address</Label>
                      <Input
                        id="billing-street"
                        value={billingAddress.street}
                        onChange={(e) => setBillingAddress({ ...billingAddress, street: e.target.value })}
                        placeholder="123 Main St"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="billing-city">City</Label>
                        <Input
                          id="billing-city"
                          value={billingAddress.city}
                          onChange={(e) => setBillingAddress({ ...billingAddress, city: e.target.value })}
                          placeholder="New York"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="billing-state">State</Label>
                        <Input
                          id="billing-state"
                          value={billingAddress.state}
                          onChange={(e) => setBillingAddress({ ...billingAddress, state: e.target.value })}
                          placeholder="NY"
                          maxLength={2}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="billing-zip">ZIP Code</Label>
                        <Input
                          id="billing-zip"
                          value={billingAddress.zip}
                          onChange={(e) => setBillingAddress({ ...billingAddress, zip: e.target.value })}
                          placeholder="10001"
                          maxLength={5}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Shipping Address Section */}
                <Card>
                  <CardHeader>
                    <CardTitle>Shipping Address</CardTitle>
                    <CardDescription>Your delivery address</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="shipping-street">Street Address</Label>
                      <Input
                        id="shipping-street"
                        value={shippingAddress.street}
                        onChange={(e) => setShippingAddress({ ...shippingAddress, street: e.target.value })}
                        placeholder="123 Main St"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="shipping-city">City</Label>
                        <Input
                          id="shipping-city"
                          value={shippingAddress.city}
                          onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
                          placeholder="New York"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="shipping-state">State</Label>
                        <Input
                          id="shipping-state"
                          value={shippingAddress.state}
                          onChange={(e) => setShippingAddress({ ...shippingAddress, state: e.target.value })}
                          placeholder="NY"
                          maxLength={2}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="shipping-zip">ZIP Code</Label>
                        <Input
                          id="shipping-zip"
                          value={shippingAddress.zip}
                          onChange={(e) => setShippingAddress({ ...shippingAddress, zip: e.target.value })}
                          placeholder="10001"
                          maxLength={5}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Notification Preferences Section */}
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>Manage how we communicate with you</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="order-updates"
                        checked={notificationPreferences.orderUpdates}
                        onCheckedChange={(checked) =>
                          setNotificationPreferences({
                            ...notificationPreferences,
                            orderUpdates: checked as boolean,
                          })
                        }
                      />
                      <Label htmlFor="order-updates" className="text-sm font-normal cursor-pointer">
                        Order updates - Receive notifications about your order status
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="invoice-notifications"
                        checked={notificationPreferences.invoiceNotifications}
                        onCheckedChange={(checked) =>
                          setNotificationPreferences({
                            ...notificationPreferences,
                            invoiceNotifications: checked as boolean,
                          })
                        }
                      />
                      <Label htmlFor="invoice-notifications" className="text-sm font-normal cursor-pointer">
                        Invoice notifications - Get notified when invoices are available
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="product-updates"
                        checked={notificationPreferences.productUpdates}
                        onCheckedChange={(checked) =>
                          setNotificationPreferences({
                            ...notificationPreferences,
                            productUpdates: checked as boolean,
                          })
                        }
                      />
                      <Label htmlFor="product-updates" className="text-sm font-normal cursor-pointer">
                        Product updates - Stay informed about new products and features
                      </Label>
                    </div>
                  </CardContent>
                </Card>

                {/* Save Changes Button */}
                <div className="flex justify-end">
                  <Button onClick={handleSaveSettings} size="lg">
                    Save Changes
                  </Button>
                </div>
              </div>
            )}

            {/* Support Tab Placeholder */}
            {activeTab === 'support' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Support</h2>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-center text-muted-foreground py-8">
                      Support feature coming soon.
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
