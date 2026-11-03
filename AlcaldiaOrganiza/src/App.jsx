import { Routes, Route } from "react-router-dom";
import Principal from "./Principal";
import Login from "./Login";
import Registro from "./Registro";
import Dashboard from "./Dashboard";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Principal />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
}

export default App;