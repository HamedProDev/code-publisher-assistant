import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Users, FileText, GraduationCap, TrendingUp, 
  Search, Filter, Eye, Check, X, Trash2,
  Home, Settings, LogOut, ChevronDown, Menu
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import schoolLogo from "@/assets/school-logo.png";

interface Application {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  program: string;
  level: string;
  status: "pending" | "approved" | "rejected";
  submittedAt: string;
  dateOfBirth?: string;
  gender?: string;
  address?: string;
  previousSchool?: string;
  parentName?: string;
  parentPhone?: string;
  statement?: string;
}

const Admin = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    loadApplications();
  }, []);

  const loadApplications = () => {
    const stored = localStorage.getItem("applications");
    if (stored) {
      setApplications(JSON.parse(stored));
    } else {
      // Demo data
      const demoApps: Application[] = [
        { id: 1, firstName: "Jean", lastName: "Mugabo", email: "jean@email.com", phone: "+250788123456", program: "Computer Application", level: "level4", status: "pending", submittedAt: "2024-12-15T10:30:00Z" },
        { id: 2, firstName: "Marie", lastName: "Uwamahoro", email: "marie@email.com", phone: "+250788234567", program: "Culinary Arts", level: "level3", status: "approved", submittedAt: "2024-12-14T14:20:00Z" },
        { id: 3, firstName: "Emmanuel", lastName: "Habimana", email: "emmanuel@email.com", phone: "+250788345678", program: "Automobile Technology", level: "level5", status: "pending", submittedAt: "2024-12-13T09:15:00Z" },
        { id: 4, firstName: "Diane", lastName: "Ingabire", email: "diane@email.com", phone: "+250788456789", program: "Tailoring & Fashion Design", level: "level3", status: "rejected", submittedAt: "2024-12-12T16:45:00Z" },
        { id: 5, firstName: "Patrick", lastName: "Niyonzima", email: "patrick@email.com", phone: "+250788567890", program: "Tourism & Hospitality", level: "level4", status: "pending", submittedAt: "2024-12-11T11:00:00Z" },
      ];
      localStorage.setItem("applications", JSON.stringify(demoApps));
      setApplications(demoApps);
    }
  };

  const updateApplicationStatus = (id: number, status: "approved" | "rejected") => {
    const updated = applications.map(app => 
      app.id === id ? { ...app, status } : app
    );
    setApplications(updated);
    localStorage.setItem("applications", JSON.stringify(updated));
  };

  const deleteApplication = (id: number) => {
    const updated = applications.filter(app => app.id !== id);
    setApplications(updated);
    localStorage.setItem("applications", JSON.stringify(updated));
  };

  const filteredApps = applications.filter(app => {
    const matchesSearch = 
      app.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.program.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || app.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: applications.length,
    pending: applications.filter(a => a.status === "pending").length,
    approved: applications.filter(a => a.status === "approved").length,
    rejected: applications.filter(a => a.status === "rejected").length,
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: "default" | "secondary" | "destructive" | "outline", label: string }> = {
      pending: { variant: "secondary", label: "Pending" },
      approved: { variant: "default", label: "Approved" },
      rejected: { variant: "destructive", label: "Rejected" },
    };
    const { variant, label } = variants[status] || variants.pending;
    return <Badge variant={variant}>{label}</Badge>;
  };

  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Lycée de Ruhango Ikirezi TSS</title>
      </Helmet>
      <div className="min-h-screen bg-background flex">
        {/* Sidebar */}
        <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0 lg:w-20"}`}>
          <div className="p-4 border-b border-border flex items-center gap-3">
            <img src={schoolLogo} alt="Logo" className="h-10 w-auto" />
            {sidebarOpen && (
              <div className="overflow-hidden">
                <h2 className="font-bold text-sm font-poppins text-primary truncate">Lycée de Ruhango</h2>
                <p className="text-xs text-muted-foreground">Admin Panel</p>
              </div>
            )}
          </div>
          
          <nav className="p-4 space-y-2">
            <Button variant="secondary" className="w-full justify-start gap-3">
              <FileText className="w-5 h-5" />
              {sidebarOpen && "Applications"}
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3">
              <Users className="w-5 h-5" />
              {sidebarOpen && "Students"}
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3">
              <GraduationCap className="w-5 h-5" />
              {sidebarOpen && "Programs"}
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3">
              <Settings className="w-5 h-5" />
              {sidebarOpen && "Settings"}
            </Button>
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
            <Link to="/">
              <Button variant="ghost" className="w-full justify-start gap-3">
                <Home className="w-5 h-5" />
                {sidebarOpen && "Back to Site"}
              </Button>
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <header className="h-16 bg-card border-b border-border flex items-center justify-between px-4 lg:px-8">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
                <Menu className="w-5 h-5" />
              </Button>
              <h1 className="text-xl font-bold font-poppins text-foreground">Student Applications</h1>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                A
              </div>
              <span className="hidden sm:block text-sm font-medium">Admin</span>
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </div>
          </header>

          {/* Dashboard Content */}
          <main className="p-4 lg:p-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { label: "Total Applications", value: stats.total, icon: FileText, color: "bg-primary" },
                { label: "Pending Review", value: stats.pending, icon: TrendingUp, color: "bg-warning" },
                { label: "Approved", value: stats.approved, icon: Check, color: "bg-success" },
                { label: "Rejected", value: stats.rejected, icon: X, color: "bg-destructive" },
              ].map((stat, i) => (
                <div key={i} className="bg-card rounded-xl p-5 shadow-soft">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold font-poppins text-foreground">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Search applications..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Applications Table */}
            <div className="bg-card rounded-xl shadow-soft overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Applicant</TableHead>
                      <TableHead className="hidden md:table-cell">Program</TableHead>
                      <TableHead className="hidden sm:table-cell">Level</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="hidden lg:table-cell">Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredApps.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center py-12 text-muted-foreground">
                          No applications found
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredApps.map((app) => (
                        <TableRow key={app.id}>
                          <TableCell>
                            <div>
                              <p className="font-medium text-foreground">{app.firstName} {app.lastName}</p>
                              <p className="text-sm text-muted-foreground">{app.email}</p>
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">{app.program}</TableCell>
                          <TableCell className="hidden sm:table-cell capitalize">{app.level.replace("level", "Level ")}</TableCell>
                          <TableCell>{getStatusBadge(app.status)}</TableCell>
                          <TableCell className="hidden lg:table-cell text-muted-foreground">
                            {new Date(app.submittedAt).toLocaleDateString()}
                          </TableCell>
                          <TableCell>
                            <div className="flex justify-end gap-1">
                              <Button variant="ghost" size="icon" onClick={() => setSelectedApp(app)} title="View">
                                <Eye className="w-4 h-4" />
                              </Button>
                              {app.status === "pending" && (
                                <>
                                  <Button variant="ghost" size="icon" onClick={() => updateApplicationStatus(app.id, "approved")} title="Approve" className="text-success hover:text-success">
                                    <Check className="w-4 h-4" />
                                  </Button>
                                  <Button variant="ghost" size="icon" onClick={() => updateApplicationStatus(app.id, "rejected")} title="Reject" className="text-destructive hover:text-destructive">
                                    <X className="w-4 h-4" />
                                  </Button>
                                </>
                              )}
                              <Button variant="ghost" size="icon" onClick={() => deleteApplication(app.id)} title="Delete" className="text-destructive hover:text-destructive">
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </div>
          </main>
        </div>

        {/* Application Detail Modal */}
        <Dialog open={!!selectedApp} onOpenChange={() => setSelectedApp(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="font-poppins">Application Details</DialogTitle>
            </DialogHeader>
            {selectedApp && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold font-poppins text-foreground">
                      {selectedApp.firstName} {selectedApp.lastName}
                    </h3>
                    <p className="text-muted-foreground">{selectedApp.email}</p>
                  </div>
                  {getStatusBadge(selectedApp.status)}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <p className="font-medium">{selectedApp.phone}</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Program</p>
                    <p className="font-medium">{selectedApp.program}</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Level</p>
                    <p className="font-medium capitalize">{selectedApp.level.replace("level", "Level ")}</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Submitted</p>
                    <p className="font-medium">{new Date(selectedApp.submittedAt).toLocaleString()}</p>
                  </div>
                  {selectedApp.dateOfBirth && (
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Date of Birth</p>
                      <p className="font-medium">{selectedApp.dateOfBirth}</p>
                    </div>
                  )}
                  {selectedApp.gender && (
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Gender</p>
                      <p className="font-medium capitalize">{selectedApp.gender}</p>
                    </div>
                  )}
                  {selectedApp.previousSchool && (
                    <div className="p-4 bg-muted rounded-lg sm:col-span-2">
                      <p className="text-sm text-muted-foreground mb-1">Previous School</p>
                      <p className="font-medium">{selectedApp.previousSchool}</p>
                    </div>
                  )}
                  {selectedApp.parentName && (
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Parent/Guardian</p>
                      <p className="font-medium">{selectedApp.parentName}</p>
                    </div>
                  )}
                  {selectedApp.parentPhone && (
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Parent Phone</p>
                      <p className="font-medium">{selectedApp.parentPhone}</p>
                    </div>
                  )}
                </div>

                {selectedApp.statement && (
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">Personal Statement</p>
                    <p className="text-foreground">{selectedApp.statement}</p>
                  </div>
                )}

                {selectedApp.status === "pending" && (
                  <div className="flex gap-3 pt-4 border-t">
                    <Button className="flex-1" onClick={() => { updateApplicationStatus(selectedApp.id, "approved"); setSelectedApp(null); }}>
                      <Check className="w-4 h-4 mr-2" /> Approve Application
                    </Button>
                    <Button variant="destructive" className="flex-1" onClick={() => { updateApplicationStatus(selectedApp.id, "rejected"); setSelectedApp(null); }}>
                      <X className="w-4 h-4 mr-2" /> Reject Application
                    </Button>
                  </div>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default Admin;
