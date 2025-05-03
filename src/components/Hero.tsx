
import { Button } from '@/components/ui/button';
import { Camera } from 'lucide-react';

const Hero = () => {
  return (
    <div className="hero-pattern text-white">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <div className="mb-4 flex items-center">
              <Camera size={24} className="text-highlight mr-2" />
              <span className="text-highlight font-medium">Professional CCTV Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Secure Your Property with Advanced Camera Systems
            </h1>
            <p className="text-gray-300 text-xl mb-8 max-w-lg">
              We provide top-quality CCTV cameras, cables, and professional installation services for homes and businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-highlight hover:bg-blue-700 text-white px-8 py-6 text-lg">
                Get Free Quote
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary-dark px-8 py-6 text-lg">
                Explore Products
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-4">
                <img 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Customer" 
                  className="w-10 h-10 rounded-full border-2 border-primary-dark"
                />
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Customer" 
                  className="w-10 h-10 rounded-full border-2 border-primary-dark"
                />
                <img 
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Customer" 
                  className="w-10 h-10 rounded-full border-2 border-primary-dark"
                />
              </div>
              <div className="ml-4">
                <div className="font-medium">Trusted by 1000+ customers</div>
                <div className="text-sm text-gray-300">⭐⭐⭐⭐⭐ <span>(4.9/5 rating)</span></div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt="CCTV installation" 
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="text-white font-medium">Comprehensive Security Solutions</div>
                <div className="text-sm text-gray-300">Professional installation by certified technicians</div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-highlight text-white p-4 rounded-lg shadow-lg md:max-w-[250px]">
              <div className="text-lg font-bold mb-2">24/7 Support</div>
              <p className="text-sm">Our team is available around the clock to assist you with any issues.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
