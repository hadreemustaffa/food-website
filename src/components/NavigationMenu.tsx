import { useEffect, useRef, useState } from 'react';
import { ButtonIcon } from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const NavigationMenu = () => {
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

  return (
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
  );
};
