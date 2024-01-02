import { useState } from "react";
import StepCounter from "./challenge/StepCounter";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(3);
  // const step = 3;
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    console.log("previous");
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    console.log("Next");
    if (step < messages.length) setStep((s) => s + 1);
  }

  // If we want to update the state based on current value we need to pass Call-back fn in setStep()
  // if(step < 3) {
  //    setStep(step + 1);
  //    setStep(step + 1); // It will add 1 on every click. It means state was not update with current state.
  //}

  return (
    <div>
      <button
        className="close"
        onClick={() => setIsOpen((curState) => !curState)}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            {/* <div className={`${step === 1 ? "active" : ""}`}>1</div>  // For reference */}
            <div className={step === 1 ? "active" : ""}>1</div>
            <div className={step === 2 ? "active" : ""}>2</div>
            <div className={step === 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
      <StepCounter />
    </div>
  );
}

export default App;
