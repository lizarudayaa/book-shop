import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { itemsSelectors } from "../../store/items";
import Button from "../Button/Button";

const Summary = () => {
  const history = useHistory();
  const price = useSelector(itemsSelectors.totalprice());
  return (
    <div className="aside">
      <div className="summary">
        <div className="summary_total">
          <span className="summary_total_text">Checkout</span>
        </div>
        <div className="summary_subtotal">
          <div className="summary_subtotal_title">Subtotal</div>
          <div className="summary_subtotal_value">{price}</div>
        </div>
        <div>
          <Button
            text="checkout"
            color="black"
            onClick={() => history.push("/checkout")}
          />
        </div>
      </div>
    </div>
  );
};

export default Summary;
