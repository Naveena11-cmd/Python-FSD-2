import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NoPage from './NoPage';

function My() {
    return (
        <div>
        <Router>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="*" element={<NoPage/>}></Route>
            </Routes>
        </Router>
    </div>
    )
}
export default My;
