
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Home/Footer/Footer';
import Header from './Home/Header/Header';
import Home from './Home/Home/Home';
import AddToCart from './Main/AddToCart/AddToCart';
import ContactUs from './Main/ContactUs/ContactUs';
import DoctorProfile from './Main/DoctorProfile/DoctorProfile';
import Signup from './Authentication/Signup/Signup';
import ServiceDetails from './Main/ServiceDetails/ServiceDetails';
import Login from './Authentication/Login/Login';


function App() {
  return (
    <div>
      <Header></Header>
      
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/contactus" element={<ContactUs></ContactUs>}></Route>
        <Route
          path="/doctorprofile"
          element={<DoctorProfile></DoctorProfile>}
        ></Route>
        <Route path='/addtocart' element={<AddToCart></AddToCart>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/service/:serviceId" element={<ServiceDetails></ServiceDetails>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;