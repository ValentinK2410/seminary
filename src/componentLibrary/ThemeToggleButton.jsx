import { useTheme } from '../ThemeContext';

const ThemeToggleButton = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="p-2 bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-300 transition-colors"
      aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {isDarkMode ? (
        <svg
          className="w-6 h-6 fill-current text-yellow-300"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="2" x2="12" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="12" y1="20" x2="12" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="2" y1="12" x2="4" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="20" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ) : (
        <svg
          className="w-6 h-6 fill-current text-gray-200"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="moon-shadow">
              <feDropShadow dx="0.3" dy="0.3" stdDeviation="0.7" floodOpacity="0.3" />
            </filter>
          </defs>
          <circle cx="12" cy="12" r="10" filter="url(#moon-shadow)" />
          <circle cx="8" cy="8" r="1.5" fill="rgba(0,0,0,0.15)" />
          <circle cx="15" cy="14" r="2" fill="rgba(0,0,0,0.1)" />
          <circle cx="10" cy="16" r="1.2" fill="rgba(0,0,0,0.12)" />
          <circle cx="16" cy="9" r="1" fill="rgba(0,0,0,0.1)" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggleButton;