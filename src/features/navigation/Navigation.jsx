import { useState } from 'react';
import { Logo } from '../../images/Logo';
import { LogoText } from './components/LogoText';
import { MainNav } from './components/MainNav';
import { SignIn } from './components/SignIn';
import { Menu, X } from 'lucide-react';
import './Navigation.css';

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className='px-2 md:px-6 flex items-center'>
      <div className='w-full max-w-7xl mx-auto flex gap-4 justify-between items-center'>
        <Logo />
        <LogoText />
        <div className='desktop_menu_items'>
          <MainNav />
        </div>
        <article className='w-full ml-auto sm:w-fit flex gap-4 items-center'>
          <SignIn />

          {/* Hamburger Button */}
          <div className='hamburger-btn w-fit border border-indigo-600 rounded-md flex ml-auto mr-2 md:hidden'>
            <button
              className='w-fit p-2 self-end'
              onClick={() => setMenuOpen(true)}
              aria-label='Open menu'
            >
              <Menu className='w-6 h-6 text-indigo-600' />
            </button>
          </div>
        </article>
      </div>

      {/* наш side menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-slate-200 shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden
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

        <div className='h-full justify-center flex flex-col gap-4 p-6'>
          <MainNav />
        </div>
      </div>

      {/* overlay, если не нужно, уберем */}
      {menuOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden'
          onClick={() => setMenuOpen(false)}
        />
      )}
    </section>
  );
};
