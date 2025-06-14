import { PrimaryButton } from '../../componentLibrary/PrimaryButton';
import { LightBulbTopic } from '../../components/LightBulbTopic';
import { listOfEvents } from "./components/listOfEvents";

export const ComingEvents = () => {
  return (
 <section className=' p-6 sm:p-20 flex flex-col gap-10'>
      <article className='mx-auto max-w-7xl flex gap-10 lg:gap-20 items-center flex-col-reverse lg:flex-row'>
        <div className=' mx-auto flex flex-col items-center    justify-center gap-5'>
           <LightBulbTopic topic='Календарь МБС' />
          <h3 className='text-2xl sm:text-4xl text-center  text-indigo-900 max-w-[29ch]'>
            Предстоящие события
          </h3>  
          <p className="text-zinc-600 text-left max-w-[90ch]">
            Откройте для себя разнообразные образовательные программы богословской семинарии МБС — как на главном кампусе, так и в регионах. Вас ждут курсы, семинары и обучение, адаптированные под современные реалии и потребности служения.
          </p>
        </div>
      </article>

      <article className='mx-auto max-w-7xl'>
        <div className="w-full mx-auto flex flex-col gap-10 justify-center">
          {listOfEvents.map((event, index) => (
            <div
              key={event.id}
              className="snap-start w-full h-fit border border-indigo-300 bg-white rounded-lg shadow-md pt-3 pb-3  hover:shadow-lg transition-shadow duration-300"
              role="group"
              aria-labelledby={`event-title-${event.id}`}
            >
              <div className="h-full px-4 flex flex-col xs:flex-row justify-between gap-5 xs:gap-10">
                {event.icon}
                <article className='flex flex-col flex-grow lg:flex-row lg:items-center justify-between gap-10'>
                  <div className='flex flex-col justify-center gap-3'>
                    <div className="text-sm text-zinc-600">{event.info}</div>
                    <h4
                      id={`event-title-${event.id}`}
                      style={{ lineHeight: '1.2' }}
                      className="text-lg font-semibold text-indigo-900"
                    >
                      {event.title}
                    </h4>
                    <p className='max-w-[52ch]'> {event.description} </p>
                  </div>
                  <PrimaryButton className='h-[40px] text-md ux:self-start lg:self-center '>
                    Перейти
                  </PrimaryButton>
                </article>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-10 w-full ux:w-fit px-4 pt-10 sm:px-16 sm:pb-0 flex flex-col sm:flex-row  max-w-7xl mx-auto  bg-indigo-500 rounded-xl gap-10 items-center justify-center">
          <img src={getDiplomaImage} alt="a young woman" className='self-center' />
          <div className='flex flex-col lg:flex-row gap-5'>
              <p className="text-2xl  xl:text-5xl text-center sm:text-left leading-snug text-indigo-50 max-w-[18ch]">
                Получи сертификат или диплом в МБС
              </p>
              <SecondaryButton className='h-[60px] mb-5 text-md xl:self-center uppercase truncate'>
                <span className='hidden sm:inline-block lg:hidden xl:inline-block mr-1'>Посмотреть </span>  все курсы <span className="ml-2 mt-1 transition-colors duration-200">→</span>
              </SecondaryButton>
          </div>
        </div> */}

      </article>
    </section>
  )
}
