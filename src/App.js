import QuizMain from "./components/Quiz/QuizMain";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
         
          <Route path="/" component={QuizMain}></Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
