import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

import { Button, ButtonIcon } from './Button';

import logo from '/logo.svg';

export const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearch = () => {};

  return (
    <header className="bg-black-950 flex flex-col items-center sticky top-0 z-50">
      <div className="w-full flex flex-row items-center justify-between p-4">
        <Link to="/">
          <img className="h-5" src={logo} alt="" />
        </Link>

        <div className="flex flex-row gap-4">
          <ButtonIcon onClick={handleSearch}>
            <FontAwesomeIcon
              icon={faSearch}
              className="text-tomato-200"
              onClick={handleSearch}
            />
          </ButtonIcon>

          <ButtonIcon onClick={() => setIsExpanded(!isExpanded)}>
            <FontAwesomeIcon icon={faBars} className="text-tomato-200" />
          </ButtonIcon>
        </div>

        {isExpanded && (
          <div className="flex flex-col items-end gap-4 fixed top-14 left-0 p-4 w-full bg-black-950">
            <Link to={'/explore'}>Explore</Link>
            <div className="w-full h-[1px] bg-tomato-200 bg-opacity-25"></div>
            <Link to={'/login'}>Login</Link>
            <Link to={'/register'}>Register</Link>
          </div>
        )}
      </div>
    </header>
  );
};
