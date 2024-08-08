import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { FeaturedSection } from './FeaturedSection';
import { RandomRecipe } from './RandomRecipe';
import { PopularSection } from './PopularSection';

export const Home = () => {
  return (
    <>
      <div>
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet="./hero-image-laptop.jpg"
            type="image/jpg"
          />
          <source
            media="(min-width: 1248px)"
            srcSet="./hero-image-desktop.jpg"
            type="image/jpg"
          />
          <img
            className="mix-blend-difference"
            src="./hero-image-mobile.jpg"
            alt=""
          />
        </picture>

        <div className="flex flex-col items-start bg-black-950 bg-opacity-80 gap-4 px-4 py-6">
          <h1 className="font-sans font-bold text-5xl leading-none">
            Quick & Easy Delights
          </h1>

          <p>
            Looking for a quick meal idea? Whether you are busy or just want
            something fast, here you will discover delicious options that
            require minimal prep or cook times. Make mealtime easy and
            enjoyable!
          </p>

          <Link to="/explore">
            <Button variant="primary" value="Explore Recipe" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-6 p-4">
        <RandomRecipe />
        <FeaturedSection />
        <PopularSection />
      </div>
    </>
  );
};
