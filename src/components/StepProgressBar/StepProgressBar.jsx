import "./StepProgressBar.css";

const StepProgressBar = ({ tab, numberSteps }) => {
  let numSteps;

  const arrayofDigits = (num) => {
    let arr = [];
    for (let i = 1; i <= num; i++) {
      arr.push(i);
    }
    return arr;
  };

  if (numberSteps === null || undefined) {
    numSteps = arrayofDigits(numberSteps);
  } else {
    numSteps = arrayofDigits(4);
  }

  return (
    <div className="stepper">
      <ul className="steps">
        {numSteps.map((item) => {
          return (
            <li
              className={
                tab === item
                  ? "step step-incomplete step-active"
                  : tab < item
                  ? "step step-incomplete step-inactive"
                  : "step step-complete step-inactive"
              }
              key={item}
            >
              <span className="step-icon">{item}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { StepProgressBar };
