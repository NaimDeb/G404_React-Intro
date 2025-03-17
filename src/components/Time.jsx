import React, { useEffect, useState } from "react";
import ZaWarudo from "./zaWarudo";


function Time() {
  var [time, setTime] = useState(0);


  function addOneTime() {
    setTime(time + 1);
  }

  // UseEffect sert a dire que le code ci dessous s'execute UNE FOIS
  // 
 useEffect(() => {
  const interval = setInterval(addOneTime, 1000);

  if (time === 5) {

    zaWarudo();

    clearInterval(interval);
  }

  return () => clearInterval(interval);
 },);
// , [] }
//  Le tableau a la fin du UseEffect c pour dire a chaque fois qu'un truc est changé, on refait le useEffect;


 function zaWarudo() {

    document.body.style.filter = "invert(100%)";
    document.body.style.background = "black";

    return <ZaWarudo/>;
 }


  return (
    <section>
      <p>Ca fait {time} secondes</p>
      {time === 5 && zaWarudo()}
    </section>
  );
}

export default Time;

