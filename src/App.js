import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/home/Home";
import CreateStudent from "./page/addStudent/CreateStudent";
import EditStudent from "./page/editStudent.js/EditStudent";
import { ThemeProvider } from "./contexts/ThemeContext";
import StudentManagement from "./components/studentManagement/StudentManagement";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/students"} element={<StudentManagement/>}></Route>
        {/* <Route path={"/add-student"} element={<CreateStudent />}></Route>
        <Route path={"/stuent/edit/:id"} element={<EditStudent />}></Route> */}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
