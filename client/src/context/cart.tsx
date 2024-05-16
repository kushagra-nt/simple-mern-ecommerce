import axios from 'axios';
import { ReactNode, createContext, useContext, useState } from 'react';
import { Product } from './products';
import { useToast } from '@/components/ui/use-toast';

export type UserInfo = {
  firstName: string,
  lastName: string,
  address: string
}

export type CartItem = {
  productInfo: Product,
  quantity: number
}

type ProductContentType = {
  items: CartItem[];
  setItems: React.Dispatch<React.SetStateAction<CartItem[]>>,
  placeOrder: (userInfo: UserInfo) => void,
  placingOrder: boolean
}

const CartContext = createContext<ProductContentType | undefined>(undefined);

const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [placingOrder, setPlacingOrder] = useState(false);

  const { toast } = useToast();

  const placeOrder = async (userInfo: UserInfo) => {
    try {
      setPlacingOrder(true);

      const response = await axios.post('http://localhost:5000/place-order', {
        ...userInfo,
        orderItems: items
      });

      toast({
        title: response.data ?? 'Order Placed Successfully',
      })

      setItems([]);

    } catch (error: any) {
      console.error('error placing order:', error);
      toast({
        title: 'Failed to place rrder',
      })
    } finally {
      setPlacingOrder(false);
    }
  };

  return (
    <CartContext.Provider value={{ items, placingOrder, setItems, placeOrder }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }

  return context;
}

export { CartContextProvider, useCart };
