
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const products = [
  {
    id: 1,
    name: 'Pro HD Dome Camera',
    image: 'https://images.unsplash.com/photo-1595151378386-78b7e802b7d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'High-definition indoor dome camera with night vision and motion detection.',
    price: 129.99,
    category: 'camera',
    featured: true
  },
  {
    id: 2,
    name: 'Outdoor Bullet Camera',
    image: 'https://images.unsplash.com/photo-1606230144116-136dbdb48a1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Weather-resistant bullet camera with 4K resolution and wide-angle lens.',
    price: 179.99,
    category: 'camera',
    featured: true
  },
  {
    id: 3,
    name: 'PTZ Security Camera',
    image: 'https://images.unsplash.com/photo-1541687455716-9738d5d70e1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Pan-tilt-zoom camera with 360° coverage and 30x optical zoom.',
    price: 249.99,
    category: 'camera',
    featured: false
  },
  {
    id: 4,
    name: 'Premium CCTV Cable',
    image: 'https://images.unsplash.com/photo-1605637465697-3467406cc4fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'High-quality coaxial cable for reliable video transmission.',
    price: 34.99,
    category: 'cable',
    featured: true
  }
];

const ProductShowcase = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-3 px-5 py-1.5 text-primary-dark border-primary-dark/30">Our Products</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Security Equipment</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our selection of high-quality CCTV cameras and accessories for complete security solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md camera-card transition-all duration-300 hover:shadow-xl">
              <div className="h-48 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold">{product.name}</h3>
                  <Badge className={product.category === 'camera' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}>
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
        
        <div className="text-center mt-12">
          <Button className="bg-primary-dark hover:bg-primary-light text-white px-8 py-6">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
