import { ButtonIcon, ButtonPrimary } from './Buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  const handleSearch = () => {};
  const handleToggle = () => {};

  return (
    <header className="bg-black-950 flex flex-col items-center">
      <div className="w-full flex flex-row items-center justify-between p-4">
        <a href="/">
          <img className="h-5" src="./logo.svg" alt="" />
        </a>

        <div className="flex flex-row gap-4">
          <ButtonIcon onClick={handleSearch}>
            <FontAwesomeIcon icon={faSearch} className="text-tomato-200" />
          </ButtonIcon>

          <ButtonIcon onClick={handleToggle}>
            <FontAwesomeIcon icon={faBars} className="text-tomato-200" />
          </ButtonIcon>
        </div>
      </div>

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

          <ButtonPrimary value="Explore Recipes" />
        </div>
      </div>
    </header>
  );
};
