import preloader from "../../../assets/img/b4d657e7ef262b88eb5f7ac021edda87.gif";
import React from "react";
import classes from "../Preloader/Preloader.module.css";

let Preloader = (props) => {
    return (
        <div className={classes.Preloader}><img src={preloader}/></div>
    )
}
export  default Preloader;