import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Clothes from "./pages/Clothes";
import Navbar from "./components/Navbar";
import ClothDetails from "./pages/ClothDetails";

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/clothes" exact component={Clothes} />
          <Route path="/clothes/:cloth_id" component={ClothDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
