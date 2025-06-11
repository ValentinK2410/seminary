
import { LightBulbTopic } from '../../components/LightBulbTopic';

export const ComingEvents = () => {
  return (
 <section className=' w-full p-6 sm:p-20 flex flex-col gap-10 '>
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
        
 
      </article>

      <article className='p-10 space-y-10'>

        <div className="p-10 flex  max-w-3xl mx-auto  bg-indigo-500 flex-wrap gap-10 justify-center">
          <p className="text-4xl text-indigo-50">Получи сертификат или диплом в МБС </p>
        </div>

        <div className="bg-yellow-300 max-w-xl mx-auto p-10 flex flex-wrap gap-10 justify-center">
          <p className="text-xl text-red-500">KTO НАЧНЕТ ЭТУ СЕКЦИЮ? </p>
        </div>
      </article>

    </section>
  )
}
