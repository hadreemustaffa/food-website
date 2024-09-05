import ScrollToTop from '../utils/ScrollToTop';
import { Footer } from './Footer';
import { Header } from './Header';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Header />
      <main className='mx-auto grid w-full grid-cols-auto-fill-225 justify-center gap-6 p-4 lg:max-w-7xl'>
        <Outlet />
        <ScrollToTop />
      </main>

      <Footer />
    </>
  );
};
