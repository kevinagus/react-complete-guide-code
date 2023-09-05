import style from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

export default function AddUser(props) {
  const [username, setUsername] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState(false);

  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || year.trim().length === 0) {
      setError({
        title: "Invalid input",
        content: "username or year must not be empty",
      });
      return;
    }
    if (+year < 1) {
      setError({
        title: "Invalid input",
        content: "year must be greater than 0",
      });
      return;
    }
    props.onAddUser({
      username,
      year,
    });
    setYear("");
    setUsername("");
  };

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setYear(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          content={error.content}
          onConfirm={errorHandler}
        />
      )}
      <Card className={style.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            value={username}
            id="username"
            type="text"
            onChange={usernameHandler}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            value={year}
            id="age"
            type="number"
            onChange={ageHandler}
          ></input>
          <Button type="submit" label="Add User"></Button>
        </form>
      </Card>
    </div>
  );
}
