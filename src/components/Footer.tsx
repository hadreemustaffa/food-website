import { Link } from 'react-router-dom';
import logo from '/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Button } from './Button';

const handleClick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const Footer = () => {
  return (
    <footer className='bg-black-950 text-white'>
      <div className='m-auto flex w-full max-w-7xl flex-row items-start justify-between gap-4 p-4 sm:p-8'>
        <div className='flex flex-col items-start gap-4'>
          <img className='h-8' src={logo} alt='' />

          <Button variant='secondary' value='Back to Top' onClick={handleClick}>
            <FontAwesomeIcon icon={faArrowUp} />
          </Button>
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
            >
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link
              to={'https://www.x.com/'}
              className='text-white hover:text-tomato-300'
            >
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link
              to={'https://www.instagram.com/'}
              className='text-white hover:text-tomato-300'
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
