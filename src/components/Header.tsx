import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

import { ButtonIcon } from './Button';

import logo from '/logo.svg';

export const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        isExpanded &&
        ref.current &&
        !ref.current.contains(e.target as Node)
      ) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('click', handler);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, [isExpanded]);

  const handleSearch = () => {};

  return (
    <>
      <header className="bg-black-950 flex flex-row items-center p-4 justify-between sticky top-0 z-50">
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

          <nav ref={ref}>
            <ButtonIcon
              id="navbarToggle"
              onClick={() => setIsExpanded(!isExpanded)}
              aria-controls="navMenu"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faBars} className="text-tomato-200" />
            </ButtonIcon>

            {isExpanded && (
              <ul
                id="navMenu"
                className="flex flex-col items-end justify-between absolute gap-4 top-12 left-0 p-4 w-full bg-black-950"
              >
                <li>
                  <Link to={'/explore'} onClick={() => setIsExpanded(false)}>
                    Explore
                  </Link>
                </li>
                <li>
                  <Link to={'/collection'} onClick={() => setIsExpanded(false)}>
                    Collection
                  </Link>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </header>
    </>
  );
};
