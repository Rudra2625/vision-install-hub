
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      bio: '15+ years of experience in security systems installation and business management.'
    },
    {
      name: 'Sarah Johnson',
      position: 'Technical Director',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      bio: 'Certified security systems engineer with expertise in advanced CCTV configurations.'
    },
    {
      name: 'Mike Williams',
      position: 'Lead Installer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      bio: '10+ years of hands-on experience in camera installations for residential and commercial properties.'
    },
    {
      name: 'Lisa Chen',
      position: 'Customer Relations',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      bio: 'Dedicated to ensuring exceptional customer experience throughout your security installation journey.'
    },
  ];

  const values = [
    {
      title: 'Quality',
      description: 'We never compromise on the quality of our products and services.'
    },
    {
      title: 'Integrity',
      description: 'We operate with honesty and transparency in all our business dealings.'
    },
    {
      title: 'Expertise',
      description: 'Our team is highly trained and certified in security system installation.'
    },
    {
      title: 'Customer Focus',
      description: 'We prioritize our customers' needs and satisfaction above all else.'
    },
  ];

  const testimonials = [
    {
      quote: "The team at VisionSecure did an exceptional job installing our home security system. Professional, courteous, and extremely knowledgeable. Highly recommended!",
      author: "Robert T., Homeowner",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "As a business owner, security is my top priority. VisionSecure provided a comprehensive solution that gives me peace of mind knowing my property is protected 24/7.",
      author: "Maria L., Business Owner",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "The installation was quick and clean, and the technicians were very helpful in explaining how to use the system. Excellent service from start to finish!",
      author: "David K., Property Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-primary-dark text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About VisionSecure</h1>
            <p className="text-lg text-gray-300 max-w-2xl">
              Bringing professional security solutions and expert installation services to homes and businesses since 2010.
            </p>
          </div>
        </div>
        
        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <Badge variant="outline" className="mb-3 px-5 py-1.5 text-primary-dark border-primary-dark/30">Our Story</Badge>
                <h2 className="text-3xl font-bold mb-6">Security Is Our Passion</h2>
                <p className="text-gray-600 mb-6">
                  VisionSecure was founded in 2010 with a mission to provide high-quality security camera solutions at affordable prices. What started as a small operation has grown into a trusted name in the security industry, serving thousands of satisfied customers across the region.
                </p>
                <p className="text-gray-600 mb-6">
                  Our founder, John Smith, began his career as a security system installer and quickly realized there was a need for a company that combined quality products with expert installation services. This vision led to the creation of VisionSecure, where we prioritize customer satisfaction and security expertise above all else.
                </p>
                <p className="text-gray-600">
                  Today, we continue to grow while maintaining our commitment to excellent service, using only the highest quality products, and ensuring our customers feel secure in their homes and businesses.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80" 
                    alt="VisionSecure building" 
                    className="rounded-lg shadow-xl"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
                    <p className="font-bold text-lg mb-2">10+ Years in Business</p>
                    <p className="text-gray-600">Trusted by over 5,000 satisfied customers in residential and commercial sectors.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-3 px-5 py-1.5 text-primary-dark border-primary-dark/30">Our Values</Badge>
              <h2 className="text-3xl font-bold mb-4">What We Stand For</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our core values guide everything we do, from customer interactions to product selection and installation quality.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-highlight/10 rounded-full flex items-center justify-center mb-6">
                    <span className="text-highlight font-bold text-xl">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Meet the Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-3 px-5 py-1.5 text-primary-dark border-primary-dark/30">Our Team</Badge>
              <h2 className="text-3xl font-bold mb-4">Meet the Experts</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our team of certified professionals brings years of experience and dedication to every installation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
                  <div className="h-64 overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-highlight mb-4">{member.position}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-primary-dark text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-3 px-5 py-1.5 bg-white/10 text-white">Testimonials</Badge>
              <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Don't just take our word for it - here's what our customers have to say about our services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm p-8 rounded-lg">
                  <div className="mb-6">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-2xl">★</span>
                    ))}
                  </div>
                  <p className="mb-6 text-lg italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button className="bg-highlight hover:bg-blue-700 px-8 py-3 text-lg">
                Read More Reviews
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-primary-dark to-primary-light rounded-lg overflow-hidden shadow-xl">
              <div className="p-8 md:p-12 text-center text-white">
                <h2 className="text-3xl font-bold mb-6">Ready to Enhance Your Security?</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                  Contact us today to schedule a consultation with our security experts.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-white text-primary-dark hover:bg-gray-100 px-8 py-3 text-lg">
                    Get Free Quote
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary-dark px-8 py-3 text-lg">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
