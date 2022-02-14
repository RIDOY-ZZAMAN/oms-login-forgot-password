import './App.css';
import Login from './components/Login/Login';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ForgotPassword from './components/ForgotPassword/ForgotPassword';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
