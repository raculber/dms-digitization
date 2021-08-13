import classes from "./Monett.module.css";

import Header from "../UI/Header";

import { AiFillHome } from "react-icons/ai";
import { useHistory } from "react-router";

const Monett = (props) => {
  const history = useHistory();
  const homeNavHandler = () => {
    history.push("/");
  };

  return (
    <div className={classes.content}>
      <Header headerType="Secondary">
        <AiFillHome onClick={homeNavHandler} className={classes.icon} />
        Monett
      </Header>
    </div>
  );
};

export default Monett;
