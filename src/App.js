import './App.css';
import Earn from './Components/Earn';
import Herosection from './Components/Herosection';
import Plateform from './Components/Plateform';
import Token from './Components/Token';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Utility from './Components/Utility';
import Roadmap from './Components/Roadmap';
import Buy from './Components/Buy';
import Frequent from './Components/Frequent';
import Powered from './Components/Powered';
import Accordion from './Components/Accordion';

function App() {
  return (
    <>
      <Herosection />
      <Utility />
      <Earn />
      <Plateform />
      <Token />
      <Roadmap />
      <Buy />
      <Powered />
      <Frequent />
    </>
  );
}

export default App;
