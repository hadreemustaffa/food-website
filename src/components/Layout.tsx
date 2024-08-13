import ScrollToTop from '../utils/ScrollToTop';
import { Footer } from './Footer';
import { Header } from './Header';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-6 pb-6">
        <Outlet />
        <ScrollToTop />
      </main>

      <Footer />
    </>
  );
};
