import { ToastContainer, toast } from "react-toastr";
import RC_Viewer from "./CommonUtils/RC_Viewer";
import Loggin from "./Components/DashBoard/Loggin/Loggin";
import Signup from "./Components/DashBoard/Signup/Signup";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Loggin />}></Route>
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/Employee/:id" element={<RC_Viewer />} />
      </Routes>
    </>
  );
}

export default App;
