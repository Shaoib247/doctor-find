import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeMain from './components/Home/Layout/HomeMain/HomeMain';
import Home from './components/Home/Layout/Home';
import Doctor from './components/Page/Doctor/Doctor';
import Diagnostic from './components/Page/Diagnostic/Diagnostic';
import Hospital from './components/Page/Hospital/Hospital';
import About from './components/Page/About/About';
import FindDoctor from './components/Page/FindDoctor/FindDoctor';
import FindDiagnostic from './components/Page/FindDiagnostic/FindDiagnostic';
import Signup from './components/Auth/Signup/Signup';
import Login from './components/Auth/Login/Login';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';


function App() {
  return (
   
    <>
    
    <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomeMain />}>
          <Route path="/" element={<Home />} />
          <Route path="/all/doctor" element={<Doctor />} />
          <Route path="/all/diagnostic/center" element={<Diagnostic />} />
          <Route path="/all/hospital" element={<Hospital />} />
          <Route path="/about" element={<About />} />
          <Route path="/find/doctor" element={<FindDoctor />} />
          <Route path="/find/diagnostic/center" element={<FindDiagnostic />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
         </Route>
        </Routes>
      </BrowserRouter>

    
    </>
   
  );
}

export default App;
