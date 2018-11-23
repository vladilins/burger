import React from "react";
import PropeTypes from "prop-types";

import classes from "./BurgerIngredient.css";

const burgerIngredient = props => {
  let ingredient = null;
  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className={classes.BreadBottom} />;
      break;
    case "bread-top":
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1} />
          <div className={classes.Seeds2} />
        </div>
      );
      break;
    case "meat":
      ingredient = <div className={classesMeat} />;
      break;
    case "cheese":
      ingredient = <div className={classesCheese} />;
      break;
    case "bacon":
      ingredient = <div className={classesBacon} />;
      break;
    case "salad":
      ingredient = <div className={classesSalad} />;
      break;
    default:
      ingredient = null;
  }
  return ingredient;
};

BurgerIngredient.propTypes = {
  type: PropeTypes.string.isRequired
};

export default burgerIngredient;
