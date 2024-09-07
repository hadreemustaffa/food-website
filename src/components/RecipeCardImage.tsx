import fallbackSrc from '/image-fallback.svg';
interface RecipeCardImageProps {
  src: string;
  alt: string;
}

export const RecipeCardImage = ({ src, alt }: RecipeCardImageProps) => {
  return (
    <>
      <img
        className='aspect-4/3 h-full w-full object-cover'
        src={src}
        alt={alt}
      />
    </>
  );
};

export const RecipeCardNoImage = () => {
  return (
    <>
      <img className='mx-auto h-full p-4' src={fallbackSrc} />
    </>
  );
};
