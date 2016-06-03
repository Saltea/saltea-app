Header = React.createClass({

  mixins: [ReactMeteorData],
  getMeteorData() {
    let user = Meteor.user();

    var data = {
      authInProcess: Meteor.loggingIn(),
      isUser: Roles.userIsInRole(user, ['user']),
      isKitten: Roles.userIsInRole(user, ['kitten']),
      isAdmin: Roles.userIsInRole(user, ['admin']),
    };

    return data;
  },

  // logout() {
  //   Meteor.logout();
  // },
  // getLogoutButton() {
  //   return (
  //     <span>
  //       <button onClick={this.logout}>Logout</button>
  //     </span>
  //   )
  // },

  _mainAction() {
    let loggedInUser = Meteor.user();

    if (!loggedInUser) {
      return (
        <div className="mainAction pull-right hidden-xs">
          <a href="/contact" className="btn btn-primary">Get Tea</a>
        </div>
      );
    } else if (this.data.isAdmin) {
      return (
        <div className="mainAction pull-right hidden-xs">
          <a href="/add-kitten" className="btn btn-primary">Add Store</a>
        </div>
      );
    } else if (this.data.isKitten) {
      return (
        <div className="mainAction pull-right hidden-xs">
          <a href="" className="btn btn-primary">New Post</a>
        </div>
      );
    } else {
      return;
    }
  },

  _loginAction() {
    let loggedInUser = Meteor.user();

    if (!loggedInUser) {
      return (
        <span>Sign In</span>
      );
    } else {
      let user = Meteor.user().username;
      return (
        <span>{user}</span>
      );
    }
  },

  render() {

    let homeLink = FlowRouter.path("/", {}),
        loginLink = FlowRouter.path("/login", {});

    return (

      <div id="headerWrap">

        <nav className="nav navbar-default">
          <div className="container-fluid noPadding">
            <div className="col-sm-12 col-lg-12 col-lg-offset-0 noPadding">
              {/* <div className="pull-left">
                <a id="menuToggle" className="bm-burger-button btn btn-default"><i className="fa fa-navicon"></i> Menu</a>
              </div> */}

              <div className="mainLogo center-block text-center">
                <a className="logo" href={homeLink}>
                  <span>saltea.</span>
                </a>
              </div>

              <div className="pull-right hidden-xs">
                <a className="btn btn-default" href={loginLink}>{this._loginAction()}</a>
              </div>

              {this._mainAction()}
            </div>
          </div>
        </nav>

      </div>
    );
  }

});
