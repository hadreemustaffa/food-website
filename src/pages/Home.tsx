import React from 'react';

import { Header } from '../components/Header';

export const Home = () => {
  return (
    <>
      <Header />

      <main>
        <h1 className="font-sans font-bold text-5xl">This is the Homepage</h1>
      </main>
      {/* <Footer /> */}
    </>
  );
};
