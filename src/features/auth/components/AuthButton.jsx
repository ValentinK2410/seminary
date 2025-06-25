import { SecondaryButton } from '../../../componentLibrary/SecondaryButton';
import { useAuthStore } from '../store';
 

const AuthButton = ({ onOpenAuthModal }) => {
  const { isAuthenticated, logout } = useAuthStore();

  if (isAuthenticated) {
    return (

      <SecondaryButton
        onClick={logout}
        className="!py-1 px-3 h-full bg-slate-200 border-indigo-200"
      >
        Logout
      </SecondaryButton>

    );
  }

  return (
    <SecondaryButton
      onClick={onOpenAuthModal}
      className="!py-1 px-3 h-full bg-slate-200 border-indigo-200"
    >
      Вход
    </SecondaryButton>
  );
};

export default AuthButton;