import './App.css';
import { BrowserRouter } from 'react-router-dom';
import StartupsprintRoutes from './startupsprintRoutes/StartupsprintRoutes';
import Footer from './Components/Footer';


function App() {
  return (
  <>
      <BrowserRouter>
        <StartupsprintRoutes/>
        <Footer/>
      </BrowserRouter>
  </>
  );
}

export default App;
