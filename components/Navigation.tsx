'use client';

import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { logout } from '@/store/authSlice';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const pathname = usePathname();

  const handleLogout = () => {
    dispatch(logout());
  };

  const isActive = (path: string) => pathname === path;

  return (
    <nav className='fixed top-0 left-0 right-0 bg-white dark:bg-zinc-900 shadow-md z-50'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          <Link href='/' className='text-2xl font-bold text-orange-600'>
            QuickFood
          </Link>
          
          <div className='flex items-center gap-6'>
            <Link
              href='/'
              className={`hover:text-orange-600 transition-colors ${
                isActive('/') ? 'text-orange-600 font-semibold' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              Home
            </Link>
            <Link
              href='/menu'
              className={`hover:text-orange-600 transition-colors ${
                isActive('/menu') ? 'text-orange-600 font-semibold' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              Menu
            </Link>
            <Link
              href='/upload-asset'
              className={`hover:text-orange-600 transition-colors ${
                isActive('/upload-asset') ? 'text-orange-600 font-semibold' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              Upload Asset
            </Link>
            
            {isAuthenticated ? (
              <div className='flex items-center gap-4'>
                <span className='text-gray-700 dark:text-gray-300'>
                  Welcome, {user?.name}
                </span>
                <button
                  onClick={handleLogout}
                  className='px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors'
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href='/login'
                className='px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors'
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
