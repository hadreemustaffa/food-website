const DetailedCardSkeleton = () => {
  return (
    <>
      <div className="w-full h-56 flex items-center justify-center bg-black-800 animate-pulse">
        <svg
          className="w-10 h-10 text-black-150"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      <div className="flex flex-col gap-4 p-4 bg-black-800 animate-pulse">
        <div className="h-6 w-full bg-black-150 rounded-sm"></div>
        <div className="flex flex-row flex-wrap  justify-between">
          <div className="flex flex-col gap-1">
            <div className="w-10 h-3 bg-black-150 rounded-sm"></div>
            <div className="h-[14px] bg-black-150 rounded-sm"></div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="w-10 h-3 bg-black-150 rounded-sm"></div>
            <div className="h-[14px] bg-black-150 rounded-sm"></div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="w-10 h-3 bg-black-150 rounded-sm"></div>
            <div className="h-[14px] bg-black-150 rounded-sm"></div>
          </div>
        </div>
      </div>
    </>
  );
};

const MinimalCardSkeleton = () => {
  return (
    <>
      <div className="w-full h-56 flex items-center justify-center bg-black-800 animate-pulse">
        <svg
          className="w-10 h-10 text-black-150"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      <div className="flex flex-col gap-4 p-4 bg-black-800 animate-pulse">
        <div className="h-6 w-full bg-black-150 rounded-sm"></div>
      </div>
    </>
  );
};

export const CardListLoader = ({ itemCount }: { itemCount: number }) => {
  return (
    <>
      {Array.from({ length: itemCount }).map((_, index) => (
        <li key={index} className="flex flex-col rounded-sm overflow-hidden">
          <MinimalCardSkeleton />
        </li>
      ))}
    </>
  );
};

export const CardLoader = () => {
  return (
    <>
      <div className="flex flex-col rounded-sm overflow-hidden">
        <DetailedCardSkeleton />
      </div>
    </>
  );
};
