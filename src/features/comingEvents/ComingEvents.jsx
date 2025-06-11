
import { LightBulbTopic } from '../../components/LightBulbTopic';

export const ComingEvents = () => {
  return (
 <section className=' w-full p-6 sm:p-20 flex'>
      <article className='mx-auto max-w-7xl flex gap-10 lg:gap-20 items-center flex-col-reverse lg:flex-row'>
        <div className='w-full  mx-auto flex flex-col items-center sm:items-start text-center  justify-center gap-5'>
           <LightBulbTopic topic='Календарь МБС' />
          <h3 className='text-2xl sm:text-4xl sm:text-left text-indigo-900 max-w-[29ch]'>
            Предстоящие события
          </h3>  
          <p className='text-zinc-600 text-left'>
            Узнайте, какие образовательные возможности доступны в богословской семинарии на кампусе и в регионах.
          </p>
        </div>
        <div className="flex flex-wrap gap-10 justify-center">
          <p className="text-4xl text-red-500">KTO НАЧНЕТ ЭТУ СЕКЦИЮ? </p>
        </div>
      </article>
    </section>
  )
}
