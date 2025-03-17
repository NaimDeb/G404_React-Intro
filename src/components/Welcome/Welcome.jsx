import React from "react";
import "./Welcome.css";

function Welcome({ firstName, lastName }) {
  // Javascript ici

return (
    <section>
    <h1 className="tailwindMeManque">
        Welcome {firstName} {lastName}
    </h1>
    </section>
);
}

export default Welcome;
