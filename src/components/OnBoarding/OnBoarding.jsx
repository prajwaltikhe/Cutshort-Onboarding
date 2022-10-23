import { useState } from "react";
import { Input } from "../Input/Input";
import { TextCard } from "../TextCard/TextCard";
import { Button } from "../Button/Button";
import { cardContent, tabHeadings } from "../Utils";
import check from "../assets/Checkmark.png";
import { StepProgressBar } from "../StepProgressBar/StepProgressBar";
import "./OnBoarding.css";

const OnBoarding = () => {
  const [tabNumber, setTabNumber] = useState(1);
  const [user, setUser] = useState({
    fullName: "",
    displayName: "",
  });
  const [workSpace, setWorkSpace] = useState({
    workspaceName: "",
    workSpaceURL: "",
  });
  const [usage, setUsage] = useState({
    usage: "",
  });
  const [formState, setFormState] = useState({
    fullName: "",
    displayName: "",
    workspaceName: "",
    workspaceURL: "",
    usage: "",
  });

  function clickHandler() {
    setFormState({ ...user, ...workSpace, ...usage });
    if (tabNumber === 3) setTabNumber((tab) => tab + 1);
    if (tabNumber === 4) console.log(formState);
  }

  function formSubmitHandler(e) {
    e.preventDefault();
    if (tabNumber === 4) return;
    setTabNumber((tab) => tab + 1);
  }

  return (
    <div className="form-section">
      <StepProgressBar tab={tabNumber} numberSteps={4} />
      {tabHeadings[tabNumber - 1].main && (
        <div className="tabHeader">
          <span className="tabHeader-main">
            {tabHeadings[tabNumber - 1].main}
          </span>
          <span className="tabHeader-sub">
            {tabHeadings[tabNumber - 1].sub}
          </span>
        </div>
      )}

      {tabNumber === 1 && (
        <form onSubmit={formSubmitHandler} style={{ width: "100%" }}>
          <Input
            id="fullName"
            label="Full Name"
            placeholder="Steve Jobs"
            value={user.fullName}
            onChange={(value) => setUser({ ...user, fullName: value })}
            minLength="2"
            maxLength="25"
          />
          <Input
            id="displayName"
            label="Display Name"
            placeholder="Steve"
            value={user.displayName}
            onChange={(value) => setUser({ ...user, displayName: value })}
            minLength="2"
            maxLength="12"
          />
          <Button text="Create Workspace" clickHandler={clickHandler} />
        </form>
      )}
      {tabNumber === 2 && (
        <form onSubmit={formSubmitHandler} style={{ width: "100%" }}>
          <Input
            id="workspaceName"
            label="Workspace Name"
            placeholder="Eden"
            value={workSpace.workspaceName}
            onChange={(value) =>
              setWorkSpace({ ...workSpace, workspaceName: value })
            }
            minLength="2"
            maxLength="25"
          />
          <Input
            id="workSpaceURL"
            label="Workspace URL"
            placeholder="Example"
            value={workSpace.workspaceURL}
            onChange={(value) =>
              setWorkSpace({ ...workSpace, workspaceURL: value })
            }
            minLength="2"
            maxLength="20"
          />
          <Button text="Create Workspace" clickHandler={clickHandler} />
        </form>
      )}
      {tabNumber === 3 && (
        <div className="tab-three">
          <div className="cards-container">
            {cardContent.map((card) => {
              return (
                <TextCard
                  key={card.id}
                  isActive={card.id === usage.usage}
                  card={card}
                  setUsage={setUsage}
                />
              ); //handleCardSelect={handleCardSelect}
            })}
          </div>
          <Button text="Create Workspace" clickHandler={clickHandler} />
        </div>
      )}
      {tabNumber === 4 && (
        <div className="tabFour">
          <div className="tabFour-img">
            <img src={check} alt="check" />
          </div>
          <span
            style={{
              fontSize: "2rem",
              marginBottom: "1rem",
              fontWeight: "600",
              color: "var(--color-primary-text-dark)",
            }}
          >
            Congratulations, {formState.displayName}!
          </span>
          <span
            style={{
              fontSize: ".9rem",
              marginBottom: "2rem",
              color: "var(--color-primary-text-medium)",
            }}
          >
            You have completed onboarding, you can start using the Eden!
          </span>
          <Button text="Launch Eden" clickHandler={clickHandler} />
        </div>
      )}
    </div>
  );
};

export { OnBoarding };
