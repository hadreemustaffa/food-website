import { Link } from 'react-router-dom';
import { ButtonIcon } from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  const handleSearch = () => {};
  const handleToggle = () => {};

  return (
    <header className="bg-black-950 flex flex-col items-center">
      <div className="w-full flex flex-row items-center justify-between p-4">
        <Link to="/">
          <img className="h-5" src="./logo.svg" alt="" />
        </Link>

        <div className="flex flex-row gap-4">
          <ButtonIcon onClick={handleSearch}>
            <FontAwesomeIcon
              icon={faSearch}
              className="text-tomato-200"
              onClick={handleSearch}
            />
          </ButtonIcon>

          <ButtonIcon onClick={handleToggle}>
            <FontAwesomeIcon
              icon={faBars}
              className="text-tomato-200"
              onClick={handleToggle}
            />
          </ButtonIcon>
        </div>
      </div>
    </header>
  );
};
