Login = React.createClass({

  render() {

    return (
      <div className="container">
        <div className="col-sm-6 col-sm-offset-4">
          <h2>Get in here.</h2>
          <form className="loginForm">
            <input type="text" className="" defaultValue="Username" />
            <input type="password" className="" defaultValue="Password" />
            <input type="submit" className="" value="Login" />
          </form>
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
