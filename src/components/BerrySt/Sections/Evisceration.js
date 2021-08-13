import classes from "./Evisceration.module.css";

import Header from "../../UI/Header";
import SafetyHazards from "./SafetyHazards";

import { useState } from "react";
import { useHistory } from "react-router";
import { AiFillHome } from "react-icons/ai";

const Evisceration = (props) => {
  const history = useHistory();
  const [active, setActive] = useState("safety");
  const firstDay = new Date(
    new Date().setDate(new Date().getDate() - new Date().getDay() + 1)
  );
  const [currentDate, setCurrentDate] = useState(
    firstDay.getFullYear() +
      "-" +
      ("0" + (firstDay.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + firstDay.getDate()).slice(-2)
  );
  const homeNavHandler = () => {
    history.push("/");
  };

  const changeActiveHandler = (event) => {
    setActive(event.target.id);
  };

  const dateChangeHandler = (event) => {
    setCurrentDate(event.target.value);
  };
  if (document.getElementById("startDate") != null) {
    console.log(document.getElementById("startDate").value);
  }
  return (
    <div>
      <Header headerType="Secondary">
        <AiFillHome onClick={homeNavHandler} className={classes.icon} />
        Evisceration
      </Header>
      <main className={classes.main}>
        <ul className={classes.nav}>
          <li>
            <p
              className={active === "safety" ? classes.active : ""}
              id="safety"
              onClick={changeActiveHandler}
            >
              Safety
            </p>
          </li>
          <li>
            <p
              className={active === "people" ? classes.active : ""}
              id="people"
              onClick={changeActiveHandler}
            >
              People
            </p>
          </li>
          <li>
            <p
              className={active === "quality" ? classes.active : ""}
              id="quality"
              onClick={changeActiveHandler}
            >
              Quality
            </p>
          </li>
          <li>
            <p
              className={active === "delivery" ? classes.active : ""}
              id="delivery"
              onClick={changeActiveHandler}
            >
              Delivery
            </p>
          </li>
          <li>
            <p
              className={active === "cost" ? classes.active : ""}
              id="cost"
              onClick={changeActiveHandler}
            >
              Cost
            </p>
          </li>
        </ul>
        {active === "safety" && (
          <form className={classes.form}>
            <label htmlFor="week">Week: </label>
            <select name="week" id="week">
              <option value="week1">Week 1</option>
              <option value="week2">Week 2</option>
              <option value="week3">Week 3</option>
              <option value="week4">Week 4</option>
            </select>
            <label htmlFor="startDate">Week Start: </label>
            <input
              name="startDate"
              id="startDate"
              type="date"
              value={currentDate}
              onChange={dateChangeHandler}
            ></input>
          </form>
        )}
        {active === "safety" && <SafetyHazards date={currentDate} />}
      </main>
    </div>
  );
};

export default Evisceration;
