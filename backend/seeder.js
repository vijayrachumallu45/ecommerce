const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const Product = require('./models/Product');
const Category = require('./models/Category');
const Order = require('./models/Order');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const categories = [
  {
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1498049860654-af1a5c566876?w=600&auto=format&fit=crop&q=60',
  },
  {
    name: 'Clothing',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&auto=format&fit=crop&q=60',
  },
  {
    name: 'Shoes',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60',
  },
  {
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=60',
  },
  {
    name: 'Home',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop&q=60',
  },
];

const products = [
  // Electronics (5)
  {
    name: 'Wireless Noise Canceling Headphones',
    description: 'Immersive sound quality with active noise cancellation, 30-hour battery life, and comfortable ear cushions.',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60',
    category: 'Electronics',
    stock: 25,
    rating: 4.8,
    numReviews: 42,
  },
  {
    name: 'Smartwatch Fitness Tracker',
    description: 'Tracks heart rate, sleep quality, daily steps, and workout sessions. Water-resistant with a crisp AMOLED display.',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=60',
    category: 'Electronics',
    stock: 40,
    rating: 4.6,
    numReviews: 35,
  },
  {
    name: 'Ultra Slim Laptop Stand',
    description: 'Ergonomic aluminum laptop stand with adjustable heights and heat dissipation design for maximum comfort.',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&auto=format&fit=crop&q=60',
    category: 'Electronics',
    stock: 50,
    rating: 4.5,
    numReviews: 19,
  },
  {
    name: 'Portable Bluetooth Speaker',
    description: 'Compact wireless speaker delivering rich bass and clear audio. IPX7 waterproof rating for poolside music.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&auto=format&fit=crop&q=60',
    category: 'Electronics',
    stock: 30,
    rating: 4.7,
    numReviews: 28,
  },
  {
    name: '4K Ultra HD Action Camera',
    description: 'Capture stunning 4K videos at 60fps with wide-angle lens, electronic image stabilization, and waterproof housing.',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&auto=format&fit=crop&q=60',
    category: 'Electronics',
    stock: 15,
    rating: 4.4,
    numReviews: 14,
  },

  // Clothing (5)
  {
    name: 'Classic Cotton Denim Jacket',
    description: 'Timeless denim jacket crafted from 100% premium cotton with button closures and side pockets.',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&auto=format&fit=crop&q=60',
    category: 'Clothing',
    stock: 20,
    rating: 4.7,
    numReviews: 31,
  },
  {
    name: 'Casual Slim Fit Hoodie',
    description: 'Soft fleece hoodie featuring a drawstring hood, kangaroo pocket, and ribbed cuffs for cozy everyday wear.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&auto=format&fit=crop&q=60',
    category: 'Clothing',
    stock: 45,
    rating: 4.6,
    numReviews: 22,
  },
  {
    name: 'Unisex Graphic Crewneck T-Shirt',
    description: 'Breathable combed cotton tee with stylish aesthetic print. Pre-shrunk fabric retains fit wash after wash.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=60',
    category: 'Clothing',
    stock: 60,
    rating: 4.3,
    numReviews: 18,
  },
  {
    name: 'Tailored Formal Blazer',
    description: 'Sharp slim-fit blazer ideal for business meetings and evening events. Features notch lapels and inner pockets.',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=60',
    category: 'Clothing',
    stock: 12,
    rating: 4.9,
    numReviews: 15,
  },
  {
    name: 'Comfort Fit Jogging Pants',
    description: 'Lightweight sports trousers with elastic waistband, drawstring, and secure zipped side pockets.',
    price: 32.99,
    image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&auto=format&fit=crop&q=60',
    category: 'Clothing',
    stock: 35,
    rating: 4.4,
    numReviews: 20,
  },

  // Shoes (4)
  {
    name: 'Red Athletic Running Sneakers',
    description: 'Lightweight cushioning with breathable mesh upper and durable rubber outsole for superior traction.',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60',
    category: 'Shoes',
    stock: 18,
    rating: 4.9,
    numReviews: 50,
  },
  {
    name: 'Classic White Leather Sneakers',
    description: 'Minimalist leather sneakers designed for effortless daily styling and long-lasting comfort.',
    price: 74.99,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop&q=60',
    category: 'Shoes',
    stock: 22,
    rating: 4.8,
    numReviews: 38,
  },
  {
    name: 'Hiking Trail Waterproof Boots',
    description: 'Rugged ankle boots with deep lugged soles and waterproof lining for mountain trails and muddy terrain.',
    price: 139.99,
    image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=600&auto=format&fit=crop&q=60',
    category: 'Shoes',
    stock: 10,
    rating: 4.7,
    numReviews: 16,
  },
  {
    name: 'Casual Slip-On Canvas Shoes',
    description: 'Easy slip-on design with padded collars and flexible rubber soles. Great for weekend leisure.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60',
    category: 'Shoes',
    stock: 40,
    rating: 4.2,
    numReviews: 25,
  },

  // Accessories (4)
  {
    name: 'Minimalist Leather Wristwatch',
    description: 'Sleek analog watch with genuine leather strap, stainless steel case, and Japanese quartz movement.',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&auto=format&fit=crop&q=60',
    category: 'Accessories',
    stock: 15,
    rating: 4.9,
    numReviews: 27,
  },
  {
    name: 'UV400 Polarized Sunglasses',
    description: 'Classic aviator style with lightweight metal frame and polarized UV protection lenses.',
    price: 25.99,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop&q=60',
    category: 'Accessories',
    stock: 50,
    rating: 4.5,
    numReviews: 33,
  },
  {
    name: 'Water-Resistant Travel Backpack',
    description: 'Spacious laptop backpack with anti-theft back pocket, USB charging port, and multi-tier storage compartments.',
    price: 54.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=60',
    category: 'Accessories',
    stock: 28,
    rating: 4.7,
    numReviews: 41,
  },
  {
    name: 'Genuine Leather Bifold Wallet',
    description: 'Compact wallet with RFID blocking technology, card slots, ID window, and dual currency compartments.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&auto=format&fit=crop&q=60',
    category: 'Accessories',
    stock: 35,
    rating: 4.6,
    numReviews: 21,
  },

  // Home (4)
  {
    name: 'Aromatherapy Essential Oil Diffuser',
    description: 'Ultrasonic cool mist humidifier with 7 LED ambient light colors and whisper-quiet operation.',
    price: 36.99,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&auto=format&fit=crop&q=60',
    category: 'Home',
    stock: 24,
    rating: 4.6,
    numReviews: 19,
  },
  {
    name: 'Ceramic Pour-Over Coffee Dripper Set',
    description: 'Artisanal ceramic coffee pot set with stainless steel filter for rich, full-bodied morning brews.',
    price: 42.99,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=60',
    category: 'Home',
    stock: 16,
    rating: 4.8,
    numReviews: 17,
  },
  {
    name: 'Modern Desk LED Lamp',
    description: 'Dimmable touch control desk lamp with 5 color modes, memory function, and integrated wireless phone charging pad.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&auto=format&fit=crop&q=60',
    category: 'Home',
    stock: 30,
    rating: 4.7,
    numReviews: 26,
  },
  {
    name: 'Soft Microfiber Throw Blanket',
    description: 'Plush, ultra-soft fleece throw blanket suitable for couches, beds, and chilly evening relaxation.',
    price: 22.99,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&auto=format&fit=crop&q=60',
    category: 'Home',
    stock: 40,
    rating: 4.5,
    numReviews: 30,
  },
];

const seedData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Category.deleteMany();
    await Order.deleteMany();

    console.log('Cleared existing database data...');

    // Create users (1 admin, 3 normal users)
    const adminUser = await User.create({
      name: 'ShopEase Admin',
      email: 'admin@shopease.com',
      password: 'adminpassword',
      phone: '+1 555-0199',
      address: '100 Admin Plaza, Suite 500, New York, NY 10001',
      role: 'admin',
    });

    const normalUser1 = await User.create({
      name: 'John Doe',
      email: 'user@shopease.com',
      password: 'userpassword',
      phone: '+1 555-0122',
      address: '123 Main Street, Apt 4B, Springfield, IL 62701',
      role: 'user',
    });

    const normalUser2 = await User.create({
      name: 'Emma Watson',
      email: 'emma@shopease.com',
      password: 'userpassword',
      phone: '+1 555-0177',
      address: '456 Oak Drive, Austin, TX 78701',
      role: 'user',
    });

    const normalUser3 = await User.create({
      name: 'Alex Johnson',
      email: 'alex@shopease.com',
      password: 'userpassword',
      phone: '+1 555-0144',
      address: '789 Pine Road, Seattle, WA 98101',
      role: 'user',
    });

    console.log('Seeded Users successfully');

    // Create categories
    await Category.insertMany(categories);
    console.log('Seeded Categories successfully');

    // Create products
    const seededProducts = await Product.insertMany(products);
    console.log('Seeded 22 Products successfully');

    // Create a sample order for normalUser1
    await Order.create({
      user: normalUser1._id,
      products: [
        {
          product: seededProducts[0]._id,
          name: seededProducts[0].name,
          price: seededProducts[0].price,
          quantity: 1,
          image: seededProducts[0].image,
        },
        {
          product: seededProducts[10]._id,
          name: seededProducts[10].name,
          price: seededProducts[10].price,
          quantity: 1,
          image: seededProducts[10].image,
        },
      ],
      totalAmount: seededProducts[0].price + seededProducts[10].price,
      shippingAddress: {
        address: normalUser1.address,
        phone: normalUser1.phone,
      },
      paymentMethod: 'Cash on Delivery',
      status: 'Processing',
    });

    console.log('Seeded Sample Order successfully');

    console.log('Database Seeding Complete!');
    process.exit(0);
  } catch (error) {
    console.error(`Seeding error: ${error.message}`);
    process.exit(1);
  }
};

seedData();
