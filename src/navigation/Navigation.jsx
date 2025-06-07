import { i } from 'framer-motion/client';
import { Category } from './components/Category';
import { Logo } from './components/Logo'
import { MainNav } from './components/MainNav';
import { Search } from './components/Search';
import { SignIn } from './components/SignIn';
const Navigation = () => {

  return (
   <section>
    <Logo />
    <Category />
    <MainNav />
    <Search />
    <SignIn />
   </section>
  );
};

export default Navigation;
