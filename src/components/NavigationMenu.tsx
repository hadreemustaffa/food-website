import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxArchive, faSearch } from '@fortawesome/free-solid-svg-icons';

export const NavigationMenu = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (isExpanded && ref.current && !ref.current.contains(e.target as Node)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('click', handler);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, [isExpanded]);

  return (
    <>
      <nav className='flex flex-row'>
        <ul className='flex flex-row items-center gap-4'>
          <li>
            <Link to={'/explore'} onClick={() => setIsExpanded(false)}>
              <FontAwesomeIcon icon={faSearch} className='sm:hidden' />
              <span className='hidden text-white hover:underline sm:block'>Explore</span>
            </Link>
          </li>
          <li>
            <Link to={'/collection'} onClick={() => setIsExpanded(false)}>
              <FontAwesomeIcon icon={faBoxArchive} className='sm:hidden' />
              <span className='hidden text-white hover:underline sm:block'>Collection</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
