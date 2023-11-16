import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  onTodoClicked: () => void;
}> = (props) => {
  return (
    <li onClick={props.onTodoClicked} className={classes.item}>
      {props.text}
    </li>
  );
};

export default TodoItem;
