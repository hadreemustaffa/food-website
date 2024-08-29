import ScrollToTop from '../utils/ScrollToTop';
import { Footer } from './Footer';
import { Header } from './Header';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Header />
      <main className='mx-auto grid w-full grid-cols-1 justify-center gap-6 p-4 sm:grid-cols-2 sm:p-8 md:grid-cols-3 lg:max-w-7xl lg:grid-cols-4'>
        <Outlet />
        <ScrollToTop />
      </main>

      <Footer />
    </>
  );
};
