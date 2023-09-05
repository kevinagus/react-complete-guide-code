import React from "react";
import style from "./UsersList.module.css";
import Card from "../UI/Card";

export default function UsersList(props) {
  return (
    <Card className={style.users}>
      <div>
        <ul>
          {props.users.length > 0 &&
            props.users.map((user) => (
              <li key={user.username}>
                {user.username} ({user.year} years old)
              </li>
            ))}
        </ul>
      </div>
    </Card>
  );
}
