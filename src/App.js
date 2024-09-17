import logo from "./logo.svg";
import "./App.css";
import SignUpForm from "./SignUpForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="signup" element={<SignUpForm />} />
        <Route path="login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
