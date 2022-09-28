import React,{useRef} from "react";
import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModel.module.css";


const ErrorModel = (props) => {  
  return(
  <React.Fragment>
    <div className={styles.backdrop} onClick={props.onConfirm}></div>
    <Card className={styles.model}>
      <h2 className={styles.header}>{props.title}</h2>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  </React.Fragment>);
};

export default ErrorModel;
