import "./App.css"
import {Route, Link, Switch, HashRouter} from "react-router-dom";
import Home from "./Components/Home";
import Recipe from "./Components/Recipe";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav,Container,Navbar } from "react-bootstrap";

function App() {
    return (
        <div>
            <HashRouter>
                <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" className="shadow-lg mb-3">
                    <Container>
                        <Navbar.Brand><Link to="/">HOME</Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Link className="text-light" to="/recipe/1">Perfection Salad</Link>
                                <Link to="/recipe/2">Hamburger Pie</Link>
                                <Link to="/recipe/3">Cherry Pineapple Bologna</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Switch>
                    <Route path="/recipe/:recipeId" component={Recipe}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </HashRouter>
        </div>

    )}

export default App;
