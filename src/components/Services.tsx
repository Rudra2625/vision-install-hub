
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Residential Installation',
    description: 'Complete CCTV systems for homes with professional installation and setup.',
    features: [
      'HD Camera Installation',
      'DVR/NVR Setup',
      'Mobile App Configuration',
      'Cable Management'
    ],
    price: 'Starting at $299',
    image: '/placeholder.svg'
  },
  {
    id: 2,
    title: 'Commercial Security',
    description: 'Advanced security solutions for businesses with multiple camera setups.',
    features: [
      'Multi-Camera Systems',
      'Remote Monitoring Setup',
      'Staff Training',
      'Maintenance Plans'
    ],
    price: 'Starting at $599',
    image: '/placeholder.svg'
  },
  {
    id: 3,
    title: 'Maintenance & Repair',
    description: 'Keep your security system running optimally with our maintenance services.',
    features: [
      'System Diagnostics',
      'Camera Cleaning',
      'Software Updates',
      'Parts Replacement'
    ],
    price: 'Starting at $149',
    image: '/placeholder.svg'
  }
];

const Services = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-3 px-5 py-1.5 text-primary-dark border-primary-dark/30">Our Services</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Installation Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide expert installation and maintenance services for all types of security camera systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="service-card bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 transition-all duration-300"
            >
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle size={18} className="text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="font-bold text-lg mb-6">{service.price}</div>
                
                <Button className="w-full bg-primary-dark hover:bg-primary-light">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-primary-dark to-primary-light rounded-lg overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12 text-white">
              <h3 className="text-2xl font-bold mb-4">Need a Custom Security Solution?</h3>
              <p className="mb-6">
                We offer personalized security assessments and custom installation services tailored to your specific requirements.
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary-dark">
                Request Consultation
              </Button>
            </div>
            <div className="md:w-1/2 bg-white p-8 md:p-12">
              <h4 className="text-xl font-bold mb-4">Why Choose Our Services</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Certified Technicians</p>
                    <p className="text-gray-600 text-sm">All our installers are fully trained and certified.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Warranty Coverage</p>
                    <p className="text-gray-600 text-sm">All installations come with a comprehensive warranty.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Post-Installation Support</p>
                    <p className="text-gray-600 text-sm">Ongoing technical support for your system.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
