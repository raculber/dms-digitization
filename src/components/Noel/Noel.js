import classes from "./Noel.module.css";

import Header from "../UI/Header";

import { AiFillHome } from "react-icons/ai";
import { useHistory } from "react-router";

const Noel = (props) => {
  const history = useHistory();
  const homeNavHandler = () => {
    history.push("/");
  };

  return (
    <div className={classes.content}>
      <Header headerType="Secondary">
        <AiFillHome onClick={homeNavHandler} className={classes.icon} />
        Noel
      </Header>
    </div>
  );
};

export default Noel;
