import './App.css';
import { BrowserRouter } from 'react-router-dom';
import StartupsprintRoutes from './startupsprintRoutes/StartupsprintRoutes';

function App() {
  return (
  <>
      <BrowserRouter>
        <StartupsprintRoutes/>
      </BrowserRouter>
  </>
  );
}

export default App;
