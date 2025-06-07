import { Navigation } from './features/navigation/Navigation';
import { Footer } from './features/footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-full w-full flex flex-col">
      <Navigation />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;