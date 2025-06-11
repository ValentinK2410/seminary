import './NavLink.css';

export const NavLink = ({ name }) => {
  const linkId = name.toLowerCase().replace(/\s+/g, '-');

  return (
    <li>
      <a
        href={`#${linkId}`}
        className="nav-link relative text-center p-2 uppercase  text-gray-200 hover:text-white  focus:text-indigo-100 font-medium  tracking-wide transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-offset-4 focus:rounded"
        aria-current={window.location.hash === `#${linkId}` ? 'page' : undefined}
      >
        {name}
      </a>
    </li>
  );
};