import { RotatingChevron } from "../../../images/icons/RotatingChevron";

export const UserButton = ({ isOpen, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="inline-flex justify-center items-center w-full rounded-md px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
  >
    Кабинет
    <RotatingChevron isOpen={isOpen} />
  </button>
);
