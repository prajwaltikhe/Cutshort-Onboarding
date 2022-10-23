import "./Button.css";

const Button = ({ text, clickHandler }) => {
  return (
    <button type="submit" className="form-btn" onClick={clickHandler}>
      {text}
    </button>
  );
};

export { Button };
