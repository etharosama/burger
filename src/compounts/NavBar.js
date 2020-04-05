import React from 'react';
import {
  Link
} from "react-router-dom";
import './style/NavBar.css'//src\compounts\style\NavBar.css

class NavBar extends React.Component {
  logout = ()=>{
    alert('YOU HAVE LOGED OUT , THANKS') ;
    this.props.logOut()
  }
  render () {
    return(
<nav className="navbar navbar-expand-lg navbar-dark bg-dark  ">
  <Link className="navbar-brand" to="/">Breger App</Link>
  <button className="navbar-toggler"
           type="button"
           data-toggle="collapse"
           data-target="#navbarSupportedContent"
           aria-controls="navbarSupportedContent"
           aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse my-2  justify-content-end " id="navbarSupportedContent">
    <ul className="navbar-nav  nav justify-content-end ">
      <li className= { this.props.currentPage === 'order' ?  "nav-item active" : "nav-item" } >
        <Link className="nav-link" to="/">
          Home
        {this.props.currentPage === 'order' &&
        <span className="sr-only">
           (current)
         </span>
         }
        </Link>
      </li>

      <li className= {this.props.currentPage === 'bill' ? "nav-item active" : "nav-item"}>
        <Link className="nav-link" to="/ShowOrderFinal">show final order</Link>
        {this.props.currentPage === 'bill' &&
        <span className="sr-only">
           (current)
         </span>
         }
      </li>
      {  this.props.login &&
        <li className = 'nav-item'>
        <span className="nav-link span_link" onClick = {this.logout }>log out </span>
         </li>
      }

      <li className="avater nav-item">

        {this.props.login ?
              <div className = "nav-link">
                <i className="fas fa-user-circle"></i>
                <p>hello ,{this.props.userName}</p>
              </div>
            :
              <Link className="btn btn-light" to="/LoginTotalPage">log in</Link>
           }

      </li>

    </ul>
  </div>
</nav>
    )
  }
}

export default NavBar ;
