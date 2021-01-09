import QuizMain from "./Quiz/QuizMain";
import PersonalMain from "./PersonalArea/PersonalMain/PersonalMain";
import Rating from "./Rating/RangeMain";
import Reg from './Reg/Reg'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



function Layout() {
  return (
    <div>
      <Router>
        <Switch>
          
          <Route exact path="/" component={PersonalMain}></Route>
          <Route path="/quiz" component={QuizMain}></Route>
          <Route path="/rating" component={Rating}></Route>
          <Route path="/reg" component={Reg}/>
        </Switch>
      </Router>
    </div>
  );
}

export default Layout;