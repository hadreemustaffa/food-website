import fallbackSrc from '/image-fallback.svg';
interface RecipeCardImageProps {
  src: string;
  alt: string;
}

export const RecipeCardImage = ({ src, alt }: RecipeCardImageProps) => {
  return (
    <>
      <img
        className='h-full w-full object-cover'
        src={src}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = fallbackSrc;
          currentTarget.style.width = '35%';
          currentTarget.style.marginInline = 'auto';
          currentTarget.style.paddingBlock = '1rem';
        }}
        alt={alt}
      />
    </>
  );
};
