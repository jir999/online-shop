import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./routes/index";
import store from "./store";
import { Provider } from "react-redux";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <Routing />
        </Provider>
      </Router>
    </div>
  );
}

export default App;
