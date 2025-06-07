import { useState } from 'react';
import { Logo } from '../../images/Logo';
import { LogoText } from './components/LogoText';
import { MainNav } from './components/MainNav';
import { SignIn } from './components/SignIn';
import { Menu, X } from 'lucide-react';
import './Navigation.css'

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className='px-2 md:px-6 flex items-center'>
      <div className='w-full max-w-7xl mx-auto flex gap-4 justify-between items-center'>
        <Logo />
        <LogoText />
        <div className="desktop_menu_items">
          <MainNav />
        </div>
        <article className='w-full ml-auto sm:w-fit flex gap-4 items-center'>
          <SignIn />

          {/* Mobile menu toggle button */}
          <div className='hamburger-btn w-fit border border-indigo-600 rounded-md flex ml-auto'>
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

      {/* Mobile Side Menu */}
      {menuOpen && (
        <div className='fixed inset-0 z-50 bg-slate-200 shadow-lg flex flex-col p-4 transition-all md:hidden'>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label='Close menu'
              className='absolute top-2 right-2 p-2'
            >
              <X className='w-6 h-6 text-gray-600' />
            </button>
     
          <div className='h-full justify-center flex flex-col gap-4'>
            <MainNav /> {/* Optional: Replace with a mobile-optimized version */}
          </div>
        </div>
      )}
    </section>
  );
};
