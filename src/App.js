import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Clothes from "./pages/Clothes";
import Navbar from "./components/Navbar";
import ClothDetails from "./pages/ClothDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";
import ProtectedRoute from "./pages/ProtectedRoute";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Switch>
          {/* TODO: Navigate to Home component when it is '/': */}
          <Route path="/" exact component={Clothes} />
          <Route path="/clothes" exact component={Clothes} />
          <Route path="/clothes/:cloth_id" component={ClothDetails} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <ProtectedRoute path="/account" component={Account} />
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
