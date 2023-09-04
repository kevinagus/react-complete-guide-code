import style from "./UserInvestment.module.css";
import { useState } from "react";

const initialInvestment = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};

export default function UserInvestment(props) {
  const [investment, setInvestment] = useState(initialInvestment);

  const resetHandler = () => {
    setInvestment(initialInvestment);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(investment);
  };

  const inputChangeHandler = (input, value) => {
    setInvestment((prevState) => {
      return {
        ...prevState,
        [input]: +value,
      };
    });
  };

  return (
    <form className={style.form} onSubmit={submitHandler}>
      <div className={style["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            value={investment["current-savings"]}
            type="number"
            id="current-savings"
            onChange={(event) =>
              inputChangeHandler("current-savings", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            value={investment["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
            onChange={(event) =>
              inputChangeHandler("yearly-contribution", event.target.value)
            }
          />
        </p>
      </div>
      <div className={style["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            value={investment["expected-return"]}
            type="number"
            id="expected-return"
            onChange={(event) =>
              inputChangeHandler("expected-return", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            value={investment.duration}
            type="number"
            id="duration"
            onChange={(event) =>
              inputChangeHandler("duration", event.target.value)
            }
          />
        </p>
      </div>
      <p className={style.actions}>
        <button type="reset" className={style.buttonAlt} onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className={style.button}>
          Calculate
        </button>
      </p>
    </form>
  );
}
