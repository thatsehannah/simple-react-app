import { FormEvent } from 'react';
import { NavLink, Link, useSearchParams } from 'react-router-dom';
import logo from './logo.svg';

export const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get('search') as string;
    setSearchParams({ search });
  };

  return (
    <header className='text-center text-slate-50 bg-slate-900 h-40 p-5'>
      <form
        className='relative text-right'
        onSubmit={handleSearchSubmit}
      >
        <input
          type='search'
          name='search'
          placeholder='Search'
          defaultValue={searchParams.get('search') ?? ''}
          className='absolute right-0 top-0 rounded py-2 px-3 text-gray-700'
        />
      </form>
      <Link to=''>
        <img
          src={logo}
          alt='Logo'
          className='inline-block h-20'
        />
      </Link>
      <Link to=''>
        <h1 className='inline-block h-20'>React Tools</h1>
      </Link>
      <nav>
        <NavLink
          to='products'
          className={({ isActive }) =>
            `text-white no-underline p-1 pb-0.5 border-solid border-b-2 ${
              isActive ? 'border-white' : 'border-transparent'
            }`
          }
        >
          Products
        </NavLink>
      </nav>
    </header>
  );
};
