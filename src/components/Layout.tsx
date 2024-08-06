import { Header } from './Header';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <Outlet />
      </main>

      {/* <Footer /> */}
    </>
  );
};
