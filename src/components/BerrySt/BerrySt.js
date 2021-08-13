import classes from "./BerrySt.module.css";

import Header from "../UI/Header";

import { AiFillHome } from "react-icons/ai";
import { useHistory } from "react-router";
import BerryStNav from "./BerryStNav";

const BerrySt = (props) => {
  const history = useHistory();
  const homeNavHandler = () => {
    history.push("/");
  };

  return (
    <div className={classes.content}>
      <Header headerType="Secondary">
        <AiFillHome onClick={homeNavHandler} className={classes.icon} />
        Berry Street
      </Header>
      <BerryStNav />
    </div>
  );
};

export default BerrySt;
