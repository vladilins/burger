import React from "react";
import Aux from "../../hoc/Auxa";
import classes from "./Layout.css";

const layout = props => (
  <Auxa>
    <div>Toolbar, Sidbar, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Auxa>
);

export default layout;
