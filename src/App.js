import Asistencia from './components/Asistencia/Asistencia';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Lugar from './components/Lugar/Lugar';
import LinkRegalo from './components/LinkRegalo/LinkRegalo';
import './App.css';
import InfoExtra from './components/InfoExtra/InfoExtra';
function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <Lugar/>
      <LinkRegalo/>
      <Asistencia/>
      <InfoExtra/>
    </>
  );
}

export default App;
