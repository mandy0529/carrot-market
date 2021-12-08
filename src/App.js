import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Footer, Header, Login} from './components';
import {CreateComment, Home, MyProduct, SingleProduct} from './pages';
import {useUserContext} from './context/UserContext';

function App() {
  const {user} = useUserContext();
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
          path="/my-product"
          element={isLoggedIn ? <MyProduct /> : <Login />}
        />

        <Route
          path="/products"
          element={isLoggedIn ? <SingleProduct /> : <Login />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
