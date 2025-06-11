import { LightBulbTopic } from "../../components/LightBulbTopic";
import { listOfTeachers } from "./components/listOfTeachers";

export const Teachers = () => {

  return (
    <section className="p-6 sm:p-20 bg-indigo-400 flex items-center">
      <div className="w-full max-w-7xl mx-auto flex  flex-col gap-10 ">
        <div className="flex text-center flex-col justify-center items-center space-y-5">
          <LightBulbTopic topic='Преподаватели МБС' />
          <h3 className="mx-auto text-2xl sm:text-4xl text-indigo-900 text-left max-w-[40ch]">
           В семинарии вы встретитесь с лучшими преподавателями
          </h3>
          <p className="w-full max-w-[85ch] text-left">
            Преподаватели богословской семинарии МБС – опытные служители церкви и эксперты в своей области знаний 
          </p>
        </div>
        
        <div className="flex flex-wrap gap-10 justify-center">
          <p className="text-7xl text-white">РАБОТАЮ!!!</p>
          {/* {listOfTeachers.map((resource, index) => (
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
          ))} */}
        </div>
      </div>
    </section>
  );
};