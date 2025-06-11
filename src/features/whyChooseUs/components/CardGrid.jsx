export const CardGrid = () => {
const cards = [
    { 
      title: 'Лучшее преподаватели', 
      icon: '📚', 
      description: 'Наши преподаватели — эксперты с опытом в богословии. Они поддерживают вас на пути обучения и служения.'
    },
    { 
      title: 'Интерактивное обучение', 
      icon: '🎓', 
      description: 'Занятия проходят в динамичной и вовлекающей форме. Вы сможете применять знания на практике сразу.'
    },
    { 
      title: 'Удобное обучение', 
      icon: '📊', 
      description: 'Гибкий график позволяет учиться в удобное для вас время. Доступные материалы онлайн. '
    },
    { 
      title: 'Индивидуальный график', 
      icon: '💻', 
      description: 'Создайте свой уникальный план обучения с нашей поддержкой. Мы учитываем ваши цели.'
    },
  ];


  return (
    <div className="w-fit h-fit xs:p-2 rounded-xl grid sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-2 gap-4 xl:mx-auto max-w-3xl   overflow-auto">
      {cards.map((card, index) => (
        <div
          key={index}
          className="group h-full max-w-[300px] xl:max-w-[400px] rounded-xl shadow-lg flex flex-col  justify-center p-4 pl-6 bg-slate-100 hover:bg-white cursor-pointer transition-all duration-300 xs:hover:scale-105 border border-gray-100 aspect-square min-w-0 flex-shrink"
        >
          <article className="w-full flex gap-2 justify-start items-center">
            <div className="text-2xl text-indigo-600">{card.icon}</div>
            <h3 className="group-hover:text-black my-3 text-md font-semibold text-gray-600 px-3 leading-tight">{card.title}</h3>
          </article>
          <p className="text-left h-fit text-zinc-600 group-hover:text-black transition-all duration-300  leading-tight">{card.description}</p>
        </div>
      ))}
    </div>
  );
};