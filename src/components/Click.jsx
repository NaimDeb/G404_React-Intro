import React, { useState } from 'react'

function Click() {

  // On a créé
  // useState est un hook, fonction donnée par reatc pour faire des choses
  // useState c'est pour créer un état, qui ets le seul a se recharger au lieu de rehcarger la page
  // On a le count et un setter, on utilise le setter pour changer la value comme en POO 
    const [count, setCount] = useState(0);
  // const nomDeVariable, nomSetter = useState(valeurInitiale)

  function addOne() {

    setCount(count+1);
    
  }
  function removeOne() {

    setCount(Math.max(0, count-1));
    
  }

  // C'ets react donc pas d'eventlisteneer pck NUL
  // document.querySelector("button").addEventListener()


  return (
    <section>
      <p>Vous avez cliqué {count} fois</p>

      <button onClick={addOne}>Cliquez bande de crevettes !</button>
      <button onClick={removeOne}>Décliquez bande de crevettes !</button>
      
    </section>
  )
}

export default Click