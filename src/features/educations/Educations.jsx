import { LightBulbTopic } from "../../components/LightBulbTopic";
import { educationalDegrees } from "./components/educationalDegrees";
import { PrimaryButton } from '../../componentLibrary/PrimaryButton';

export const Educations = () => {

  return (
    <section id="programs" className="scroll-mt-14 bg-indigo-25  p-6 sm:p-20 flex  items-center">
      <div className="w-full max-w-7xl mx-auto flex  flex-col gap-10 ">
        <main className="flex text-center flex-col justify-center items-center">
          <LightBulbTopic topic='Учебные программы' />
          <h3 className="my-4 mx-auto text-2xl sm:text-4xl text-indigo-900 text-left max-w-[40ch]">
            Выберите для себя программу обучения!
          </h3>
          <p className="w-full max-w-[90ch] text-left">
            Посмотрите программы, предлагаемые в Московской богословской семинарии МБС. Они помогут вам более эффективно нести ваше служение в соответствии с вашим призванием, перестроиться или начать все с чистого листа. Наставники МБС будут с вами на каждом шагу!
          </p>
          <PrimaryButton className='my-10 w-fit self-center'>
             <span className='hidden ux:inline-block mr-1'> Просмотреть </span> Все Программы <span className="ml-2 mt-1 transition-colors duration-200">→</span>
          </PrimaryButton>
        </main>
        
        <div className="flex flex-wrap gap-10 justify-center">
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