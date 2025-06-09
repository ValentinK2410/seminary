
import { SecondaryButton } from '../../componentLibrary/SecondaryButton'
import { LightBulb } from '../../images/LightBulb'
import mainPerson from '../../images/mainPerson.png'

export const Banner = () => {
  return (
    <section className='relative px-4 ux:px-6 sm:pt-0 pb-10 sm:pb-0 bg-indigo-25 flex flex-col'>
      <div className='EMPTY-DIV h-[70px] bg-indigo-25'></div>
      <div className='w-full max-w-7xl mx-auto flex justify-between items-center  flex-col  sm:flex-row-reverse gap-8 sm:gap-1'>
        <div className='w-full hidden sm:block sm:mt-10'>
          <img src={mainPerson} alt="main person" className='w-full' />
        </div>

        <div className='mt-5 mb-4 sm:mt-10 w-full space-y-8'>
          <article className='text-indigo-600 flex gap-4'>
            <LightBulb />
            <p>Возрастайте вместе с МБС!</p>
          </article>
          <h3 className='text-2xl sm:text-4xl xl:text-5xl text-indigo-900  max-w-[20ch]'>
            <span className='font-semibold '>От призвания к</span> созиданию церкви
          </h3>
          <p className='text-zinc-600 max-w-[60ch]'>
            Богословская семинария МБС предлагает образовательные возможности, которые помогут вам быть эффективными в вашем призвании и служении в церкви.
          </p>
          <SecondaryButton className=''>
            Просмотреть все курсы <span className="ml-2 transition-colors duration-200">→</span>
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}
