import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./components/admin";
import Admindashboard from "./components/admin/admindashboard";
import Adminfooter from "./components/admin/adminfooter";
import Company from "./components/company";
import Addtest from "./components/company/addtest";
import Companydashboard from "./components/company/companydashboard";
import Companyheader from "./components/company/companyheader";
import Companylogin from "./components/company/companylogin";
import Companysignup from "./components/company/companysignup";
import Compnayfooter from "./components/company/compnayfooter";
import Main from "./components/main";
import BetaDetails from "./components/main/betadetails";
import Betalisting from "./components/main/betalisting";
import EnrolledTest from "./components/main/enrolledtests";
import Mainhome from "./components/main/home";
import Login from "./components/main/login";
import SignUp from "./components/main/signup";


function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>

<Route   element={<Admin></Admin>} path="Admin" >
  <Route element={<Admindashboard></Admindashboard>} path="admindashboard"/>
  <Route element={<Adminfooter></Adminfooter>} path="adminfooter"/>
</Route>


<Route element={<Company></Company>} path="Company">
  <Route element={<Addtest></Addtest>} path="addtest"/>
  <Route element={<Companydashboard></Companydashboard>} path="companydashboard"/>
 <Route element={<Compnayfooter></Compnayfooter>} path="companyfooter"/>
 <Route element={<Companylogin></Companylogin>} path="companylogin"/>
 <Route element={<Companysignup></Companysignup>} path="companysignup"/>
 <Route element={<Companyheader></Companyheader>} path="companyheader"/>
</Route>



<Route element={<Main></Main>} path="main" > 
<Route element={<BetaDetails></BetaDetails>} path="betadetails"/>
<Route element={<Betalisting></Betalisting>} path="betalisting"/>
<Route element={<Mainhome></Mainhome>} path="Mainhome"/>
<Route element={<EnrolledTest></EnrolledTest>} path="EnrolledTest"/>
<Route element={<Login></Login>} path="Login"/>
<Route element={<SignUp></SignUp>} path="SignUP"/>

</Route>

<Route element={<Navigate to="/main/Mainhome" />} path="/" />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
