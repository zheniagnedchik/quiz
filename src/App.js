import QuizMain from "./Components/Quiz/QuizMain";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <QuizMain />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
