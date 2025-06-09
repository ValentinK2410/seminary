import { LightBulb } from '../../images/LightBulb'

export const Categories = () => {
  return (
    <section className='bg-indigo-25 p-6 sm:p-20 flex flex-col items-center gap-20'>
      <div className='w-full max-w-7xl mx-auto '>
        <div className='flex text-center flex-col justify-center space-y-5'>
          <article className='mx-auto text-indigo-600  flex gap-4'>
            <LightBulb />
            <p>Ресурсы для роста и служения</p>
          </article>

          <h3 className='mx-auto text-2xl sm:text-4xl text-indigo-900 max-w-[40ch]'>
            Преподаватели МБС подобрали ресурсы для решения современных вызовов
          </h3>  
          <p className='mx-auto text-zinc-600 max-w-[90ch]'>
          Найдите в семинарии МБС то, что поможет именно вам!
          </p>
        </div>

        {/* потом заменим */}
        <div className='mt-20 mx-auto px-10'>
            <article className='py-16 px-5  border border-dashed border-indigo-600 text-center text-4xl text-indigo-300 rounded-lg'>
            KARUSEL
          </article>
        </div>

      </div>
    </section>
  )
}
