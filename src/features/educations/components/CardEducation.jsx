import "./CardEducation.css";

export const CardEducation = (props) => {
  const {
    Img,
    Title,
    Description,
  } = props;

  return (
    <div className="program-card">
      <div className="card-image">
        <img src={Img} width="180" height="180" alt="Бакалавриат" />
      </div>
      <div className="card-details">
        <div className="card-title">{Title}</div>
        <div className="card-description">{Description}</div>
      </div>
      <button className="card-button">Подробнее <span>→</span></button>
    </div>
  );
};
