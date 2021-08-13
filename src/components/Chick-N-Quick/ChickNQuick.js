import classes from "./ChickNQuick.module.css";

import Header from "../UI/Header";

import { AiFillHome } from "react-icons/ai";
import { useHistory } from "react-router";

const ChickNQuick = (props) => {
  const history = useHistory();
  const homeNavHandler = () => {
    history.push("/");
  };

  return (
    <div className={classes.content}>
      <Header headerType="Secondary">
        <AiFillHome onClick={homeNavHandler} className={classes.icon} />
        Chick-N-Quick
      </Header>
    </div>
  );
};

export default ChickNQuick;
