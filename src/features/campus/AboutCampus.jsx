import { PrimaryButton } from '../../componentLibrary/PrimaryButton';
import { LightBulbTopic } from '../../components/LightBulbTopic';

export const AboutCampus = () => {
  return (
    <section className='w-full p-6 sm:p-20 flex'>
      <article className='mx-auto max-w-7xl flex gap-10 lg:gap-20 items-center flex-col-reverse lg:flex-row'>
        <div className='md:mr-auto overflow-hidden w-full max-w-xl aspect-video rounded-xl shadow-lg'>
        <iframe
          src="https://vk.com/video_ext.php?oid=-211143968&id=456239230&hd=3"
          width="100%"
          height="100%"
          allow="autoplay; encrypted-media"
          allowFullScreen
          frameBorder="0"
          title="VK Video"
          className="w-full h-full"
          ></iframe>
        </div>

        <main className='w-full  mx-auto flex flex-col items-center sm:items-start text-center  justify-center gap-5'>
           <LightBulbTopic topic='Прекрасные условия' />
          <h3 className='text-2xl sm:text-4xl sm:text-left text-indigo-900 max-w-[29ch]'>
            Кампус богословской семинарии
          </h3>  
          <p className='text-zinc-600 text-left max-w-[90ch]'>
            Кампус МБС - это благословенное место, где вы не только сможете пройти курсы у лучших преподавателей братства ЕХБ, но и поговорить с наставником, укрепиться на семинарском богослужении, посетить музей Библии и истории братства. 
          </p>
          <PrimaryButton className='w-fit'>
              О семинарии МБС
          </PrimaryButton>
        </main>
      </article>
    </section>
  )
}
