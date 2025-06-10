import image01 from "../../../images/programs/01.png";
import image02 from "../../../images/programs/02.png";
import image03 from "../../../images/programs/03.png";

export const educationalDegrees = [
  {
    id: 1,
    icon: (
      <div className="w-44 h-32 rounded-xl relative overflow-hidden">
        <img
          src={image01}
          alt="Lite программа"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    ),
    title: "Lite программа",
    info: "Дипломная программа",
    description: "Научитесь вести беседы о Библии и отвечать на важные вопросы.",
  },
  {
    id: 2,
    icon: (
      <div className="w-44 h-32 rounded-xl relative overflow-hidden">
        <img
          src={image02}
          alt="Бакалавриат"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    ),
    title: "Бакалавриат",
    info: "Бакалаврская программа",
    description: "Развивайте знания и навыки в богословии и служении.",
  },
  {
    id: 3,
    icon: (
      <div className="w-44 h-32 rounded-xl relative overflow-hidden">
        <img
          src={image03}
          alt="Магистратура"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    ),
    title: "Магистратура",
    info: "Дипломная программа",
    description: "Углублённое изучение Библии и практики христианского лидерства.",
  },
  {
    id: 4,
    icon: (
      <div className="w-44 h-32 rounded-xl relative overflow-hidden">
        <img
          src={image01}
          alt="Дипломные программы"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    ),
    title: "Дипломные программы",
    info: "Дипломная программа",
    description: "Базовая подготовка для служения и духовного роста.",
  },
];
