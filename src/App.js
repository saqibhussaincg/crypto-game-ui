
import './App.css';
import Blogs from './components/Blogs';
import BuySell from './components/BuySell';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
     <Navbar />
     <Home />
     <BuySell />
     <Blogs />
    </div>
  );
}

export default App;
