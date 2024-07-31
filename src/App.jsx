import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/header/Header';
import Adven from './Components/Adven/Adven';
import Swiper from './Components/Swiper/Swiper';
// import Swiper2 from './Components/Slider/Slider';
import Slider from './Components/Slider/Slider';
import Grant from './Components/Grant/Grant';
import Cource from './Components/Course/Course';
import Selection from './Components/Selection/Selection';
function App() {
  return (
    <div className="App container">
      <Navbar />
      <Header />
      <Adven />
      <Swiper />
      <Grant />
      <Cource />
      <Selection />
    </div>
  );
}

export default App;
