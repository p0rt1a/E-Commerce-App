import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Clothes from "./pages/Clothes";
import ClothDetails from "./pages/ClothDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";
import ProtectedRoute from "./pages/ProtectedRoute";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/clothes" exact component={Clothes} />
          <Route path="/clothes/:cloth_id" component={ClothDetails} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <ProtectedRoute path="/admin" component={Admin} admin={true} />
          <ProtectedRoute path="/account" component={Account} />
          <ProtectedRoute path="/cart" component={Cart} />
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
