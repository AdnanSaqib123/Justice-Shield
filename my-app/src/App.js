import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'boxicons/css/boxicons.min.css';
import Header from './components/Header';
import Home from './components/pages/Home';
import Client from './components/pages/Client';
import Footer from './components/Footer';
import ContactUs from './components/pages/ContactUs';
import AboutUs from './components/pages/AboutUs';
import LawyerList from './components/pages/LawyerList';
import OurServices from './components/pages/OurServices';
import AskQuestions from './components/pages/AskQuestions';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<><Home /><AboutUs /><Client /></>} />
          <Route path="/askquestions" element={<AskQuestions />} />
          <Route path="/lawyerlist" element={<LawyerList />} />
          <Route path="/ourclients" element={<Client />} />
          <Route path="/ourservices" element={<OurServices />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
