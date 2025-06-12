import { LightBulbTopic } from '../../components/LightBulbTopic';
import CarouselComponent from './components/CarouselComponent';
import { divContent } from './components/carouselContent';
import './Categories.css'

export const Categories = () => {
  
  return (
    <section id='ресурсы' className="bg-indigo-25 p-6 sm:p-20 flex items-center">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex text-center flex-col justify-center items-center space-y-5">
          <LightBulbTopic topic="Ресурсы для роста и служения" />
          <h3 className="mx-auto text-2xl sm:text-4xl text-indigo-900 max-w-[40ch]">
            Преподаватели МБС подобрали ресурсы для решения современных вызовов
          </h3>
          <p className="mx-auto text-zinc-600 max-w-[90ch] text-left">
            В семинарии МБС вы найдёте тщательно отобранные ресурсы, которые помогут вам расти в вере, углубить богословские знания и подготовиться к эффективному служению в церкви и за её пределами. Эти материалы созданы, чтобы поддержать вас именно там, где вы находитесь, и ответить на вызовы нашего времени.
          </p>
        </div>

        <div className="carousel_item_container mt-10 mx-auto py-10 max-w-6xl">
          <div className='mx-auto' style={{ paddingBottom: '30px', position: 'relative' }}>
            <CarouselComponent divContent={divContent} />
          </div>
        </div>
      </div>
    </section>
  );
};