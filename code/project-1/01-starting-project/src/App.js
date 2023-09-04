import UserInvestment from "./components/UserInvestment/UserInvestment";
import Header from "./components/Header/Header";
import Results from "./components/Results/Results";
import { useState } from "react";

function App() {
  const [userInvestment, setUserInvestment] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInvestment(userInput);
  };

  const yearlyData = [];

  //solution with derived state
  if (userInvestment) {
    let currentSavings = +userInvestment["current-savings"];
    const yearlyContribution = +userInvestment["yearly-contribution"];
    const expectedReturn = +userInvestment["expected-return"] / 100;
    const duration = +userInvestment["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      <UserInvestment onCalculate={calculateHandler} />
      {!userInvestment && <p>no data is available</p>}
      {userInvestment && (
        <Results
          data={yearlyData}
          initialInvestment={userInvestment["current-savings"]}
        />
      )}
    </div>
  );
}

export default App;
