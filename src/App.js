
import './App.css';
import Blogs from './components/Blogs';
import BuySell from './components/BuySell';
import Designs from './components/Designs';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div>
     <ScrollToTop />
     <Navbar />
     <Home />
     <Designs />
     <BuySell />
     <Blogs />
     <Footer />
    </div>
  );
}

export default App;
