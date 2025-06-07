
import { Button } from '../compoLibrary/Button'
import LightBulb from '../images/LightBulb'
import mainPerson from '../images/mainPerson.png'

export const Banner = () => {
  return (
    <section className='px-6 pt-10 pb-10 md:pb-0 bg-indigo-25 flex'>
      <div className='mx-auto flex justify-between items-center
 flex-col md:flex-row gap-10'>
        <img src={mainPerson} alt="main person" className='lg:order-2' />
        <div className='space-y-8 md:order-1'>
          <article className='text-indigo-600 flex gap-4'>
            <LightBulb />
            <p>Возрастайте вместе с МБС!</p>
          </article>
          <h3 className='text-2xl sm:text-4xl xl:text-5xl text-indigo-900  max-w-[20ch]'>
            <span className='font-semibold '>От призвания к</span> созиданию церкви
          </h3>
          <p className='text-zinc-500 max-w-[60ch]'>
            Богословская семинария МБС предлагает образовательные возможности, которые помогут вам быть эффективными в вашем призвании и служении в церкви.
          </p>
          <Button className=''>
            Просмотреть все курсы 
          </Button>
        </div>
      </div>
    </section>
  )
}
