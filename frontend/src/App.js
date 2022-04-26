import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./components/admin";
import Admindashboard from "./components/admin/admindashboard";
import Adminfooter from "./components/admin/adminfooter";
import Company from "./components/company";
import Addtest from "./components/company/addtest";
import Companydashboard from "./components/company/companydashboard";
import ManageTest from "./components/company/manageTest";
import Main from "./components/main";
import BetaDetails from "./components/main/betadetails";
import Betalisting from "./components/main/betalisting";
import Companylogin from "./components/main/companylogin";
import Companysignup from "./components/main/companysignup";
import Mainhome from "./components/main/home";
import Login from "./components/main/login";
import SignUp from "./components/main/signup";
import en from "javascript-time-ago/locale/en.json";
import TimeAgo from "javascript-time-ago";
import { Toaster } from "react-hot-toast";
import EnrolledTest from "./components/user/enrolledTest";
import User from "./components/user";
import ManageFeedbacks from "./components/company/manageFeedbacks";
import AddFeedback from "./components/user/addFeedback";

function App() {
  TimeAgo.addDefaultLocale(en);
  return (
    <div>
      <BrowserRouter>
        {/* <Toaster position="top-right" /> */}

        <Routes>
          <Route element={<Admin />} path="Admin">
            <Route element={<Admindashboard />} path="admindashboard" />
            <Route element={<Adminfooter />} path="adminfooter" />
          </Route>

          <Route element={<Company />} path="Company">
            <Route element={<Addtest />} path="addtest" />
            <Route element={<ManageTest />} path="managetest" />
            <Route element={<Companydashboard />} path="companydashboard" />
            <Route element={<ManageFeedbacks />} path="managefeedbacks" />
          </Route>
          <Route element={<User />} path="user">
            <Route element={<EnrolledTest />} path="enrolled" />
          </Route>

          <Route element={<Main />} path="main">
            <Route element={<AddFeedback />} path="addfeedback/:id" />
            <Route element={<BetaDetails />} path="betadetail/:id" />
            <Route element={<Betalisting />} path="betalisting" />
            <Route element={<Mainhome />} path="Mainhome" />
            <Route element={<Companylogin />} path="companylogin" />
            <Route element={<Companysignup />} path="companysignup" />
            <Route element={<Login />} path="Login" />
            <Route element={<SignUp />} path="SignUP" />
          </Route>

          <Route element={<Navigate to="/main/Mainhome" />} path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
