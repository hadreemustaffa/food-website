import { Header } from '../components/Header';
import { Featured } from '../components/Featured';
import { RandomRecipe } from '../components/RandomRecipe';
import { Recommended } from '../components/Recommended';

export const Home = () => {
  return (
    <>
      <Header />

      <main className="flex flex-col gap-6 p-4">
        <Featured />
        <RandomRecipe />
        <Recommended />
      </main>
      {/* <Footer /> */}
    </>
  );
};
