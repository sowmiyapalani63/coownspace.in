import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/About-us/Aboutus';
import Contact from './Pages/Contact/Contact';
import Property from './Pages/Property/Property';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/property" element={<Property />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
