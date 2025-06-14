import React from 'react';
import './MainNav.css';

export const MainNav = ({ onLinkClick }) => {
  return (
    <nav aria-label="Main navigation" className='h-full flex items-center justify-center'>
      <ul className="main_menu_items w-fit mx-auto">
        <li>
          <NavLink name="О нас" linkId="about-us" onClick={onLinkClick} />
        </li>
        <li>
          <NavLink name="Курсы" linkId="courses" onClick={onLinkClick} />
        </li>
        <li>
          <NavLink name="Программы" linkId="programs" onClick={onLinkClick} />
        </li>
        <li>
          <NavLink name="Контакты" linkId="contacts" onClick={onLinkClick} />
        </li>
      </ul>
    </nav>
  );
};

const NavLink = ({ name, linkId, onClick }) => {
  const handleClick = (event) => {
    event.preventDefault();
    if (typeof onClick === 'function') {
      onClick(linkId);
    }
    // 0ptional: scroll into view manually
    const target = document.getElementById(linkId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href={`#${linkId}`}
      onClick={handleClick}
      className="nav-link relative text-center p-2 uppercase text-gray-200 hover:text-white focus:text-indigo-100 font-medium tracking-wide transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-offset-4 focus:rounded"
      aria-current={window.location.hash === `#${linkId}` ? 'page' : undefined}
    >
      {name}
    </a>
  );
};
