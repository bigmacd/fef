import { create } from 'zustand';

// Helper functions for localStorage
const loadCartFromStorage = () => {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem('cart-storage');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const saveCartToStorage = (items) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem('cart-storage', JSON.stringify(items));
  } catch (error) {
    console.error('Failed to save cart to localStorage:', error);
  }
};

export const useCartStore = create((set, get) => ({
  items: loadCartFromStorage(), // Array of { product_id, name, price, image, quantity }

  // Add item to cart or increase quantity if already exists
  addItem: (product) => {
    const items = get().items;
    const existingItem = items.find((item) => item.product_id === product.id);

    let newItems;
    if (existingItem) {
      // Increase quantity
      newItems = items.map((item) =>
        item.product_id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      // Add new item
      newItems = [
        ...items,
        {
          product_id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
        },
      ];
    }
    set({ items: newItems });
    saveCartToStorage(newItems);
  },

  // Remove item from cart
  removeItem: (productId) => {
    const newItems = get().items.filter((item) => item.product_id !== productId);
    set({ items: newItems });
    saveCartToStorage(newItems);
  },

  // Update item quantity
  updateQuantity: (productId, quantity) => {
    if (quantity <= 0) {
      get().removeItem(productId);
      return;
    }
    const newItems = get().items.map((item) =>
      item.product_id === productId ? { ...item, quantity } : item
    );
    set({ items: newItems });
    saveCartToStorage(newItems);
  },

  // Clear entire cart
  clearCart: () => {
    set({ items: [] });
    saveCartToStorage([]);
  },

  // Get total item count
  getItemCount: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },

  // Get total price
  getTotalPrice: () => {
    return get().items.reduce((total, item) => {
      const price = typeof item.price === 'number' ? item.price : parseFloat(item.price);
      return total + price * item.quantity;
    }, 0);
  },
}));
