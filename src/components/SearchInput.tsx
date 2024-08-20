import { useEffect, useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonIcon } from "./Button";
import { faArrowRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import slugify from "slugify";

interface FormElements extends HTMLFormControlsCollection {
  queryInput: HTMLInputElement;
}
interface QueryFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export const SearchInput = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [query, setQuery] = useState("");

  const navigate = useNavigate();
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

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  function handleSubmit(event: React.FormEvent<QueryFormElement>) {
    event.preventDefault();
    navigate(`/search/${slugify(query)}`);
    setIsExpanded(false);
  }

  return (
    <div ref={ref}>
      <ButtonIcon onClick={handleToggle}>
        <FontAwesomeIcon icon={faSearch} className="text-tomato-200" />
      </ButtonIcon>

      {isExpanded && (
        <div className="absolute left-0 top-14 z-50 w-full">
          <form
            onSubmit={handleSubmit}
            className="mx-4 flex flex-row justify-between overflow-hidden rounded-sm bg-black-950"
          >
            <input
              type="search"
              name="query"
              id="searchInput"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setQuery(e.target.value);
              }}
              className="w-full border-2 border-tomato-200 bg-black-950 px-2"
              autoFocus
            />
            <button type="submit" className="bg-tomato-200">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="px-4 text-black-950"
              />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
