import React, { useState } from "react";
// import paypal from "@paypal/checkout-server-sdk";
import { PayPalButton } from "react-paypal-button-v2";
import { useDispatch, useSelector } from "react-redux";
import { removeAllItems } from "../redux/action/itemAction";

const PaypalButton = ({ clientId, amount, onSuccess, onError, onCancel }) => {
  const [success, setSuccess] = useState();
  const items = useSelector((state) => state?.item.itemsList);

  const dispatch = useDispatch();
  const onApprove = (data, actions) => {
    actions.order.capture().then((details) => {
      setSuccess(details.status);
      dispatch(removeAllItems());
    });
  };

  const aa = amount?.toString().slice(0, 4);

  return (
    <div>
      {items?.length ? (
        <div>
          <PayPalButton
            amount={aa}
            clientId={clientId}
            onSuccess={onSuccess}
            onError={onError}
            onCancel={onCancel}
            onApprove={onApprove}
          />
        </div>
      ) : null}

      <div
        style={{ fontSize: "24px", textAlign: "center", color: "whitesmoke" }}
      >
        {success}
      </div>
    </div>
  );
};

export default PaypalButton;
