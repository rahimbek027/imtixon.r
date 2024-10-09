import './App.css';
import { Context } from "./context/Context";
import { useContext } from 'react';
import Dashboard from './routes/Dashboard';
import Login from './routes/Login';

function App() {
  const { token } = useContext(Context);

  return (
    <>
      <Login />
      {token && <Dashboard />}
    </>
  );
}

export default App;
