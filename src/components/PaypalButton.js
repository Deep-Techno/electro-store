import React, { useState } from "react";
// import paypal from "@paypal/checkout-server-sdk";
import { PayPalButton } from "react-paypal-button-v2";

const PaypalButton = ({ clientId, amount, onSuccess, onError, onCancel }) => {
  const onApprove = (data, actions) => {
    actions.order.capture().then((details) => {
      console.log(details);
    });
  };

  const aa = amount?.toString().slice(0, 3);
  console.log("amount :", aa);
  return (
    <PayPalButton
      amount={aa}
      clientId={clientId}
      onSuccess={onSuccess}
      onError={onError}
      onCancel={onCancel}
      onApprove={onApprove}
    />
  );
};

export default PaypalButton;
