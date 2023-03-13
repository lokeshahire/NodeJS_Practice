import "./App.css";
import { Register } from "./components/Register";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { CreateNotes } from "./components/CreateNotes";
import { Notes } from "./components/Notes";

function App() {
  return (
    <div className="App">
      <h1>Note App</h1>
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/createnote" element={<CreateNotes />}></Route>
        <Route path="/notes" element={<Notes />}></Route>
      </Routes>
    </div>
  );
}

export default App;
