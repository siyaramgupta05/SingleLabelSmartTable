import "./styles.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Users from "./pages/user/Users";
import User from "./pages/user/User";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <ul>
          <li>
            <Link to="/">Users</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
