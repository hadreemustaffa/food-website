import { useEffect, useState } from 'react';

interface RecipeCardImageProps {
  src: string;
  fallbackSrc: string;
  alt: string;
}

export const RecipeCardImage = ({
  src,
  fallbackSrc,
  alt,
}: RecipeCardImageProps) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [src]);

  return (
    <>
      <img
        className='w-full object-cover'
        src={error ? fallbackSrc : src}
        onError={() => setError(true)}
        alt={alt}
      />
    </>
  );
};
