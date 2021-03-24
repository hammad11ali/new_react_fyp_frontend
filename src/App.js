import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import Create from "./create";
import "./App.css";
import Show from "./show";
function App() {
  return (
    <div className="App-header">
      <Create></Create>
      <br />
      <br />
      <Show></Show>
    </div>
  );
}

export default App;
