Login = React.createClass({

  _handleLogin (event) {
    event.preventDefault;
    let username = this.refs.loginUsername.value;
    let password = this.refs.loginPassword.value;
    Meteor.loginWithPassword(username, password, function(error){
      if(error){
        console.log(error);
      }
      else {
        FlowRouter.go("/");
      }
    });
  },

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 center-block">
            <h2 className="text-center">Get in here.</h2>
            <form className="form loginForm">
              <div className="form-group col-md-6 col-md-offset-3">
                <input type="text" className="loginFormEffects center-block" ref="loginUsername" placeholder="Username" />
              </div>
              <div className="form-group col-md-6 col-md-offset-3">
                <input type="password" className="loginFormEffects center-block" ref="loginPassword" placeholder="Password" />
              </div>
              <div className="form-group col-md-6 col-md-offset-3">
                <input type="button" className="center-block" value="Login" onClick={this._handleLogin} />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

LoginWrapper = React.createClass({
  render() {
    return (
      <Login key={Login} />
    );
  }
});
