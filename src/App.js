import './App.css';
import Descussion from './Container/Descussion';
 import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="App">
      <ToastContainer/>
      <Descussion />
    </div>
  );
}

export default App;
