import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ResetPassword from './component/ResetPassword';
import ForgotPassword from './component/ForgotPassword';
import SuccessModal from "./component/SuccessModal";


function App() {

  return (
    <div>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/success" element={<SuccessModal />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
