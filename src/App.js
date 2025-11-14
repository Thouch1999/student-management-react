import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/home/Home";
import CreateStudent from "./page/addStudent/CreateStudent";
import EditStudent from "./page/editStudent.js/EditStudent";
import { ThemeProvider } from "./contexts/ThemeContext";
import StudentManagement from "./components/studentManagement/StudentManagement";
import Login from "./page/auth/Login";
import Dashboard from "./page/dashboard/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        {/* <Route path="/dashboard" element={<Dashboard/>}></Route> */}
        <Route path={"/students"} element={<StudentManagement />}></Route>
        {/* <Route path={"/add-student"} element={<CreateStudent />}></Route>
        <Route path={"/stuent/edit/:id"} element={<EditStudent />}></Route> */}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
