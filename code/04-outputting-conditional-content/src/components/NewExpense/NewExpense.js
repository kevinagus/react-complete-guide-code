import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [newExpenseFlag, setNewExpenseFlag] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const newExpenseHandler = () => {
    setNewExpenseFlag(true);
  };

  const cancelClickedHandler = () => {
    setNewExpenseFlag(false);
  };

  let newExpenseContent = (
    <button onClick={newExpenseHandler} type="button">
      Add New Expense
    </button>
  );

  if (newExpenseFlag) {
    newExpenseContent = (
      <ExpenseForm
        onSubmitOrCancelClicked={cancelClickedHandler}
        onSaveExpenseData={saveExpenseDataHandler}
      />
    );
  }

  return <div className="new-expense">{newExpenseContent}</div>;
};

export default NewExpense;
