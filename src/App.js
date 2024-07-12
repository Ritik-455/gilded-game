import { useEffect, useState } from 'react';
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
import Aos from "aos";
import "aos/dist/aos.css";
import Loader from './Common/Loader';


function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    Aos.init({ once: true, duration: 1000 });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [])
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
}

export default App;
