import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {Footer, Header, Login, Products, SingleProduct} from './components';
import {useGlobalContext} from './context/AppContext';
import {CreateComment, Home} from './pages';

function App() {
  const {user} = useGlobalContext();
  const isLoggedIn =
    user && user.name !== '' && user.photo !== '' && user.email !== '';

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <Login />} />
        <Route
          path="/create"
          element={isLoggedIn ? <CreateComment /> : <Login />}
        />
        <Route
          path="/products"
          element={isLoggedIn ? <Products /> : <Login />}
        />
        <Route
          path="/detail"
          element={isLoggedIn ? <SingleProduct /> : <Login />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
