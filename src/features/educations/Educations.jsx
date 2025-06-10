import { CardEducation } from "./components/CardEducation";
import { LightBulb } from "../../images/LightBulb";


import { educationalDegrees } from "./components/educationalDegrees";

export const Educations = () => {
            
  return (
    <section className="section-container">
      <div className="section-content">
        <article className="section-header">
          <LightBulb />
          <p> Учебные программы</p>
        </article>

        <h3 className="section-title">Выберите для себя программу обучения!</h3>

        <p className="section-description">
          Посмотрите программы, предлагаемые в Московской богословской семинарии
          МБС. Они помогут вам более эффективно нести ваше служение в
          соответствии с вашим призванием, перестроиться или начать все с
          чистого листа. Наставники МБС будут с вами на каждом шагу!
        </p>

        <div className="cards-container">
        {educationalDegrees.map((resource, index) => (
          <div
            key={resource.id}
            className="snap-start h-[350px] flex-shrink-0 w-60 border border-indigo-300 bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            role="group"
            aria-labelledby={`resource-title-${resource.id}`}
          >
            <div className="h-full flex flex-col items-center justify-between text-center">
              <article className='flex flex-col items-center text-center'>
                {resource.icon}
                <h4
                  id={`resource-title-${resource.id}`}
                  style={{ lineHeight: '1.2' }}
                  className="text-lg my-4 font-semibold text-indigo-900"
                >
                  {resource.title}
                </h4>
                <p className="text-sm text-zinc-600">{resource.description}</p>
              </article>
              <p className="text-sm text-zinc-600">{resource.info}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};