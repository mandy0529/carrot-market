import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Header, Home, Login} from './components';
import {useGlobalContext} from './context/AppContext';

function App() {
  const {user} = useGlobalContext();
  const isLoggedIn =
    user && user.name !== '' && user.photo !== '' && user.email !== '';

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
