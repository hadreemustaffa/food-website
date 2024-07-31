import { Outlet } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      {/* <Header /> */}

      <main>
        <h1 className="font-sans font-bold text-5xl">This is the Homepage</h1>
        <Outlet />
      </main>

      {/* <Footer /> */}
    </>
  );
};
