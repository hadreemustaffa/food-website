import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import slugify from 'slugify';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface FormElements extends HTMLFormControlsCollection {
  queryInput: HTMLInputElement;
}
interface QueryFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export const SearchInput = () => {
  const [query, setQuery] = useState('');

  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<QueryFormElement>) {
    event.preventDefault();
    if (query === '') {
      return null;
    }
    navigate(`/search/${slugify(query)}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='mx-auto flex w-full max-w-xl flex-row justify-between rounded-sm border-[1px] border-tomato-300 py-2 pl-2'
    >
      <input
        type='search'
        name='query'
        id='searchInput'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setQuery(e.target.value);
        }}
        className='w-full border-none bg-black-transparent outline-none search-cancel:h-4 search-cancel:w-4 search-cancel:cursor-pointer search-cancel:appearance-none search-cancel:bg-[url(./xmark-solid.svg)] search-cancel:bg-center search-cancel:bg-no-repeat'
        placeholder='Search'
      />

      <button type='submit' className='px-2'>
        <FontAwesomeIcon icon={faSearch} className='text-tomato-200' />
      </button>
    </form>
  );
};
