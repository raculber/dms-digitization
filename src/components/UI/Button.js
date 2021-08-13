import classes from "./Button.module.css";
const Button = (props) => {
  return (
    <button
      type={props.type ? props.type : "button"}
      onClick={props.onClick}
      className={
        props.buttonType === "Secondary"
          ? classes.secondNavButton
          : props.buttonType === "Save"
          ? classes.saveButton
          : classes.navButton
      }
    >
      {props.content}
    </button>
  );
};
export default Button;
