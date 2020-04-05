import React from 'react';
import NavBar from '../contaier/NavBar' //src\contaier\NavBar.js
import LogInForm from '../contaier/logInForm.js' //src\contaier\logInForm.js

class LoginTotalPage extends React.Component {
  render() {
    return(
      <div>
        <NavBar/>
        < LogInForm roter ={this.props.roter} />
      </div>
    )
  }
}

export default LoginTotalPage
