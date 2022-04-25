import React from 'react'
import { NavLink } from 'react-router-dom';

const Header1 = () => {
    return (
        <div>

            


            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">β-Testing</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/main/Mainhome">Home</NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact Us</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pages
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          {/* <NavLink to="/" end>Home</NavLink> */}
            <li><NavLink className="dropdown-item" to="/main/betalisting">betalisting</NavLink></li>
            <li><NavLink className="dropdown-item" to="/main/betadetails">Beta Details</NavLink></li>
            <li><NavLink className="dropdown-item" to="/main/EnrolledTest">Enrolled Test</NavLink></li>
            <li><NavLink className="dropdown-item" to="/main/login">addmin and User Login</NavLink></li>
            <li><NavLink className="dropdown-item" to="/main/signup">addmin and User SignUp</NavLink></li>
            <li><NavLink className="dropdown-item" to="/company/addtest">Add Test</NavLink></li>
            <li><NavLink className="dropdown-item" to="/company/companylogin">Company Login</NavLink></li>
            <li><NavLink className="dropdown-item" to="/company/companysignup">Company SignUp</NavLink></li>
            <li><NavLink className="dropdown-item" to="/main/resetpassword">User and Admin Reset password</NavLink></li>
            <li><NavLink className="dropdown-item" to="/feedback">User Feedback</NavLink></li>
            <li><NavLink className="dropdown-item" to="/main/footer">Footer</NavLink></li>
            {/* <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li> */}
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Free Testing</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <NavLink to="/"  className="btn btn-outline-success mx-1" type="submit">Search</NavLink>
        <NavLink className="btn btn-danger mx-1" to="/main/login" >Login</NavLink>
        <NavLink className="btn btn-outline-danger mx-1" to="/main/signup" >SignUp</NavLink>
      </form>
    </div>
  </div>
</nav>

        </div>
    )
}

export default Header1;