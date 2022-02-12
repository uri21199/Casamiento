import Asistencia from './components/Asistencia/Asistencia';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Lugar from './components/Lugar/Lugar';
import Testigos from './components/Testigos/Testigos';
import './App.css';
function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <Lugar/>
      <Testigos/>
      <Asistencia/>
    </>
  );
}

export default App;
