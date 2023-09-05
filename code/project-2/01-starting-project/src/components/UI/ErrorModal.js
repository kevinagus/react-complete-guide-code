import React from "react";
import classes from "./ErrorModal.module.css";
import Button from "./Button";
import Card from "./Card";

export default function ErrorModal(props) {
  return (
    <div className={classes.backdrop} onClick={props.onConfirm}>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>{props.content}</div>
        <footer className={classes.actions}>
          <Button label="Okay" onClick={props.onConfirm}></Button>
        </footer>
      </Card>
    </div>
  );
}
