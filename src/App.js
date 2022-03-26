import "./App.css";
import Body from "./components/Body/Body";
import Ans from "./components/extra/Ans";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="App bg-secondary container">
      <Header></Header>
      <Body></Body>
      <Ans></Ans>
    </div>
  );
}

export default App;
