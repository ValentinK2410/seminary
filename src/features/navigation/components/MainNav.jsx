import { NavLink } from './NavLink';

export const MainNav = () => {
  return (
    <nav aria-label="Main navigation h-full flex items-center justify-center " >
      <ul className="w-fit mx-auto flex flex-col md:flex-row gap-10 md:gap-2">
        <NavLink name="Ресурсы" />
        <NavLink name="Курсы" />
        <NavLink name="Программы" />
        <NavLink name="Студентам" />
      </ul>
    </nav>
  );
};