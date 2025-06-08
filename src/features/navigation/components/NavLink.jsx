import './NavLink.css';

export const NavLink = ({ name }) => {
  const linkId = name.toLowerCase().replace(/\s+/g, '-');

  return (
    <li>
      <a
        href={`#${linkId}`}
        className="nav-link relative p-2 uppercase  text-gray-500 hover:text-gray-800  focus:text-indigo-600 font-medium  tracking-wide transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-4 focus:rounded"
        aria-current={window.location.hash === `#${linkId}` ? 'page' : undefined}
      >
        {name}
      </a>
    </li>
  );
};