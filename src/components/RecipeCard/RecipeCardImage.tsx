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

// for some results that does not contain image data in the JSON object
export const RecipeCardNoImage = () => {
  return (
    <>
      <img className='aspect-4/3 h-full w-full' src={fallbackSrc} />
    </>
  );
};
