import classes from "./MainNavigation.module.css";

import Button from "../UI/Button";

import { useHistory } from "react-router";
import { Fragment } from "react";

const MainNavigation = (props) => {
  const history = useHistory();
  const chickNQuickNavHandler = () => {
    history.push("/chick-n-quick");
  };
  const cummingNavHandler = () => {
    history.push("/cumming");
  };
  const berryStNavHandler = () => {
    history.push("/berry-st");
  };
  const monettNavHandler = () => {
    history.push("/monett");
  };
  const noelNavHandler = () => {
    history.push("/noel");
  };
  return (
    <Fragment>
      <main className={classes.content}>
        <h1>Please Select a Plant Location</h1>
        <div className={classes.navigation}>
          <Button content="Chick-N-Quick" onClick={chickNQuickNavHandler} />
          <Button content="Cumming" onClick={cummingNavHandler} />
          <Button content="Berry St." onClick={berryStNavHandler} />
          <Button content="Monett" onClick={monettNavHandler} />
          <Button content="Noel" onClick={noelNavHandler} />
        </div>
      </main>
    </Fragment>
  );
};
export default MainNavigation;
