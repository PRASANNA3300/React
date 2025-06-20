import React from "react";
import Button from "./Button";
import withClickTracking from "./withClickTracking";

const App = () => {
  const ButtonWithTracking = withClickTracking(Button);

  return (
    <div>
      <ButtonWithTracking
        label="Pay Now"
        trackingInfo={{ amount: "2000", user: "prasanna" }}
      />
    </div>
  );
};

export default App;
