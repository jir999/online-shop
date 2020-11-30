import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./routes/index";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routing />
      </Router>
    </div>
  );
}

export default App;
