import { useState } from 'react';
import { Logo } from '../../images/Logo';
import { LogoText } from './components/LogoText';
import { MainNav } from './components/MainNav';
import { Menu, X } from 'lucide-react';
import './Navigation.css';
import CategoryMenuBtn from './components/CategoryMenuBtn';
import Search from '../../components/Search';

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className='fixed w-full px-4 ux:px-6 justify-between bg-white flex shadow z-10'>
    <div className='w-full mx-auto max-w-7xl flex items-center'>
      <div className='w-full max-w-7xl mx-auto flex gap-4 justify-between items-center'>
        <article className='flex gap-1 items-center'>
          <Logo />
          <LogoText />
          <div className='category_menu_btn'>
            <CategoryMenuBtn />
          </div>
        </article>

<article className='desktop_menu_items flex-shrink-0'>
  <MainNav />
</article>

        <article className='search_in_navbar'>
          <Search />
        </article>

        {/* Hamburger Button */}
        <article className='hamburger-btn w-fit border border-indigo-600 rounded-md '>
            <button
              className='w-fit p-2 self-end'
              onClick={() => setMenuOpen(true)}
              aria-label='Open menu'
            >
              <Menu className='w-6 h-6 text-indigo-600' />
            </button>
        </article>
      </div>

      {/* наш side menu */}
      <div
        className={`side_menu_from_hamburger fixed top-0 right-0 h-full w-full max-w-sm bg-slate-200 shadow-lg z-50 transform transition-transform duration-300 ease-in-out 
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <button
          onClick={() => setMenuOpen(false)}
          aria-label='Close menu'
          className='absolute top-2 right-4 p-4'
        >
          <X className='w-6 h-6 text-gray-600' />
        </button>

        <article className='h-full justify-center flex flex-col gap-4 p-6'>
          <MainNav />
        </article>
      </div>

      {/* overlay, если не нужно, уберем */}
      {menuOpen && (
        <div
          className='overlay_with_side_menu fixed inset-0 bg-black bg-opacity-50 z-40'
          onClick={() => setMenuOpen(false)}
        />
      )}
    </div>
    </section>
  );
};
