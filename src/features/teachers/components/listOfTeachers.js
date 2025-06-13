import image01 from "../../../images/teacherImages/01.png";
import image02 from "../../../images/teacherImages/02.png";
import image03 from "../../../images/teacherImages/03.png";
import image04 from "../../../images/teacherImages/04.png";

export const listOfTeachers = [
  {
    id: 1,
    icon: (
      <div className="w-64 h-60 rounded-md relative overflow-hidden">
        <img
          src={image01}
          alt="фото: Михаил Вячеславович Иванов"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      </div>
    ),
    title: "Михаил Вячеславович Иванов",
    info: "Систематическое богословие и церковная история",
    description: "Специализируется на систематическом богословии и истории христианской церкви.",
  },
  {
    id: 2,
    icon: (
      <div className="w-64 h-60 rounded-md relative overflow-hidden">
        <img
          src={image02}
          alt="фото: Марина Владимировна Ананка-Ганина"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      </div>
    ),
    title: "Марина Владимировна Ананка-Ганина",
    info: "Христианское образование",
    description: "Специалист в области христианского образования и педагогики.",
  },
  {
    id: 3,
    icon: (
      <div className="w-64 h-60 rounded-md relative overflow-hidden">
        <img
          src={image03}
          alt="фото Александр Владимирович Митрофанов"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      </div>
    ),
    title: "Александр Владимирович Митрофанов",
    info: "Религиоведения",
    description: "Эксперт в области религиоведения и межконфессионального диалога.",
  },
  {
    id: 4,
    icon: (
      <div className="w-64 h-60 rounded-md relative overflow-hidden">
        <img
          src={image04}
          alt="фото: Геннадий Александрович Савин"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      </div>
    ),
    title: "Геннадий Александрович Савин",
    info: "Герменевтика",
    description: "Занимается толкованием священных текстов и герменевтическими методами.",
  },
];
