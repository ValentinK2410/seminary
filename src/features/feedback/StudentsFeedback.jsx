import { LightBulbTopic } from "../../components/LightBulbTopic";


export const StudentsFeedback = () => {

  return (
    <section className="p-6 sm:p-20 bg-indigo-25  flex">
      <div className="w-full max-w-7xl mx-auto flex  flex-col gap-10 ">
        <div className="flex text-center flex-col justify-center items-center space-y-5">
          <LightBulbTopic topic='Отзывы студентов' />
          <h3 className="mx-auto text-2xl sm:text-4xl text-indigo-900 text-left max-w-[40ch]">
            Отзывы студентов семинарии МБС
          </h3>
          <p className="w-full max-w-[85ch]">
            Что говорят об учебе в богословской семинарии студенты
          </p>
        </div>
        
        <div className="flex flex-wrap gap-10 justify-center">
              <p className="text-5xl text-red-600">KTO ХОЧЕТ ТУТ ПОРАБОТАТЬ?</p>
        </div>
      </div>
    </section>
  );
};