import "./SingleProgram.css";
import image1 from "../../../images/programs/01.png";

export const SingleProgram = (props) => {
  const {
    programClass,
    Slug,
    Img,
    Title,
    Description,
    Author,
    Tag,
    publishedDate,
    btnText,
    imgWidth,
    imgHeight,
    onClick,
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
      <button className="card-button">{btnText} <span>→</span></button>
    </div>
  );
};
