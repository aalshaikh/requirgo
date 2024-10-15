import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import Home from './landing/home';
import Login from './auth/Login';


function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="auth/login" element={<Login />} />

        </Route>
      </Routes>
  )
}

export default App;
