import Link from 'next/link';
import type { FoodItem } from '@/types';

// Static food data for SSG
const foodItems: FoodItem[] = [
  {
    id: 1,
    name: 'Classic Burger',
    description: 'Juicy beef patty with fresh vegetables and special sauce',
    price: 8.99,
    image: '🍔',
    category: 'Burgers',
  },
  {
    id: 2,
    name: 'Margherita Pizza',
    description: 'Fresh mozzarella, tomatoes, and basil on crispy crust',
    price: 12.99,
    image: '🍕',
    category: 'Pizza',
  },
  {
    id: 3,
    name: 'Caesar Salad',
    description: 'Crisp romaine lettuce with parmesan and croutons',
    price: 7.99,
    image: '🥗',
    category: 'Salads',
  },
  {
    id: 4,
    name: 'Sushi Roll',
    description: 'Fresh salmon and avocado rolled in seasoned rice',
    price: 14.99,
    image: '🍣',
    category: 'Sushi',
  },
  {
    id: 5,
    name: 'Chicken Wings',
    description: 'Crispy wings tossed in your choice of sauce',
    price: 9.99,
    image: '🍗',
    category: 'Appetizers',
  },
  {
    id: 6,
    name: 'Pasta Carbonara',
    description: 'Creamy pasta with bacon and parmesan cheese',
    price: 11.99,
    image: '🍝',
    category: 'Pasta',
  },
];

export default function Home() {
  return (
    <div className='min-h-screen'>
      {/* Hero Section with Parallax Effect */}
      <section className='relative h-screen flex items-center justify-center bg-gradient-to-br from-orange-500 to-red-600 text-white overflow-hidden'>
        <div className='absolute inset-0 bg-black/20'></div>
        <div className='relative z-10 text-center px-4 max-w-4xl mx-auto'>
          <h1 className='text-6xl md:text-8xl font-bold mb-6 animate-fade-in'>
            Welcome to QuickFood
          </h1>
          <p className='text-xl md:text-2xl mb-8 text-white/90'>
            Delicious food delivered to your doorstep in minutes
          </p>
          <Link
            href='/menu'
            className='inline-block px-8 py-4 bg-white text-orange-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105'
          >
            Order Now
          </Link>
        </div>
      </section>

      {/* About Section with Parallax */}
      <section className='py-20 bg-white dark:bg-zinc-900'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-4xl font-bold mb-6 text-gray-900 dark:text-white'>
                Why Choose QuickFood?
              </h2>
              <p className='text-lg text-gray-600 dark:text-gray-300 mb-4'>
                We&apos;re committed to bringing you the freshest ingredients and fastest delivery service in town.
              </p>
              <ul className='space-y-3 text-gray-700 dark:text-gray-400'>
                <li className='flex items-center gap-2'>
                  <span className='text-orange-600 text-xl'>✓</span>
                  Fresh ingredients daily
                </li>
                <li className='flex items-center gap-2'>
                  <span className='text-orange-600 text-xl'>✓</span>
                  30-minute delivery guarantee
                </li>
                <li className='flex items-center gap-2'>
                  <span className='text-orange-600 text-xl'>✓</span>
                  Wide variety of cuisines
                </li>
                <li className='flex items-center gap-2'>
                  <span className='text-orange-600 text-xl'>✓</span>
                  100% satisfaction guarantee
                </li>
              </ul>
            </div>
            <div className='text-center text-9xl'>
              🍽️
            </div>
          </div>
        </div>
      </section>

      {/* Food Menu Section */}
      <section className='py-20 bg-gray-50 dark:bg-black'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white'>
            Popular Dishes
          </h2>
          <p className='text-center text-gray-600 dark:text-gray-400 mb-12 text-lg'>
            Explore our most loved menu items
          </p>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {foodItems.map((item) => (
              <div
                key={item.id}
                className='bg-white dark:bg-zinc-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'
              >
                <div className='text-center text-8xl py-8 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20'>
                  {item.image}
                </div>
                <div className='p-6'>
                  <div className='text-sm text-orange-600 font-semibold mb-2'>
                    {item.category}
                  </div>
                  <h3 className='text-2xl font-bold mb-2 text-gray-900 dark:text-white'>
                    {item.name}
                  </h3>
                  <p className='text-gray-600 dark:text-gray-400 mb-4'>
                    {item.description}
                  </p>
                  <div className='flex items-center justify-between'>
                    <span className='text-2xl font-bold text-orange-600'>
                      ${item.price}
                    </span>
                    <button className='px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors'>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values Section with Parallax */}
      <section className='py-20 bg-gradient-to-br from-orange-600 to-red-700 text-white'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold text-center mb-12'>
            Our Commitment
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='text-center p-6'>
              <div className='text-6xl mb-4'>⚡</div>
              <h3 className='text-2xl font-bold mb-3'>Fast Delivery</h3>
              <p className='text-white/90'>
                Get your food delivered in 30 minutes or less, guaranteed.
              </p>
            </div>
            <div className='text-center p-6'>
              <div className='text-6xl mb-4'>🌟</div>
              <h3 className='text-2xl font-bold mb-3'>Quality Food</h3>
              <p className='text-white/90'>
                Only the freshest ingredients make it to your plate.
              </p>
            </div>
            <div className='text-center p-6'>
              <div className='text-6xl mb-4'>💯</div>
              <h3 className='text-2xl font-bold mb-3'>Best Service</h3>
              <p className='text-white/90'>
                Customer satisfaction is our top priority, always.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='py-8 bg-zinc-900 text-white text-center'>
        <p className='text-gray-400'>
          © 2024 QuickFood. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
