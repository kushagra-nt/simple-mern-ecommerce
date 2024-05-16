import axios from 'axios';
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

export type Product = {
  title: string,
  image: string,
  description: string,
  price: number,
  id: number
}

type ProductContentType = {
  products: Product[];
  loading: boolean;
  errorMessage: string
}


const ProductContext = createContext<ProductContentType | undefined>(undefined);

const ProductProvider = ({ children }: {children: ReactNode}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {

    const fetchProducts = async () => {
      try {
        setLoading(true);

        const response = await axios.get('http://localhost:5000/products');
        setProducts(response.data);

      } catch (error: any) {
        console.error('Failed to fetch products:', error);
        setErrorMessage(error?.message ?? 'Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, errorMessage }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }

  return context;
}

export { ProductProvider, useProducts };
