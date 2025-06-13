import { LightBulbTopic } from "../../components/LightBulbTopic";
import { listOfTeachers } from "./components/listOfTeachers";
import { PrimaryButton } from '../../componentLibrary/PrimaryButton';

export const Teachers = () => {

  return (
    <section className="p-6 sm:p-20  flex items-center">
      <div className="w-full max-w-7xl mx-auto  flex flex-col  gap-16 ">
        <div className="flex text-center flex-col justify-center items-center gap-5">
          <LightBulbTopic topic='Преподаватели МБС' />
          <h3 className="mx-auto text-2xl sm:text-4xl text-indigo-900  max-w-[30ch]">
           В семинарии вы встретитесь с лучшими преподавателями
          </h3>
          <p className="w-full max-w-[90ch] text-left ">
            Преподаватели богословской семинарии МБС – это не просто академики, а преданные служители церкви, каждый из которых обладает многолетним практическим опытом и глубокими знаниями в своей области. Они вдохновляют студентов своим примером, делятся богословской мудростью и помогают формировать прочное духовное основание для служения и жизни в вере.
          </p>

          <PrimaryButton className='mt-6 w-fit self-center'>
            Все преподаватели <span className="ml-2 mt-1 transition-colors duration-200">→</span>
          </PrimaryButton>
        </div>

        <div className="flex flex-wrap gap-10 justify-center">
          {listOfTeachers.map((teacher, index) => (
            <div
              key={teacher.id}
              className="snap-start h-[500px] flex-shrink-0 w-72 border border-indigo-300 bg-white rounded-lg shadow-md pt-3 pb-3  hover:shadow-lg transition-shadow duration-300"
              role="group"
              aria-labelledby={`teacher-title-${teacher.id}`}
            >
              <div className="h-full px-4 flex flex-col items-center justify-between text-center">
                <article className='flex flex-col items-center text-center'>
                  {teacher.icon}
                  <h4
                    id={`teacher-title-${teacher.id}`}
                    style={{ lineHeight: '1.2' }}
                    className="text-lg my-4 font-semibold text-indigo-900"
                  >
                    {teacher.title}
                  </h4>
                  <p className="text-sm text-zinc-600">{teacher.description}</p>
                </article>
                <p className="text-sm text-zinc-600">{teacher.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};