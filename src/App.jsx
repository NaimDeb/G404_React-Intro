import "./App.css";
import Time from "./components/Time";
import Welcome from "./components/Welcome/Welcome";

function App() {
  return (
    <>
      {/* le <> c'est un fragment, dans le cas ou faire une balise te convient pas. ca compile en rien en fait */}
      <Welcome firstName="Ahmed" lastName="Truand de la galère" />
      <Time />
    </>
  );
}

export default App;
