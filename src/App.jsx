import './index.css'; // Ensure you have Tailwind set up in your project
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import {Routes,Route} from "react-router-dom"
function App() {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
        </Routes> 
    );
}

export default App;
