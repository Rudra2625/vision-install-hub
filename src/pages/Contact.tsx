
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        service: '',
        message: ''
      });
    }, 1500);
  };

  const faqItems = [
    {
      question: "How long does a typical installation take?",
      answer: "Most residential installations can be completed in a single day. Commercial installations may take 1-3 days depending on the system complexity and number of cameras."
    },
    {
      question: "Do you offer warranty on your products and services?",
      answer: "Yes, all our products come with manufacturer warranties, and we provide a 1-year warranty on our installation services."
    },
    {
      question: "Can I access my camera system remotely?",
      answer: "Yes, all our systems include mobile apps and web interfaces that allow you to view your cameras from anywhere with an internet connection."
    },
    {
      question: "Do you offer maintenance services for existing systems?",
      answer: "Yes, we provide maintenance and repair services for both systems we've installed and those installed by other companies."
    },
    {
      question: "What types of payment do you accept?",
      answer: "We accept all major credit cards, bank transfers, and cash payments. We also offer financing options for larger installations."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-primary-dark text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-gray-300 max-w-2xl">
              Have questions about our services or products? Reach out to our team for assistance.
            </p>
          </div>
        </div>
        
        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-highlight/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="text-highlight" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Our team is here to help with any questions.</p>
                <a href="tel:+1234567890" className="text-highlight font-medium hover:underline text-lg">
                  +1 (234) 567-890
                </a>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-highlight/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="text-highlight" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">Send us a message and we'll respond promptly.</p>
                <a href="mailto:info@visionsecure.com" className="text-highlight font-medium hover:underline text-lg">
                  info@visionsecure.com
                </a>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-highlight/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="text-highlight" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-4">Come see our showroom and product demos.</p>
                <p className="text-highlight font-medium text-lg">
                  123 Security St, Safetown
                </p>
              </div>
            </div>
            
            {/* Contact Form and Map */}
            <div className="flex flex-col lg:flex-row bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="lg:w-1/2 p-8 md:p-12">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input 
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <Label htmlFor="service">Service Interested In</Label>
                    <Select value={formData.service} onValueChange={handleSelectChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residential Installation</SelectItem>
                        <SelectItem value="commercial">Commercial Installation</SelectItem>
                        <SelectItem value="maintenance">Maintenance & Repair</SelectItem>
                        <SelectItem value="cables">Cable Installation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="mb-6">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or questions"
                      className="h-32"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full md:w-auto bg-highlight hover:bg-blue-700"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
              
              <div className="lg:w-1/2 bg-gray-100">
                <div className="h-[300px] lg:h-full">
                  {/* Maps iframe would go here in a real application */}
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <div className="text-center p-8">
                      <MapPin size={48} className="mx-auto mb-4 text-gray-600" />
                      <h3 className="text-xl font-bold mb-2">Our Location</h3>
                      <p className="text-gray-600">123 Security Street, Safetown, ST 12345</p>
                      <div className="mt-6 flex items-center justify-center gap-4">
                        <Clock size={20} className="text-gray-600" />
                        <div className="text-left">
                          <p className="text-sm font-medium">Mon-Fri: 9AM - 5PM</p>
                          <p className="text-sm font-medium">Sat: 10AM - 2PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find answers to commonly asked questions about our services and products.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {faqItems.map((item, index) => (
                <div key={index} className="mb-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold mb-3">{item.question}</h3>
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </div>
              ))}
              
              <div className="text-center mt-8">
                <p className="text-gray-600 mb-4">Don't see your question here?</p>
                <Button className="bg-primary-dark hover:bg-primary-light">
                  Contact Our Support Team
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
