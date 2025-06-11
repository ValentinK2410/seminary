import { LightBulbTopic } from '../../components/LightBulbTopic';
import Carousel, { ButtonGroupProps } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Import images directly
import image1 from '../../images/carouselmages/image1.jpeg';
import image2 from '../../images/carouselmages/image2.jpeg';
import image3 from '../../images/carouselmages/image3.jpeg';
import image4 from '../../images/carouselmages/image4.jpeg';
import image5 from '../../images/carouselmages/image5.jpeg';
import image6 from '../../images/carouselmages/image6.jpeg';
import image7 from '../../images/carouselmages/image7.jpeg';
import image8 from '../../images/carouselmages/image8.jpeg';
import image9 from '../../images/carouselmages/image9.jpeg';
import image10 from '../../images/carouselmages/image10.jpeg';


export const Categories = () => {
const divContent = [
    { id: 1, title: 'Апологетика', description: 'Основные принципы апологетики в христианстве, изучающие защиту веры через логику, философию и историю. Курсы включают в себя основные аргументы за истинность христианства.', info: '124+ Курсы', image: image1, alt: 'Изображение для Апологетика' },
    { id: 2, title: 'Библеистика', description: 'Исследование Библии и её текстов, углубляющее понимание исторических и культурных контекстов, в которых она была написана. Курсы включают в себя изучение авторства.', info: '98+ Курсы', image: image2, alt: 'Изображение для Библеистика' },
    { id: 3, title: 'История Церкви', description: 'Исторические аспекты развития христианской Церкви, охватывающие ключевые события, фигуры и доктринальные споры.', info: '76+ Курсов', image: image3, alt: 'Изображение для История Церкви' },
    { id: 4, title: 'Душепопечение', description: 'Руководство по духовному сопровождению, охватывающее методы и техники помощи верующим в их духовном росте и личной жизни.', info: '112+ Курсов', image: image4, alt: 'Изображение для Душепопечение' },
    { id: 5, title: 'Руководство в церкви', description: 'Практические навыки лидерства в церковной общине, охватывающие стратегии управления и развития церковных структур.', info: '88+ Курсов', image: image5, alt: 'Изображение для Руководство в церкви' },
    { id: 6, title: 'Проповедь', description: 'Техники и методы проповеди в христианстве, охватывающие анализ исторических и современных подходов к проповедничеству.', info: '135+ Курсов', image: image6, alt: 'Изображение для Проповедь' },
    { id: 7, title: 'Богословие', description: 'Основные принципы богословия и теологии, охватывающие изучение ключевых доктрин и учений христианства. Курсы включают в себя анализ теологических споров.', info: '103+ Курса', image: image7, alt: 'Изображение для Богословие' },
    { id: 8, title: 'Миссия', description: 'Миссионерская деятельность и стратегии, охватывающие разработку и реализацию миссионерских программ и проектов.', info: '91+ Курс', image: image8, alt: 'Изображение для Миссия' },
    { id: 9, title: 'Благовестие', description: 'Методы и практики благовестия, охватывающие различные стратегии проповедничества и распространения евангельского послания.', info: '118+ Курсов', image: image9, alt: 'Изображение для Благовестие' },
    { id: 10, 
    title: 'Основание церквей', 
    description: 'Мастер-классы по стратегиям создания и развития церковных общин, включая управление ресурсами, формирование сообщества и миссионерскую деятельность.', 
    info: '82+ Курса', 
    image: image10, 
    alt: 'Изображение для Основание церквей' 
    }
  ];


  const CustomButtonGroup = ({ next, previous, carouselState }: ButtonGroupProps) => {
    const { currentSlide = 0, totalItems = 0, slidesToShow = 1 } = carouselState || {};
    const isFirstSlide = currentSlide === 0;
    const isLastSlide = currentSlide >= totalItems - slidesToShow;

    return (
      <div className="relative bg-green-200 mt-6 flex justify-between items-center">
        <button
          onClick={previous}
          disabled={isFirstSlide}
          aria-label="Previous slide"
          className={`mr-4 p-2 absolute top-0 rounded-full bg-blue-100 ${
            isFirstSlide ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-100'
          }`}
        >
          <svg
            className="w-6 h-6 text-indigo-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div className="carousel-dots "></div>
        <button
          onClick={next}
          disabled={isLastSlide}
          aria-label="Next slide"
          className={`-mr-4 p-2 rounded-full absolute top-0 right-2 bg-blue-100 ${
            isLastSlide ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-100'
          }`}
        >
          <svg
            className="w-6 h-6 text-indigo-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    );
  };

  return (
    <section className="bg-indigo-25 p-6 sm:p-20 flex items-center">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex text-center flex-col justify-center items-center space-y-5">
          <LightBulbTopic topic="Ресурсы для роста и служения" />
          <h3 className="mx-auto text-2xl sm:text-4xl text-indigo-900 max-w-[40ch]">
            Преподаватели МБС подобрали ресурсы для решения современных вызовов
          </h3>
          <p className="mx-auto text-zinc-600 max-w-[90ch]">
            Найдите в семинарии МБС то, что поможет именно вам!
          </p>
        </div>

        <div className="mt-10 mx-auto py-10 max-w-6xl">
          <div className='mx-auto' style={{ paddingBottom: '30px', position: 'relative' }}>
            <Carousel
              additionalTransfrom={0}
              arrows={false}
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container"
              dotListClass="custom-dot-list"
              draggable
              focusOnSelect={false}
              infinite
              itemClass="px-2"
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={true}
              customButtonGroup={<CustomButtonGroup />}
              renderDotsOutside={true}
              responsive={{
         
                desktop: {
                  breakpoint: { max: 3000, min: 1010 },
                  items: 3,
                  partialVisibilityGutter: 40,
                },
                tablet: {
                  breakpoint: { max: 1010, min: 520 },
                  items: 2,
                  partialVisibilityGutter: 30,
                },
                mobile: {
                  breakpoint: { max: 520, min: 0 },
                  items: 1,
                  partialVisibilityGutter: 20,
                },
              }}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              {divContent.map((item) => (
                <div
                  key={item.id}
                  style={{
                    width: '100%',
                    height: '430px',
                   
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0px',
                  }}
                >
                  <div className="h-full px-4 pt-6 pb-4  border border-indigo-400 rounded-lg bg-white shadow-sm flex flex-col items-center justify-between text-center">
                    <article className="flex flex-col items-center text-center">
                      <img
                        src={item.image}
                        alt={item.alt}
                        style={{
                          width: '150px',
                          height: '110px',
                          objectFit: 'cover',
                          borderRadius: '8px',
                        }}
                        onError={(e) => {
                          e.currentTarget.src = fallback;
                        }}
                      />
                      <h4
                        id={`item-title-${item.id}`}
                        style={{ lineHeight: '1.2' }}
                        className="text-lg mt-4 mb-2 font-semibold text-indigo-900"
                      >
                        {item.title}
                      </h4>
                      <p className="text-sm px-3 text-zinc-600 text-left">{item.description}</p>
                    </article>
                    <p className="text-sm text-zinc-600">{item.info}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};