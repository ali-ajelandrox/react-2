import { useState } from 'react'
import './App.css'
import Registro from './components/Registro';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [mensaje, setMensaje] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState('success');

  return (
    <div>
      <Registro mensaje={mensaje} tipoMensaje={tipoMensaje} />
    </div>
  );
};

export default App;