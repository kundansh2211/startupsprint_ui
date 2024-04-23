import './App.css';
import { BrowserRouter } from 'react-router-dom';
import StartupsprintRoutes from './startupsprintRoutes/StartupsprintRoutes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

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
