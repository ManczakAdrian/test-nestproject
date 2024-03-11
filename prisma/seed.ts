import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

function getProducts() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
      name: 'Canon EOS 50D',
      price: 2000,
      description: 'Cheap, ideal for beginners',
    },
    {
      id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
      name: 'Canon EOS 5D',
      price: 5000,
      description: 'Professional camera, solid build',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
      name: 'Canon R',
      price: 3000,
      description: 'Professional camera, we technology',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17259',
      name: 'Nikon D50',
      price: 2000,
      description: 'Cheap, ideal for beginners',
    },
    {
      id: '01c7599d-318b-4b9f-baf7-51f3a936a2d4',
      name: 'Leica q2',
      price: 5000,
      description: 'Small, compact, innovative',
    },
  ];
}

function getClients() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17201',
      name: 'Alice Smith',
      address: 'Sunset Boulevard 34, Los Angeles',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17202',
      name: 'Bob Johnson',
      address: '456 Oak Street, San Francisco',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17203',
      name: 'Eve Wilson',
      address: '789 Pine Street, Seattle',
    },
  ];
}

function getOrders() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17260',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
      clientId: 'fd105551-0f0d-4a9f-bc41-c559c8a17203',
      address: '789 Pine Street, Seattle',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17261',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
      clientId: 'fd105551-0f0d-4a9f-bc41-c559c8a17202',
      address: '789 Pine Street, Seattle',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17262',
      productId: '01c7599d-318b-4b9f-baf7-51f3a936a2d4',
      clientId: 'fd105551-0f0d-4a9f-bc41-c559c8a17201',
      address: '789 Pine Street, Seattle',
    },
  ];
}

async function seed() {
  await db.product.deleteMany({});
  await db.client.deleteMany({});
  await db.order.deleteMany({});
  await Promise.all(
    getProducts().map((product) => {
      return db.product.create({ data: product });
    }),
  );
  await Promise.all(
    getClients().map((client) => {
      return db.client.create({
        data: client,
      });
    }),
  );
  await Promise.all(
    getOrders().map(({ clientId, productId, ...orderData }) => {
      return db.order.create({
        data: {
          ...orderData,
          product: {
            connect: { id: productId },
          },
          client: {
            connect: { id: clientId },
          },
        },
      });
    }),
  );
}

seed();