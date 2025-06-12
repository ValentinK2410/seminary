import { Calendar, Clock, MapPin } from "lucide-react";
import image01 from "../../../images/eventImages/01.jpg";
import image02 from "../../../images/eventImages/02.jpg";
import image03 from "../../../images/eventImages/03.jpg";

export const listOfEvents = [
  {
    id: 1,
    icon: (
      <div className="w-full sm:w-80 aspect-video rounded-md relative overflow-hidden">
        <img
          src={image01}
          alt="фото: Встреча выпускников МБС!"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      </div>
    ),
    title: "Встреча выпускников МБС!",
    description: "Торжественное мероприятие для выпускников всех лет, дружеское общение и воспоминания.",
    info: (
      <div className="flex flex-wrap gap-3 truncate">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-gray-600" />
          <span>07 июня 2025 года</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-gray-600" />
          <span>10:00 am</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-gray-600" />
          <span>Кампус МБС</span>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    icon: (
      <div className="w-full sm:w-80 aspect-video rounded-md relative overflow-hidden">
        <img
          src={image02}
          alt="фото: День открытых дверей!"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      </div>
    ),
    title: "День открытых дверей!",
    description: "Приглашаем всех желающих познакомиться с обучением в МБС, преподавателями и студентами.",
    info: (
      <div className="flex flex-wrap gap-3 truncate">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-gray-600" />
          <span>07 июня 2025 года</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-gray-600" />
          <span>10:00 am</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-gray-600" />
          <span>Кампус МБС</span>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    icon: (
      <div className="w-full sm:w-80 aspect-video rounded-md relative overflow-hidden">
        <img
          src={image03}
          alt="фото Курс Герменевтика"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      </div>
    ),
    title: "Курс Герменевтика",
    description: "Углублённое изучение принципов толкования Священного Писания с преподавателями МБС.",
    info: (
      <div className="flex flex-wrap gap-3 truncate">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-gray-600" />
          <span>07 июня 2025 года</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-gray-600" />
          <span>10:00 am</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-gray-600" />
          <span>Кампус МБС</span>
        </div>
      </div>
    ),
  },
];
