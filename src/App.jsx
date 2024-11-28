import './index.css'; // Ensure you have Tailwind set up in your project
import Home from './components/pages/Home/Home';
import Navbar from './components/Navbar/navbarNetflix';
function App() {
    return (
        <Home>
            <Navbar />
        </Home>
    );
}

export default App;
