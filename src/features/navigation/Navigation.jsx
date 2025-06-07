import { Logo } from '../../images/Logo';
import { MainNav } from './components/MainNav';
import { SignIn } from './components/SignIn';

export const Navigation = () => {

  return (
   <section className='px-6 flex items-center'>
    <div className='w-full max-w-7xl mx-auto flex gap-5 justify-between items-center'>
      <Logo />
      <MainNav />
      <SignIn />
    </div>
   </section>
  );
};
