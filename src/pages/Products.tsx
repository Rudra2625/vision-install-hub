
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Products = () => {
  const categories = [
    { id: 1, name: 'Dome Cameras', count: 12 },
    { id: 2, name: 'Bullet Cameras', count: 15 },
    { id: 3, name: 'PTZ Cameras', count: 8 },
    { id: 4, name: 'Wireless Cameras', count: 10 },
    { id: 5, name: 'Hidden Cameras', count: 6 },
    { id: 6, name: 'Cables & Wires', count: 14 },
    { id: 7, name: 'DVRs & NVRs', count: 9 },
    { id: 8, name: 'Accessories', count: 22 },
  ];
  
  const products = [
    {
      id: 1,
      name: 'Pro HD Dome Camera',
      image: 'https://images.unsplash.com/photo-1595151378386-78b7e802b7d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      description: 'High-definition indoor dome camera with night vision and motion detection.',
      price: 129.99,
      category: 'Dome Cameras',
    },
    {
      id: 2,
      name: 'Outdoor Bullet Camera',
      image: 'https://images.unsplash.com/photo-1606230144116-136dbdb48a1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      description: 'Weather-resistant bullet camera with 4K resolution and wide-angle lens.',
      price: 179.99,
      category: 'Bullet Cameras',
    },
    {
      id: 3,
      name: 'PTZ Security Camera',
      image: 'https://images.unsplash.com/photo-1541687455716-9738d5d70e1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      description: 'Pan-tilt-zoom camera with 360° coverage and 30x optical zoom.',
      price: 249.99,
      category: 'PTZ Cameras',
    },
    {
      id: 4,
      name: 'Premium CCTV Cable',
      image: 'https://images.unsplash.com/photo-1605637465697-3467406cc4fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      description: 'High-quality coaxial cable for reliable video transmission.',
      price: 34.99,
      category: 'Cables & Wires',
    },
    {
      id: 5,
      name: 'Wireless IP Camera',
      image: 'https://images.unsplash.com/photo-1566843972142-a7fcb2c99fb7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      description: 'WiFi-enabled camera with cloud storage and smartphone app control.',
      price: 149.99,
      category: 'Wireless Cameras',
    },
    {
      id: 6,
      name: '8-Channel DVR System',
      image: 'https://images.unsplash.com/photo-1601388153273-9e1b23e2dd22?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      description: 'Digital video recorder with 2TB storage for multiple camera monitoring.',
      price: 299.99,
      category: 'DVRs & NVRs',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-primary-dark text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Security Camera Products</h1>
            <p className="text-lg text-gray-300 max-w-2xl">
              Browse our extensive collection of high-quality security cameras, cables, and accessories for all your surveillance needs.
            </p>
          </div>
        </div>
        
        {/* Product Listing */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row">
            {/* Sidebar */}
            <div className="lg:w-1/4 lg:pr-8 mb-8 lg:mb-0">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button className="flex items-center justify-between w-full hover:text-highlight transition-colors py-1">
                        <span>{category.name}</span>
                        <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
                
                <div className="border-t border-gray-200 my-6 pt-6">
                  <h3 className="font-bold text-lg mb-4">Price Range</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="price1" className="mr-2" />
                      <label htmlFor="price1">Under $100</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="price2" className="mr-2" />
                      <label htmlFor="price2">$100 - $200</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="price3" className="mr-2" />
                      <label htmlFor="price3">$200 - $300</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="price4" className="mr-2" />
                      <label htmlFor="price4">$300+</label>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 my-6 pt-6">
                  <h3 className="font-bold text-lg mb-4">Features</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="feature1" className="mr-2" />
                      <label htmlFor="feature1">Night Vision</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="feature2" className="mr-2" />
                      <label htmlFor="feature2">Motion Detection</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="feature3" className="mr-2" />
                      <label htmlFor="feature3">Wireless</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="feature4" className="mr-2" />
                      <label htmlFor="feature4">Weatherproof</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="feature5" className="mr-2" />
                      <label htmlFor="feature5">4K Resolution</label>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full mt-4">Apply Filters</Button>
              </div>
            </div>
            
            {/* Product Grid */}
            <div className="lg:w-3/4">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <span className="text-gray-600">Showing <span className="font-medium">6</span> of <span className="font-medium">96</span> products</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-600 mr-2">Sort by:</span>
                  <select className="border border-gray-300 rounded px-2 py-1">
                    <option>Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md camera-card transition-all duration-300 hover:shadow-xl">
                    <div className="h-48 overflow-hidden">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold">{product.name}</h3>
                        <Badge className="bg-blue-100 text-blue-800">
                          {product.category}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-xl">${product.price}</span>
                        <Button variant="outline" className="text-primary-dark border-primary-dark hover:bg-primary-dark hover:text-white">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <nav className="inline-flex">
                  <button className="px-3 py-1 border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 rounded-l-md">
                    Previous
                  </button>
                  <button className="px-3 py-1 border-t border-b border-gray-300 bg-white text-gray-600 hover:bg-gray-50">
                    1
                  </button>
                  <button className="px-3 py-1 border-t border-b border-gray-300 bg-highlight text-white">
                    2
                  </button>
                  <button className="px-3 py-1 border-t border-b border-gray-300 bg-white text-gray-600 hover:bg-gray-50">
                    3
                  </button>
                  <button className="px-3 py-1 border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 rounded-r-md">
                    Next
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
