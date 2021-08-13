import classes from "./SafetyHazards.module.css";

import Button from "../../UI/Button";
import { Fragment } from "react";
const SafetyHazards = (props) => {
  return (
    <Fragment>
      <h1>Safety Hazards</h1>
      <table className={classes.table}>
        <tbody>
          <tr>
            <th></th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thur</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
          <tr>
            <td>Shift 1</td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
          </tr>
          <tr>
            <td>Shift 2</td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
          </tr>
        </tbody>
      </table>
      <Button buttonType="Save" content="Save" />
    </Fragment>
  );
};

export default SafetyHazards;
