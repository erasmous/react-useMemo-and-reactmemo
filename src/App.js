import "./App.css";
import ParentComponent from "./ParentComponent.jsx";
import MaskedInput from "./MaskedInput.jsx";
import Quote from "./Quote.jsx";

function App() {
  return (
    <div className="App">
      <ParentComponent />
      <MaskedInput />
      <Quote />
    </div>
  );
}

export default App;
