import { PrimaryButton } from '../../componentLibrary/PrimaryButton'
import aboutCampus from '../../images/aboutCampus.jpg';
import { LightBulbTopic } from '../../components/LightBulbTopic';

export const AboutCampus = () => {
  return (
    <section className='w-full  p-6 sm:p-20 flex'>
      <article className='mx-auto max-w-7xl flex gap-10 lg:gap-20 items-center flex-col-reverse lg:flex-row'>
        <div className='w-full  mx-auto flex flex-col items-center sm:items-start text-center  justify-center gap-5'>
           <LightBulbTopic topic='Прекрасные условия' />
          <h3 className='text-2xl sm:text-4xl sm:text-left text-indigo-900 max-w-[29ch]'>
            Кампус богословской семинарии
          </h3>  
          <p className='text-zinc-600 text-left'>
            Кампус МБС - это благословенное место, где вы не только сможете пройти курсы у лучших преподавателей братства ЕХБ, но и поговорить с наставником, укрепиться на семинарском богослужении, посетить музей Библии и истории братства. 
          </p>
    
          <PrimaryButton className='w-fit'>
              О семинарии МБС
          </PrimaryButton>
        </div>
        <div className='overflow-hidden'>
          <img src={aboutCampus} alt="about us" className='rounded-lg max-h-[500px]' />
        </div>
      </article>
    </section>
  )
}
