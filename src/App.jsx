import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import ErrorPage from './Pages/ErrorPage';
import MainPage from './Pages/MainPage';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import ProfilePage from './Pages/ProfilePage';
import AddProfilePage from './Pages/AddProfilePage';
import { ToastContainer } from 'react-toastify';

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="profile/:id" element={<ProfilePage />} />
          <Route path="addprofile" element={<AddProfilePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
};

export default App;
