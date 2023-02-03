import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation/Navigation';
import { Home } from './pages/Home/Home';
import Onboarding from './pages/onboarding/Onboarding';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path='/' element={<Onboarding />}></Route>
                    <Route path="/home" element={<Home />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
