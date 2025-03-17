import React from "react";
import "./Welcome.css";
import Click from "../Click";

function Welcome({ firstName, lastName }) {
  // Javascript ici

return (
    <section>
    <h1 className="tailwindMeManque">
        Welcome {firstName} {lastName}
    </h1>
    <Click></Click>
    </section>
);
}

export default Welcome;
