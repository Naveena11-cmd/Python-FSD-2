import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Shome from "./Shome";
import Sproject from "./Sproject.jsx";
import Snopage from "./Snopage";
import img1 from '../assets/p1.jfif'
import img2 from '../assets/p2.jfif'
import img3 from '../assets/p3.jfif'

function Student() {
    const s = [{ name: 'P1', desc: 'lorem10', image: img1 },
        { name: 'P2', desc: 'lorem10', image: img2 },
        { name: 'P3', desc: 'lorem10', image: img3 }
    ]
    return (
        <div>
            <Router>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                </ul>

                <Routes>
                    <Route path="/" element={<Shome />} />
                    <Route path="/projects" element={<Sproject data={s} />} />
                    <Route path="*" element={<Snopage/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default Student;