import { useSearchParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchInput = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  return (
    <form
      id='search-form'
      role='search'
      method='get'
      action='/explore/search'
      className='mx-auto flex w-full max-w-xl flex-row justify-between rounded-sm border-[1px] border-tomato-300 py-2 pl-2'
    >
      <input
        type='search'
        name='q'
        id='q'
        aria-label='Search recipes'
        placeholder='Search'
        defaultValue={query}
        className='w-full border-none bg-black-transparent outline-none autofill:shadow-[inset_0_0_0px_1000px_white] search-cancel:h-4 search-cancel:w-4 search-cancel:cursor-pointer search-cancel:appearance-none search-cancel:bg-[url("/xmark-solid.svg")] search-cancel:bg-center search-cancel:bg-no-repeat'
      />

      <button type='submit' className='px-2' aria-label='search button'>
        <FontAwesomeIcon icon={faSearch} className='text-tomato-200' />
      </button>
    </form>
  );
};

export default SearchInput;
