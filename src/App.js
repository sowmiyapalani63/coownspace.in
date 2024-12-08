import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import AboutUs  from './Pages/About-us/Aboutus';
import Contact from './Pages/Contact/Contact';
import Property from './Pages/Property/Property';

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/about-us" element={<AboutUs />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/property" element={<Property />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
