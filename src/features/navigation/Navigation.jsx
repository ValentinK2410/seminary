import { useState } from 'react';
import { Logo } from '../../images/Logo';
import { LogoText } from './components/LogoText';
import { MainNav } from './components/MainNav';
import { Menu, X } from 'lucide-react';
import './Navigation.css';
import CategoryMenuBtn from './components/CategoryMenuBtn';
import Search from '../../components/Search';
import SignInModal from './components/SignInModal';
import { SecondaryButton } from '../../componentLibrary/SecondaryButton';

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const openAuthModal = () => {
    setAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setAuthModalOpen(false);
  };

  return (
    <section className='fixed w-full px-6 sm:px-20 justify-between bg-blue-700 flex shadow z-10'>
      <article className='mx-auto max-w-7xl w-full'>
        <div className='w-full flex items-center'>
        <div className='w-full mx-auto flex gap-4 justify-between items-center'>
          <article className='flex gap-1 items-center'> 
            <div className='py-2 w-fit text-indigo-50 flex items-center justify-between min-w-10'>
              <Logo />
            </div>
            <LogoText />
            <div className='category_menu_btn'>
              <CategoryMenuBtn />
            </div>
          </article>

          <article className='desktop_menu_items flex-shrink-0'>
            <MainNav />
          </article>

     

          <article className='flex gap-2'>
            <div className="parent_container w-full">
              <Search />
            </div>
            <div>
              <SecondaryButton  onClick={openAuthModal}
                className='!py-1 px-3 h-full border-white'
                >
                    Вход
              </SecondaryButton>
            </div>

            {/* Hamburger Button */}
            <div className='hamburger-btn w-fit border border-indigo-300 hover:bg-white rounded-md transition-colors duration-200 group'>
              <button
                className='w-fit px-2 py-1.5 self-end'
                onClick={() => setMenuOpen(true)}
                aria-label='Open menu'
              >
                <Menu className='w-6 h-6 text-indigo-300 group-hover:text-gray-600' />
              </button>
            </div>
          </article>
        </div>

        {/* Side Menu */}
        <div
          className={`side_menu_from_hamburger fixed top-0 right-0 h-full w-full max-w-sm bg-slate-700 shadow-lg z-50 transform transition-transform duration-300 ease-in-out 
            ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          <button
            onClick={() => setMenuOpen(false)}
            aria-label='Close menu'
            className='absolute top-2 right-4 p-4'
          >
            <X className='w-6 h-6 text-gray-100' />
          </button>

          <article className='h-full justify-center flex flex-col gap-4 p-6'>
            <MainNav />
          </article>
        </div>

        {/* Overlay */}
        {menuOpen && (
          <div
            className='overlay_with_side_menu fixed inset-0 bg-black bg-opacity-50 z-40'
            onClick={() => setMenuOpen(false)}
          />
        )}

        {/* Sign In Modal */}
        <SignInModal isOpen={authModalOpen} onClose={closeAuthModal} />
      </div>

      </article>
    </section>
  );
};