import { BrowserRouter, Routes, Route } from "react-router-dom";
// react-bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// components
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";
// pages
import TaskList from "./pages/TaskList/TaskList";
import TaskForm from "./pages/TaskForm/TaskForm";

const App = () => {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/create-task" element={<TaskForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
