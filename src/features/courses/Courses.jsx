import { LightBulb } from '../../images/LightBulb'

export const Courses = () => {
  return (
    <section className='px-6 py-20  flex flex-col'>
      <div className='w-full max-w-7xl mx-auto flex justify-between flex-col space-y-5'>
        <article className='text-indigo-600 flex gap-4'>
          <LightBulb />
          <p>Курсы</p>
        </article>

        <h3 className='text-2xl sm:text-4xl text-indigo-900 max-w-[29ch]'>
          Откройте для себя курсы богословской семинарии МБС
        </h3>  
        <p className='text-zinc-600'>
          Семинария предлагает различные формы обучения, поэтому вы найдете то, что подойдет именно вам
        </p>
      </div>
    </section>
  )
}
