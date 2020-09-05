import React, { Component } from 'react'

export class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      email : "",
      password : "",
    }
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }
  onChangeName(e){
    this.setState({
      email : e.target.value,
    })
  }
  onChangePassword(e){
    this.setState({
      password : e.target.value,
    })
  }
  onLogIn(e){
    e.preventDefault();
  }
    render() {
        return (
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="jumbotron text-center">LOGIN PAGE</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-10 col-md-6 col-md-offset-3 well well-lg">
                <form onSubmit={this.onLogIn}>
                  <div className="form-group">
                    <label htmlFor="fee">email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={this.state.email}
                      onChange={this.onChangeName}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="fee">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={this.state.password}
                      onChange={this.onChangePassword}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <button className="btn btn-success" type="submit">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
    }
}

export default Login
