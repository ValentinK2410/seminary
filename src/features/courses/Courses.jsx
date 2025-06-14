import { LightBulbTopic } from "../../components/LightBulbTopic";
import { CardCourse } from "./components/CardCourse";
import image01 from './../../images/coursesImages/bibliologiya.jpg';
import image02 from "./../../images/coursesImages/gomiletika.jpg";
import image03 from "./../../images/coursesImages/Hristologiay.png";
import image04 from "./../../images/coursesImages/pogoda-v-dome.jpg";
import image05 from "./../../images/coursesImages/istoriya-novogo-zaveta.jpg";
import image06 from "./../../images/coursesImages/realchurches.png";
import image07 from "./../../images/coursesImages/lessonsforkids.png";
import image08 from "./../../images/coursesImages/islam.jpg";

const cardCourse = [
  {
    id: 1,
    name: "Библиология",
    link: "/courses/concurs",
    description:
      "В этом курсе вы откроете для себя путь Священного Писания, узнаете, как Слово Божье сохранялось, и дошло до нас.",
    image: image01,
    category: "БИБЛЕИСТИКА",
  },
  {
    id: 2,
    name: "Гомилетика",
    link: "/courses/concurs",
    description:
      "Курс «Гомилетика» предназначен для всех, кто хочет развить навыки публичного изложения Священного Писания.",
    image: image02,
    category: "СЛУЖЕНИЕ ПРОПОВЕДНИКА",
  },
  {
    id: 3,
    name: "Систематическое богословие. Христология",
    link: "/courses/concurs",
    description:
      "Курс рассматривает вопросы о Христе и о единстве божественной и человеческой природы. ",
    image: image03,
    category: "ХРИСТИАНСКОЕ БОГОСЛОВИЕ",
  },
  {
    id: 4,
    name: "Погода в доме",
    link: "/courses/concurs",
    description:
      "Курс “Погода в доме” - это откровенный разговор о предназначении и дизайне супружества.",
    image: image04,
    category: "ДУШЕПОПЕЧЕНИЕ",
  },
  {
    id: 5,
    name: "История Нового Завета",
    link: "/courses/concurs",
    description:
      "Учебный курс 'История Нового Завета' рассматривает два больших периода в истории: период между Ветхим и Новым Заветом.",
    image: image05,
    category: "ИСТОРИЯ ЦЕРКВИ",
  },
  {
    id: 6,
    name: "Реальные церкви",
    link: "/courses/concurs",
    description:
      "Учебный курс 'Реальные церкви' рассматривает основополагающие характеристики истинной христианской церкви",
    image: image06,
    category: "ЦЕРКОВНОЕ РУКОВОДСТВО",
  },
  ,
  {
    id: 7,
    name: "Уроки для родителей",
    link: "/courses/concurs",
    description:
      "Воспитание детей - неотъемлемая часть жизни семьи. Авторы данного курса предлагают начать воспитание детей с воспитания родителей",
    image: image07,
    category: "ДУШЕПОПЕЧЕНИЕ",
  },
  ,
  {
    id: 8,
    name: "Ислам",
    link: "/courses/concurs",
    description:
      "Девид Шенк, доктор философии в области религии, образования и антропологии, предлагает исследовать христианство и ислам",
    image: image08,
    category: "АПОЛОГЕТИКА",
  },
];

export const Courses = () => {
  return (
    <section id="courses" className="scroll-mt-14 p-6 sm:p-20 flex flex-col gap-10">
      <main className=" max-w-7xl mx-auto flex flex-col gap-5 items-center justify-center">
        <LightBulbTopic topic="Курсы на базе МБС" />
        <h3 className="text-center text-2xl sm:text-4xl text-indigo-900 max-w-[29ch]">
          Откройте для себя курсы богословской семинарии МБС
        </h3>
        <p className="text-center text-zinc-600 pb-4 max-w-[65ch]">
          Семинария предлагает различные формы обучения, поэтому вы найдете то, что подойдет именно вам.
        </p>
      </main>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cardCourse.map((course) => (
          <div key={course.id}>
            <CardCourse
              Id={course.id}
              Name={course.name}
              Desc={course.description}
              Category={course.category}
              Image={course.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
