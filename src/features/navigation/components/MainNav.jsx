import { NavLink } from './NavLink';
import './MainNav.css';

export const MainNav = ({ onLinkClick }) => {
  return (
    <nav aria-label="Main navigation" className='h-full flex items-center justify-center'>
      <ul className="main_menu_items w-fit mx-auto">
        <NavLink name="Ресурсы" onClick={onLinkClick} />
        <NavLink name="Курсы" onClick={onLinkClick} />
        <NavLink name="Программы" onClick={onLinkClick} />
        <NavLink name="Контакты" onClick={onLinkClick} />
      </ul>
    </nav>
  );
};
