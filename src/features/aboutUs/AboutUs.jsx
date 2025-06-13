import { PrimaryButton } from '../../componentLibrary/PrimaryButton'
import aboutUsPhoto from '../../images/aboutUsPhoto.jpeg';
import { LightBulbTopic } from '../../components/LightBulbTopic';

// do NOT delete: add scroll-mt-14 in courses.jsx

export const AboutUs = () => {
  return (
    <section id='about-us' className='w-full  p-6 sm:p-20 flex'>
      <article className='scroll-mt-14 mx-auto max-w-7xl flex gap-10 lg:gap-20 items-center flex-col lg:flex-row'>
        <div className='overflow-hidden'>
          <img src={aboutUsPhoto} alt="about us" 
           style={{ transform: 'scaleX(-1)' }}
           className='rounded-lg' />
        </div>

        <div className='w-full  mx-auto flex flex-col items-center sm:items-start text-center  justify-center gap-5'>
           <LightBulbTopic topic='Учитесь там, где вам удобно и когда вам удобно' />
          <h3 className='text-2xl sm:text-4xl sm:text-left text-indigo-900 max-w-[29ch]'>
            МБС стала ближе, чем когда либо!
          </h3>  
          <p className='text-zinc-600 text-left max-w-[90ch]'>
            Образовательные возможности в МБС не ограничиваются стенами кампуса. Здесь можно учиться онлайн, изучая курсы ведущих преподавателей из любой точки мира. Кроме того в каждом регионе страны предлагаются образовательные возможности, которые могут быть засчитаны в рамках обучения по программам МБС.
          </p>
          <p className='text-zinc-600 text-left max-w-[90ch]'>
          Присоединяйтесь к сообществу студентов Московской богословской семинарии МБС! Став студентом, вы получите доступ к курсам семинарии и сможете узнавать первыми о новых возможностях в МБС.
          </p>
          <PrimaryButton className='w-fit'>
            Стать студентом МБС <span className="ml-2 mt-1 transition-colors duration-200">→</span>
          </PrimaryButton>
        </div>
      </article>
    </section>
  )
}
