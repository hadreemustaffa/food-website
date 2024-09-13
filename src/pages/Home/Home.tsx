import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@components/Button/Button';
import { CardListLoader } from '@components/Skeleton/Skeleton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExplosion } from '@fortawesome/free-solid-svg-icons';

const LazyFeatured = lazy(() => import('./Featured/Featured'));
const LazyPopular = lazy(() => import('./Popular/Popular'));
const LazyRandom = lazy(() => import('./Random/Random'));

export const Home = () => {
  return (
    <>
      <div className='relative col-span-full flex flex-col gap-6 overflow-hidden rounded-sm shadow-black-100 sm:shadow-sm'>
        <picture>
          <source
            media='(min-width: 576px)'
            srcSet='./hero-image-laptop.jpg'
            type='image/jpg'
          />
          <source
            media='(min-width: 1248px)'
            srcSet='./hero-image-desktop.jpg'
            type='image/jpg'
          />
          <img
            className='aspect-video object-cover'
            src='./hero-image-mobile.jpg'
            alt=''
          />
        </picture>

        <div className='flex flex-col justify-end gap-4 md:absolute md:h-full md:w-1/3 md:bg-opacity-5 md:bg-gradient-to-r md:from-black-950 md:to-black-transparent md:p-8 md:pr-0 md:text-white lg:w-1/2 lg:justify-center'>
          <h1 className='text-4xl font-bold leading-none md:text-5xl md:leading-tight'>
            QUICK & EASY DELIGHTS
          </h1>
          <Link to='/explore'>
            <Button variant='primary' value='EXPLORE RECIPES'>
              <FontAwesomeIcon icon={faExplosion} />
            </Button>
          </Link>
        </div>
      </div>

      <Suspense fallback={<CardListLoader itemCount={4} />}>
        <LazyRandom />

        <LazyFeatured />

        <LazyPopular />
      </Suspense>
    </>
  );
};
