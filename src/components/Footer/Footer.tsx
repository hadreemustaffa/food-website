import { Link } from 'react-router-dom';
import logo from '/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { ButtonIcon } from '@components/Button/Button';

const handleClick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const Footer = () => {
  return (
    <footer className='bg-black-950 text-white'>
      <div className='mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 p-4 text-center sm:flex-row sm:items-start sm:py-8 sm:text-left'>
        <div className='flex flex-col items-center gap-4 sm:items-start'>
          <Link to='/' aria-label='Homepage'>
            <img width={96} height={32} src={logo} alt='site logo' />
          </Link>

          <ButtonIcon
            onClick={handleClick}
            className='border-2 border-tomato-200 px-4 py-2'
            aria-label='Back to Top'
            title='Back to Top'
            icon={faArrowUp}
          />
        </div>

        <div className='flex flex-col gap-4'>
          <p className='font-bold'>Discover</p>

          <div className='flex flex-col gap-4'>
            <Link to={'/'} className='text-black-100 hover:underline'>
              Home
            </Link>
            <Link to={'/explore'} className='text-black-100 hover:underline'>
              Explore
            </Link>
            <Link to={'/collection'} className='text-black-100 hover:underline'>
              Collection
            </Link>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <p className='font-bold'>API</p>

          <div className='flex flex-col gap-4'>
            <a
              href='https://spoonacular.com/food-api'
              className='text-black-100 hover:underline'
            >
              Spoonacular
            </a>
            <a
              href='https://spoonacular.com/food-api/docs'
              className='text-black-100 hover:underline'
            >
              Documentation
            </a>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <p className='font-bold'>Socials</p>
          <div className='flex flex-row gap-4'>
            <Link
              to={'https://www.facebook.com/'}
              className='text-white hover:text-tomato-300'
              aria-label='facebook homepage'
            >
              <FontAwesomeIcon icon={faFacebook} className='h-4 w-4' />
            </Link>
            <Link
              to={'https://www.x.com/'}
              className='text-white hover:text-tomato-300'
              aria-label='twitter homepage'
            >
              <FontAwesomeIcon icon={faTwitter} className='h-4 w-4' />
            </Link>
            <Link
              to={'https://www.instagram.com/'}
              className='text-white hover:text-tomato-300'
              aria-label='instagram homepage'
            >
              <FontAwesomeIcon icon={faInstagram} className='h-4 w-4' />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
