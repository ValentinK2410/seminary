import { LightBulbTopic } from "../../components/LightBulbTopic";
import { CardFeedback } from "./components/CardFeedback";
import { feedbackData } from "./components/feedbackData";  

const getColorClass = (code) => {
  switch (code) {
    case 0: return "bg-red-700";
    case 1: return "bg-yellow-500";
    case 2: return "bg-violet-600";
    case 3: return "bg-blue-600";
    case 4: return "bg-green-500";
    default: return "bg-gray-600";
  }
};

export const StudentsFeedback = () => {
  return (
    <section className="p-6 sm:p-20 bg-indigo-25 flex">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-10">
        <div className="flex text-center flex-col justify-center items-center space-y-5">
          <LightBulbTopic topic='Отзывы студентов' />
          <h3 className="mx-auto text-2xl sm:text-4xl text-indigo-900 text-left max-w-[40ch]">
            Отзывы студентов семинарии МБС
          </h3>
          <p className="w-full text-zinc-600 max-w-[90ch] text-center sm:text-left">
            Узнайте, что настоящие студенты богословской семинарии МБС думают об учебном процессе, преподавателях и атмосфере. Их честные отзывы помогут вам лучше понять качество образования и студенческую жизнь.
          </p>
        </div>

        <div className="flex flex-wrap gap-10 justify-center">
          {feedbackData.map((item, index) => (
            <CardFeedback
              key={index}
              text={item.text}
              image={item.image}
              name={item.name}
              info={item.info}
              bgColorClass={getColorClass(item.colorCode)}
              colorCode={item.colorCode} // ← Add this line
            />
          ))}
        </div>
      </div>
    </section>
  );
};
