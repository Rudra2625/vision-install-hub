
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Camera, Cable } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: 'Residential CCTV Installation',
      description: 'Complete security camera systems designed specifically for homes, providing peace of mind and protection for your family and property.',
      features: [
        'Professional installation of up to 8 cameras',
        'DVR/NVR setup with 1TB-4TB storage',
        'Mobile app configuration for remote viewing',
        'Cable management and concealment',
        '1-year warranty on installation',
        'Training on system operation'
      ],
      icon: Camera,
      price: 'Starting at $299'
    },
    {
      id: 2,
      title: 'Commercial Security Systems',
      description: 'Comprehensive security solutions for businesses of all sizes, with multiple camera setups and advanced monitoring features.',
      features: [
        'Professional installation of 8-32 cameras',
        'Enterprise-grade NVR systems',
        'Remote monitoring setup with alerts',
        'Integration with existing security systems',
        'Staff training on security protocols',
        'Customized maintenance plans'
      ],
      icon: Camera,
      price: 'Starting at $599'
    },
    {
      id: 3,
      title: 'Maintenance & Repair Services',
      description: 'Keep your security system running optimally with our professional maintenance services and prompt repairs.',
      features: [
        'System diagnostics and troubleshooting',
        'Camera cleaning and repositioning',
        'Software updates and firmware upgrades',
        'Parts replacement and repairs',
        'System performance optimization',
        'Preventative maintenance plans available'
      ],
      icon: Camera,
      price: 'Starting at $149'
    },
    {
      id: 4,
      title: 'Custom Cable Installation',
      description: 'Professional installation of various cable types for your security system, ensuring reliable connectivity and optimal performance.',
      features: [
        'Coaxial cable installation',
        'Ethernet cable routing and termination',
        'Fiber optic cable installation',
        'Power cable management',
        'Weather-sealed connections',
        'Discreet cable concealment'
      ],
      icon: Cable,
      price: 'Starting at $199'
    },
  ];

  const process = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'We discuss your security needs and assess your property to determine the best camera placement and system requirements.'
    },
    {
      step: 2,
      title: 'Custom Proposal',
      description: 'We create a detailed proposal with recommended equipment, installation layout, and pricing options tailored to your needs.'
    },
    {
      step: 3,
      title: 'Professional Installation',
      description: 'Our certified technicians install your system with attention to detail, ensuring optimal coverage and discreet placement.'
    },
    {
      step: 4,
      title: 'System Configuration',
      description: 'We configure your system for optimal performance, including setting up remote viewing and notification alerts.'
    },
    {
      step: 5,
      title: 'Training & Support',
      description: 'We provide comprehensive training on how to use your system and ongoing support for any questions or issues.'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-primary-dark text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Professional CCTV Installation Services</h1>
            <p className="text-lg text-gray-300 max-w-2xl">
              Expert installation services for all types of security cameras and systems by certified technicians.
            </p>
          </div>
        </div>
        
        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-3 px-5 py-1.5 text-primary-dark border-primary-dark/30">Our Offerings</Badge>
              <h2 className="text-3xl font-bold mb-4">Comprehensive Installation Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We provide expert installation, maintenance, and repair services for all types of security camera systems.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div 
                  key={service.id} 
                  className="service-card bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 transition-all duration-300"
                >
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <service.icon size={24} className="text-highlight mr-3" />
                      <h3 className="text-xl font-bold">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle size={18} className="text-green-500 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="font-bold text-lg mb-6">{service.price}</div>
                    
                    <Button className="w-full bg-primary-dark hover:bg-primary-light">
                      Request Quote
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Process */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-3 px-5 py-1.5 text-primary-dark border-primary-dark/30">Our Process</Badge>
              <h2 className="text-3xl font-bold mb-4">How We Work</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our streamlined installation process ensures a smooth and efficient experience from consultation to completion.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {process.map((item, index) => (
                <div key={item.step} className={`flex ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                  <div className="w-1/4 flex justify-center">
                    <div className="relative">
                      <div className="h-full w-1 bg-highlight mx-auto"></div>
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-12 h-12 rounded-full bg-highlight flex items-center justify-center text-white font-bold text-lg">
                          {item.step}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`w-3/4 pb-12 ${index % 2 === 1 ? 'text-right pr-8' : 'pl-8'}`}>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary-dark to-primary-light py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Property?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote for your security camera installation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-primary-dark hover:bg-gray-100 px-8 py-3 text-lg">
                Get Free Consultation
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary-dark px-8 py-3 text-lg">
                View Our Products
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
