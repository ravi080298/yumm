import "./App.css";
import VideoCall from "./components/form/videoCall/VideoCall";
import YgForm from "./components/form/YgForm";
import YgInformation from "./components/information/YgInformation";
import { Switch, Link, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="left">
        <YgInformation />
      </div>
      <div className="right">
        <Router>
          <Switch>
            <Route exact path="/" component={YgForm} />

            {/* <Route path="/videocall" render={(props) => <VideoCall />} /> */}
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
