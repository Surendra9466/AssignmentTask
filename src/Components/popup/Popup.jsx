import {React,useState} from "react";
import "./Popup.css"

var count = 0;
const Popup = props => {
  
  const [count, setCount] = useState(0); 
  function trigger() {
    setCount(count + 1);
  }


  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <div>{props.product.name}</div>
        <div><img src={props.product.imgURL}/></div>
        <div>{props.product.Description}</div>
        <div>{props.product.Category}</div>
        <i class="fa fa-thumbs-up" onClick={trigger}>{count}</i>
        <button id={props.product.id} onClick={props.cartValue}>Add To Cart</button>
      </div>
    </div>
  );
};

export default Popup;
