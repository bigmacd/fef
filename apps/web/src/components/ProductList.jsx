import { useEffect, useState } from 'react';

export function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('ProductList: Component mounted, starting fetch');
    const fetchProducts = async () => {
      console.log('ProductList: Attempting to fetch products from /api/products');
      try {
        const response = await fetch('/api/products');
        console.log('ProductList: Fetch response received:', response.status, response.statusText);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('ProductList: Received data:', data);
        // The API returns { rows: [...products] }
        setProducts(data.rows || []);
        console.log('ProductList: Updated products state with:', data.rows || []);
        setError(null);
      } catch (e) {
        console.error('Error fetching products:', e);
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means this runs once on mount

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div className="text-red-600">{error}</div>;
  }

  return (
    <div>
      <h2 className="font-playfair text-3xl text-black dark:text-[#E5E5E5] mb-8">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            {console.log('Rendering product:', product)}
            {/* Product Image */}
            {product.image && (
              <div className="relative aspect-square mb-6 bg-white dark:bg-[#1E1E1E] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 dark:bg-black/10 dark:group-hover:bg-black/30"></div>
              </div>
            )}

            <div>
              <h3 className="font-playfair text-2xl md:text-3xl text-black dark:text-[#E5E5E5] mb-2 group-hover:text-[#7c5c2d] dark:group-hover:text-[#d4a574] transition-colors">
                {product.name}
              </h3>
              {product.price && (
                <p className="font-inter text-lg font-semibold text-[#7c5c2d] dark:text-[#d4a574] mb-4">
                  ${typeof product.price === 'number'
                    ? product.price.toFixed(2)
                    : parseFloat(product.price).toFixed(2)}
                </p>
              )}
              {product.description && (
                <p className="font-inter text-base leading-relaxed text-[#555] dark:text-[#B0B0B0] mb-6">
                  {product.description}
                </p>
              )}
              {/*<button className="w-full font-inter text-sm md:text-base text-white bg-[#7c5c2d] hover:bg-[#6b4f25] dark:bg-[#d4a574] dark:hover:bg-[#c89664] px-6 py-3 uppercase tracking-wide transition-colors">
                Order Now
              </button>*/}
            </div>
          </div>
        ))}
      </div>
      {products.length === 0 && (
        <p className="font-inter text-lg text-[#666] dark:text-[#B0B0B0]">
          No products found in the database.
        </p>
      )}
    </div>
  );
}
