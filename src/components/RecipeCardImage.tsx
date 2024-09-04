import { useEffect, useState } from 'react';

interface RecipeCardImageProps {
  src: string;
  fallbackSrc: string;
}

export const RecipeCardImage = ({ src, fallbackSrc }: RecipeCardImageProps) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [src]);

  return (
    <>
      {error ? (
        <img src={fallbackSrc} alt='' />
      ) : (
        <img
          className='h-full w-full object-cover'
          src={src}
          onError={() => setError(true)}
          alt=''
        />
      )}
    </>
  );
};
