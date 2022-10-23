import user from "../assets/UserImage.png";
import group from "../assets/GroupImage.png";
import "./TextCard.css";

const TextCard = ({ card, isActive, setUsage }) => {
  const cardHandler = () => {
    setUsage({ usage: card.id });
  };
  return (
    <div
      className="card text-card"
      style={{ border: isActive ? "2px solid #5A4AD1" : "2px solid #e2ebf6" }}
      onClick={cardHandler}
    >
      <img
        src={card.id === 1 ? user : group}
        alt={card.title}
        className="card-img"
      />
      <span className="card-title">{card.title}</span>
      <p className="card-content">{card.text}</p>
    </div>
  );
};

export { TextCard };
