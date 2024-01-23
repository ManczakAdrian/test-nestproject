export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
  }
  type DBData = {
    products: Product[];
  };
  
  export const db: DBData = {
    products: [
      {
        id: 'c5ec02c0-60c0-4a67-9614-6e64e8f7d343',
        name: 'Canon 50d',
        price: 1500,
        description: 'Classic camera for aspiring photographers',
    },
    {
      id: '4b2db7a8-00e7-4099-959d-30d846c9de08',
      name: 'Sony A7',
      price: 9000,
      description: 'Professional camera for professional photographers',
    },
    {
      id: '105224b7-9f2f-4a22-9e5f-fd4cd831af9e',
      name: 'Nikon D750',
      price: 8000,
      description: 'Small camera with big features',
    },
  ],
};

  
  