import React, { Component } from "react";

export class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      profession: "",
    };
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeProfession = this.onChangeProfession.bind(this);
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  onChangeProfession(e) {
    this.setState({
      profession: e.target.value,
    });
  }
  submitForm(e) {
    e.preventDefault();
    const body = {
      email : this.state.email,
      password : this.state.password
    }
    console.log(body);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="jumbotron text-center">SIGN UP PAGE</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-10 col-md-6 col-md-offset-3 well well-lg">
            <form onSubmit={this.submitForm}>
              <div className="form-group">
                <label htmlFor="fee">Full name</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  name="name"
                  value={this.state.name}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="fee">Email</label>
                <input
                  type="email"
                  className="form-control"
                  required
                  name="email"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                />
              </div>
              <div className="form-group">
                <label htmlFor="fee">Password</label>
                <input
                  type="password"
                  className="form-control"
                  required
                  name="password"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                />
              </div>
              <div className="form-group">
                <label htmlFor="fee">Profession</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  value={this.state.profession}
                  onChange={this.onChangeProfession}
                />
              </div>
              <div className="form-group">
                <button className="btn btn-success" type="submit">
                  Signup
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
