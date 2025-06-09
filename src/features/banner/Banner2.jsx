import { SecondaryButton } from '../../componentLibrary/SecondaryButton'
 
import { Logo } from '../../images/Logo';
import bigBgImage from '../../images/wallpaper3.jpg';

export const Banner2 = () => {
  return (
    <section
      className="w-full h-screen px-4 bg-blue-100 flex flex-col overflow-hidden"
    >
      {/* Flipped background layer */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bigBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'scaleX(-1)',
          zIndex: 0,
        }}
      ></div>

      {/* Foreground content */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center gap-10">
        <div className='border ux:border-0 p-3 w-full flex gap-2 items-center justify-center'>
          <article className='py-2 w-fit text-indigo-50 flex items-center justify-between min-w-20 ux:min-w-[140px] md:min-w-60'>
            <Logo />
          </article>
          <h1 className='text-xl ux:text-3xl  md:text-5xl uppercase text-indigo-50 ux:space-y-1 md:space-y-4'>
              <span className='block'>Московская</span>
              <span className='block'> Богословская</span>
              <span className='block'> семинария</span>
          </h1>
        </div>

        <div className='w-fit space-y-8 ux:max-w-[360px] md:max-w-[700px] flex flex-col'>
          <p className='text-zinc-100 max-w-[60ch] text-center md:text-left'>
            Богословская семинария МБС предлагает образовательные возможности, которые помогут вам быть эффективными в вашем призвании и служении в церкви и во всей галактике.
          </p>
          <SecondaryButton className='md:self-start w-full md:w-fit '>
           <span className='hidden ux:inline-block mr-1'> Просмотреть </span> Все Курсы <span className="ml-2 transition-colors duration-200">→</span>
          </SecondaryButton>
        </div>
        
      </div>
    </section>
  );
};
