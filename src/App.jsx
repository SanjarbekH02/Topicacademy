import './App.css';
import './bootstrap.css'
import Navbar from './Pages/Navbar/Navbar';
import Header from './Pages/header/Header';
import Adven from './Pages/Adven/Adven';
import Swiper from './Pages/Swiper/Swiper';
import Grant from './Pages/Grant/Grant';
import Cource from './Pages/Course/Course';
import Selection from './Pages/Selection/Selection';
import Questions from './Pages/Questions/Questions';
import Footer from './Pages/Footer/Footer';
import Modal from './Pages/Modal/Modal';
function App() {
  return (
    <div>
      <div className="App container">
        <Navbar />
        <Header />
        <Adven />
        <Swiper />
        <Grant />
        <Cource />
        <Selection />
        <Questions />
        <Modal />
      </div>
      <Footer />
    </div>
  );
}

export default App;
