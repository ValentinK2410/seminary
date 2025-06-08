import { NavLink } from './NavLink';
import './MainNav.css'

export const MainNav = () => {
  return (
    <nav aria-label="Main navigation" className='h-full flex items-center justify-center' >
      <ul className="main_menu_items w-fit mx-auto">
        <NavLink name="Ресурсы" />
        <NavLink name="Курсы" />
        <NavLink name="Программы" />
        <NavLink name="Студентам" />
      </ul>
    </nav>
  );
};