import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, FileText, Calendar, CreditCard, GraduationCap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroGraduation from "@/assets/hero-graduation.jpg";

const admissionSteps = [
  { icon: FileText, title: "Submit Application", description: "Complete the online application form with your details" },
  { icon: Calendar, title: "Entrance Assessment", description: "Take our aptitude test to assess your readiness" },
  { icon: CheckCircle, title: "Interview", description: "Meet with our admissions team to discuss your goals" },
  { icon: CreditCard, title: "Enrollment", description: "Complete payment and registration for your program" },
];

const programs = [
  "Masonry & Construction",
  "Culinary Arts",
  "Computer Application",
  "Automobile Technology",
  "Tailoring & Fashion Design",
  "Tourism & Hospitality",
  "Accounting",
  "Food & Beverage Services",
];

const Admissions = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    previousSchool: "",
    program: "",
    level: "",
    parentName: "",
    parentPhone: "",
    statement: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Store in localStorage for admin panel demo
    const applications = JSON.parse(localStorage.getItem("applications") || "[]");
    const newApplication = {
      id: Date.now(),
      ...formData,
      status: "pending",
      submittedAt: new Date().toISOString(),
    };
    applications.push(newApplication);
    localStorage.setItem("applications", JSON.stringify(applications));

    toast({
      title: "Application Submitted!",
      description: "Thank you for your application. We will contact you soon.",
    });

    setFormData({
      firstName: "", lastName: "", email: "", phone: "", dateOfBirth: "", gender: "",
      address: "", previousSchool: "", program: "", level: "", parentName: "", parentPhone: "", statement: "",
    });
  };

  return (
    <>
      <Helmet>
        <title>Admissions | Apply to Lycée de Ruhango Ikirezi TSS</title>
        <meta name="description" content="Apply to Lycée de Ruhango Ikirezi Technical Secondary School. Start your journey towards a rewarding career in technical education." />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="relative h-[300px] md:h-[350px]">
          <img src={heroGraduation} alt="Graduation" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-background">
              <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">Admissions</h1>
              <p className="text-lg md:text-xl text-background/90">Start your journey to a successful career</p>
            </div>
          </div>
        </section>

        {/* Admission Process */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="section-title">
              <h2>Admission Process</h2>
              <p>Follow these simple steps to join our school</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {admissionSteps.map((step, index) => (
                <div key={index} className="bg-card p-6 rounded-xl shadow-soft text-center relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold font-poppins text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-20">
          <div className="container max-w-4xl">
            <div className="section-title">
              <h2>Student Application Form</h2>
              <p>Fill out the form below to apply for admission</p>
            </div>

            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl shadow-soft space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-bold font-poppins text-primary mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" /> Personal Information
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                  </div>
                  <div>
                    <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                    <Input id="dateOfBirth" name="dateOfBirth" type="date" value={formData.dateOfBirth} onChange={handleChange} required />
                  </div>
                  <div>
                    <Label>Gender *</Label>
                    <Select value={formData.gender} onValueChange={(val) => handleSelectChange("gender", val)}>
                      <SelectTrigger><SelectValue placeholder="Select gender" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="mt-4">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" name="address" value={formData.address} onChange={handleChange} placeholder="District, Sector, Cell" />
                </div>
              </div>

              {/* Academic Information */}
              <div>
                <h3 className="text-lg font-bold font-poppins text-primary mb-4">Academic Information</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="previousSchool">Previous School</Label>
                    <Input id="previousSchool" name="previousSchool" value={formData.previousSchool} onChange={handleChange} />
                  </div>
                  <div>
                    <Label>Program of Interest *</Label>
                    <Select value={formData.program} onValueChange={(val) => handleSelectChange("program", val)}>
                      <SelectTrigger><SelectValue placeholder="Select program" /></SelectTrigger>
                      <SelectContent>
                        {programs.map((prog) => (
                          <SelectItem key={prog} value={prog}>{prog}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Qualification Level *</Label>
                    <Select value={formData.level} onValueChange={(val) => handleSelectChange("level", val)}>
                      <SelectTrigger><SelectValue placeholder="Select level" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="level3">Level 3 (Certificate)</SelectItem>
                        <SelectItem value="level4">Level 4 (Certificate)</SelectItem>
                        <SelectItem value="level5">Level 5 (Advanced Certificate)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Parent/Guardian */}
              <div>
                <h3 className="text-lg font-bold font-poppins text-primary mb-4">Parent/Guardian Information</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="parentName">Parent/Guardian Name</Label>
                    <Input id="parentName" name="parentName" value={formData.parentName} onChange={handleChange} />
                  </div>
                  <div>
                    <Label htmlFor="parentPhone">Parent/Guardian Phone</Label>
                    <Input id="parentPhone" name="parentPhone" value={formData.parentPhone} onChange={handleChange} />
                  </div>
                </div>
              </div>

              {/* Personal Statement */}
              <div>
                <Label htmlFor="statement">Personal Statement</Label>
                <Textarea 
                  id="statement" 
                  name="statement" 
                  value={formData.statement} 
                  onChange={handleChange}
                  placeholder="Tell us why you want to study this program and your career goals..."
                  className="min-h-[120px]"
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Submit Application
              </Button>
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Admissions;
