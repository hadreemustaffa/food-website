import React from 'react';
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
          <ButtonIcon
            onClick={handleSearch}
            children={<FontAwesomeIcon icon={faSearch} />}
          />
          <ButtonIcon
            onClick={handleToggle}
            children={<FontAwesomeIcon icon={faBars} />}
          />
        </div>
      </div>

      <div className="relative">
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
          <img src="./hero-image-mobile.jpg" alt="" />
        </picture>

        <div className="flex flex-col items-start gap-4 p-4">
          <h1 className="font-sans font-bold text-5xl">
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
