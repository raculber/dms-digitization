import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header
      className={
        props.headerType === "Secondary" ? classes.secondary : classes.header
      }
    >
      {props.children}
    </header>
  );
};
export default Header;
