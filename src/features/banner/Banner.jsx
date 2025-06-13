import { PrimaryButton } from '../../componentLibrary/PrimaryButton'
import { Logo } from '../../images/Logo';
import mainPerson from '../../images/mainPerson.png'

export const Banner = () => {
  return (
    <section className='relative px-6 ux:px-6 sm:px-20 sm:pt-0 pb-10 sm:pb-0 bg-indigo-25 flex flex-col'>
      
      <div className='EMPTY-DIV h-[70px] bg-indigo-25'></div>

      <div className='w-full max-w-7xl mx-auto flex justify-between items-center  flex-col  sm:flex-row-reverse gap-8 sm:gap-1'>
        <div className='w-full hidden sm:block sm:mt-10'>
          <img src={mainPerson} alt="main person" className='w-full' />
        </div>

        <main className='p-3 w-full flex flex-col sm:justify-between gap-2'>
          <div className='flex items-center lg:ml-[-20px] gap-3 sm:gap-6'>
            <article className='py-2 w-fit text-indigo-600 flex items-center min-w-20 ux:min-w-[100px] lg:min-w-52'>
              <Logo />
            </article>
            <h1 className='text-md ux:text-xl font-semibold  lg:text-3xl uppercase text-indigo-600 ux:space-y-1 lg:space-y-4'>
                <span className='block'>Московская</span>
                <span className='block'> Богословская</span>
                <span className='block'> семинария</span>
            </h1>
          </div>

          <p className='text-zinc-600 max-w-[60ch]'>
          Богословская семинария МБС предлагает образовательные возможности, которые помогут вам быть эффективными в вашем призвании и служении в церкви.
          </p>
          <PrimaryButton className='mt-6 self-center ux:self-start'>
              <span className='hidden  md:inline-block mr-1'> Просмотреть </span> Все Курсы <span className="ml-2 mt-1 transition-colors duration-200">→</span>
          </PrimaryButton>
        </main>
      </div>
    </section>
  );
};
