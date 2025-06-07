import { NavLink } from './NavLink';

export const MainNav = () => {
  return (
    <nav
      className="hidden md:flex gap-12 items-center"
      aria-label="Main navigation"
    >
      <ul className=" flex gap-6">
        <NavLink name="Ресурсы" />
        <NavLink name="Курсы" />
        <NavLink name="Программы" />
        <NavLink name="Студентам" />
      </ul>
    </nav>
  );
};