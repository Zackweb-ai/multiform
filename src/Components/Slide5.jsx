import React from "react";
import thankyou from "../assets/images/icon-thank-you.svg";

function Slide5() {
  return (
    <div className="thx">
      <img className="img-t" src={thankyou} alt="thankyou" />
      <h2 className="th">Thank you!</h2>
      <p className="pb">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}

export default Slide5;
