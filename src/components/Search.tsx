import { useEffect, useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonIcon } from "./Button";
import { faArrowRight, faSearch } from "@fortawesome/free-solid-svg-icons";

export const Search = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        isExpanded &&
        ref.current &&
        !ref.current.contains(e.target as Node)
      ) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, [isExpanded]);

  const handleSearch = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div ref={ref}>
      <ButtonIcon onClick={handleSearch}>
        <FontAwesomeIcon
          icon={faSearch}
          className="text-tomato-200"
          onClick={handleSearch}
        />
      </ButtonIcon>

      {isExpanded && (
        <div className="absolute left-0 top-14 z-50 w-full">
          <div className="mx-4 flex flex-row justify-between overflow-hidden rounded-sm bg-black-950">
            <input
              type="text"
              name="search"
              id="searchInput"
              className="w-full border-2 border-tomato-200 bg-black-950 px-2"
            />
            <ButtonIcon className="bg-tomato-200">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="px-4 text-black-950"
              />
            </ButtonIcon>
          </div>
        </div>
      )}
    </div>
  );
};
