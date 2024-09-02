const DetailedCardSkeleton = () => {
  return (
    <>
      <div className='flex h-fit w-full animate-pulse flex-col rounded-sm bg-black-100 sm:h-48 sm:flex-row'>
        <div className='flex h-48 w-full animate-pulse flex-col bg-black-150 lg:w-1/3'>
          <svg
            className='m-auto h-10 w-10 text-black-100'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 20 18'
          >
            <path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
          </svg>
        </div>
        <div className='flex w-full flex-col justify-center gap-4 p-4 md:p-8'>
          <div className='h-6 w-full animate-pulse rounded-sm bg-black-150'></div>
          <div className='flex flex-row gap-4'>
            <div className='flex flex-col gap-1'>
              <div className='h-4 w-10 rounded-sm bg-black-150'></div>
              <div className='h-4 w-10 rounded-sm bg-black-150'></div>
            </div>
            <div className='flex flex-col gap-1'>
              <div className='h-4 w-10 rounded-sm bg-black-150'></div>
              <div className='h-4 w-10 rounded-sm bg-black-150'></div>
            </div>
            <div className='flex flex-col gap-1'>
              <div className='h-4 w-10 rounded-sm bg-black-150'></div>
              <div className='h-4 w-10 rounded-sm bg-black-150'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const MinimalCardSkeleton = () => {
  return (
    <>
      <div className='flex h-fit w-full max-w-56 animate-pulse flex-col rounded-sm bg-black-100 sm:h-56'>
        <div className='flex h-48 w-full animate-pulse flex-col bg-black-150'>
          <svg
            className='m-auto h-10 w-10 text-black-100'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 20 18'
          >
            <path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
          </svg>
        </div>
        <div className='flex w-full flex-col justify-center gap-4 p-4 md:p-8'>
          <div className='h-6 w-full animate-pulse rounded-sm bg-black-150'></div>
        </div>
      </div>
    </>
  );
};

export const CardListLoader = ({ itemCount }: { itemCount: number }) => {
  return (
    <>
      <ul className='grid grid-cols-auto-fill-225 gap-4'>
        {Array.from({ length: itemCount }).map((_, index) => (
          <li key={index} className='flex flex-col overflow-hidden rounded-sm'>
            <MinimalCardSkeleton />
          </li>
        ))}
      </ul>
    </>
  );
};

export const CardLoader = () => {
  return (
    <>
      <div className='flex flex-col overflow-hidden rounded-sm'>
        <DetailedCardSkeleton />
      </div>
    </>
  );
};
