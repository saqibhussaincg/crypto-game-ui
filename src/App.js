
import './App.css';
import Blogs from './components/Blogs';
import BuySell from './components/BuySell';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
     <Navbar />
     <Home />
     <BuySell />
     <Blogs />
     <Footer />
    </div>
  );
}

export default App;
