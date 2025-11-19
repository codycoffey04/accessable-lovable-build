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

  useEffect(() => {
    if (user) {
      fetchProUserData();
      fetchOrders();
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

            {/* Other tabs placeholder */}
            {(activeTab === 'settings' || activeTab === 'support') && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold capitalize">{activeTab}</h2>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-center text-muted-foreground py-8">
                      {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} feature coming soon.
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
