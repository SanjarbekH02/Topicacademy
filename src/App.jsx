import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/header/Header';
import Adven from './Components/Adven/Adven';
import Swiper from './Components/Swiper/Swiper';
import Swiper2 from './Components/Swiper2/Swiper2';
function App() {
  return (
    <div className="App container">
      <Navbar />
      <Header />
      <Adven />
      <Swiper />
      <Swiper2 />
    </div>
  );
}

export default App;
