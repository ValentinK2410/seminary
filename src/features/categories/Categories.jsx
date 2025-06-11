import { LightBulbTopic } from '../../components/LightBulbTopic';
import Carousel, { ButtonGroupProps } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { divContent } from './components/carouselContent';
import './Categories.css'

export const Categories = () => {
  
  const CustomButtonGroup = ({ next, previous, carouselState }) => {
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

        <div className="carousel_item_container mt-10 mx-auto py-10 max-w-6xl">
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
                tv: {
                  breakpoint: { max: 3000, min: 1300 },
                  items: 4,
                  partialVisibilityGutter: 40,
                },
                desktop: {
                  breakpoint: { max: 1300, min: 1000 },
                  items: 3,
                  partialVisibilityGutter: 40,
                },
                tablet: {
                  breakpoint: { max: 1000, min: 520 },
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
                  <div className="carousel_item  h-full px-4 pt-6 pb-4  border border-indigo-400 rounded-lg bg-white shadow-sm flex flex-col items-center justify-between text-center">
                    <article className="flex flex-col items-center text-center">
                      <img
                        src={item.image}
                        alt={item.alt}
                        style={{
                          width: '100%',
                          maxWidth: '200px',
                          height: '140px',
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