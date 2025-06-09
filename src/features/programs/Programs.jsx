import { SingleProgram } from "./components/SingleProgram";
import { LightBulb } from "../../images/LightBulb";
import image01 from "../../images/programs/01.png";
import image02 from "../../images/programs/02.png";
import image03 from "../../images/programs/03.png";

export const Programs = () => {
    const Programs = [
      {
        slug: "program01",
        image: image01,
        detailsImg: image01,
        category: "Дипломные программы",
        author: "Диакония",
        title: "Lite программа",
        publishedDate: "22.09.2023",
        btnText: "Подробнее",
        description:
          "В программе вы узнаете, как вести дискуссии по Библии и как построить отношения с людьми, которые отвергают Библию. Научитесь находить правильные ответы на самые распространенные вопросы, которые люди задают вотношениях с Богом и с людьми.",
        text: "В программе вы узнаете, как вести дискуссии по Библии и как построить отношения с людьми, которые отвергают Библию. Научитесь находить правильные ответы на самые распространенные вопросы, которые люди задают в отношениях с Богом и с людьми.",
        list: [],
      },
      {
        slug: "program02",
        image: image02,
        detailsImg: image02,
        category: "Бакалавриат",
        author: "Диакония",
        title: "Бакалавриат",
        publishedDate: "22.09.2023",
        btnText: "Подробнее",
        description:
          "В программе вы узнаете, как вести дискуссии по Библии и как построить отношения с людьми, которые отвергают Библию. Научитесь находить правильные ответы на самые распространенные вопросы, которые люди задлюди задают в отношениях с Богом и с людьми.",
        text: "В программе вы узнаете, как вести дискуссии по Библии и как построить отношения с людьми, которые отвергают Библию. Научитесь находить правильные ответы на самые распространенные вопросы, которые люди задлюди задают в отношениях с Богом и с людьми.",
        list: [],
      },
      {
        slug: "program03",
        image: image03,
        detailsImg: image03,
        category: "Дипломные программы",
        author: "Диакония",
        title: "Магистратура",
        publishedDate: "22.09.2023",
        btnText: "Подробнее",
        description:
          "В программе вы узнаете, как вести дискуссии по Библии и как построить отношения с людьми, которые отвергают Библию. Научитесь находить правильные ответы на самые распространенные вопросы, которые люди задлюди задают в отношениях с Богом и с людьми.",
        text: "В программе вы узнаете, как вести дискуссии по Библии и как построить отношения с людьми, которые отвергают Библию. Научитесь находить правильные ответы на самые распространенные вопросы, которые люди задлюди задают в отношениях с Богом и с людьми.",
        list: [],
      },
      {
        slug: "program04",
        image: image01,
        detailsImg: image01,
        category: "Дипломные программы",
        author: "Диакония",
        title: "Дипломные прграммы",
        publishedDate: "22.09.2023",
        btnText: "Подробнее",
        description:
          "В программе вы узнаете, как вести дискуссии по Библии и как построить отношения с людьми, которые отвергают Библию. Научитесь находить правильные ответы на самые распространенные вопросы, которые люди задлюди задают в отношениях с Богом и с людьми.",
        text: "В программе вы узнаете, как вести дискуссии по Библии и как построить отношения с людьми, которые отвергают Библию. Научитесь находить правильные ответы на самые распространенные вопросы, которые люди задлюди задают в отношениях с Богом и с людьми.",
        list: [],
      },
    ];

            
  return (
    <section className="section-container">
      <div className="section-content">
        <article className="section-header">
          <div className="icon-wrapper">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* SVG path данные остаются такими же */}
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                stroke="none"
              >
                {/* ... все path элементы ... */}
              </g>
            </svg>
          </div>
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
          {Programs.map((program, index) => {
            return (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                <SingleProgram
                  Slug={program.slug}
                  Img={program.image}
                  detailsImg={program.detailsImg}
                  Category={program.category}
                  Author={program.author}
                  Title={program.title}
                  publishedDate={program.publishedDate}
                  btnText={program.btnText}
                />
              </div>
            );
          }).slice(0, 4)}
        </div>
      </div>
    </section>
  );
};