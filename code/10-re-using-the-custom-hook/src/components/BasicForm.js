import useInput from "../hooks/use-input";
const BasicForm = (props) => {
  const {
    value: firstNameEntered,
    hasError: firstNameHasError,
    inputBlurHandler: firstNameBlurHandler,
    isValid: firstNameIsValid,
    reset: resetFirstName,
    valueChangeHandler: firstNameChangeHandler,
  } = useInput((value) => value.trim() !== "");
  const {
    value: lastNameEntered,
    hasError: lastNameHasError,
    inputBlurHandler: lastNameBlurHandler,
    isValid: lastNameIsValid,
    reset: resetLastName,
    valueChangeHandler: lastNameChangeHandler,
  } = useInput((value) => value.trim() !== "");
  const {
    value: emailEntered,
    hasError: emailHasError,
    inputBlurHandler: emailBlurHandler,
    isValid: emailIsValid,
    reset: resetEmail,
    valueChangeHandler: emailChangeHandler,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("SUBMITTED");

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstNameEntered}
            onBlur={firstNameBlurHandler}
            onChange={firstNameChangeHandler}
          />
          {firstNameHasError && (
            <p className="error-text">First Name is invalid</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastNameEntered}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && (
            <p className="error-text">Last Name is invalid</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={emailEntered}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p className="error-text">Email is invalid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
