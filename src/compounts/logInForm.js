import React from 'react';
import './style/logInForm.css' //src\compounts\style\logInForm.css

class LogInForm extends React.Component {
  state = {
    Username: '' ,
    password : '' ,
    ischecked : false
  }
  handelUsername = (e) =>{
    this.setState({Username : e.target.value})
  }
  handelPassword = (e) =>{
    this.setState({password : e.target.value})
  }
  handelcheck = ()=>{
    this.setState((state)=>({ischecked : !state.ischecked}))
  }
  onsubmit = (e) =>{
    e.preventDefault() ;
    this.props.logIn(this.state.Username ,this.state.ischecked  ) ;
    this.props.roter.history.push('/')
  }
  handelCancel = ()=>{
    console.log(this.props.roter.history.goBack());
  }
  render() {
    return(
      <form className="form col-xl-4  col-lg-5 col-7"
      onSubmit = {(e)=>this.onsubmit(e)}>

        <div className="imgcontainer">
          <i className="fas fa-user-circle"></i>
          <p> log in to burger app</p>
        </div>

        <div className="formcontainer">
          <label htmlFor="uname"><b>Username</b></label>
          <input type="text"
                 placeholder="Enter Username"
                 onChange = {(e)=> this.handelUsername (e)}
                 name="uname"
                 className="form-control"
                 value = {this.state.Username}
                 required />

          <label htmlFor="psw"><b>Password</b></label>
          <input type="password"
                 placeholder="Enter Password"
                 name="psw"
                 className="form-control"
                 onChange = {(e)=> this.handelPassword(e)}
                  value = {this.state.password}
                 required />

          <div className="custom-control custom-checkbox">
             <input type="checkbox"
             checked = {this.state.ischecked}
             onChange = {this.handelcheck}
             className="custom-control-input " id="customCheck"/>
             <label className="custom-control-label" htmlFor="customCheck">remeber me </label>
         </div>
         </div>

        <div className="container" >
          <button type="submit" className="btn btn-dark">Login</button>
          <button type="button" className="btn btn-outline-dark"
          onClick = {this.handelCancel }>Cancel</button>
        </div>
</form>
    )
  }
}

export default LogInForm  ;
