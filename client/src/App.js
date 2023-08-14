import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import RegisterPage from "./Pages/RegisterPage"
import LoginPage from "./Pages/LoginPage"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const user = false;
  return (
    <div>
      <BrowserRouter>
        <Navbar user = {user}/>
        <Routes>
        <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={user ? <HomePage/>:<LoginPage />} />
          <Route exact path="/register" element={user ? <HomePage/>:<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
