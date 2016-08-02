Register = React.createClass({

  _submitRegister(event) {
    event.preventDefault();

    // Find the text field via the React ref
    let first = this.refs.signupFirstname.value;
    let last = this.refs.signupLastname.value;
    let email = this.refs.signupEmail.value;
    let username = this.refs.signupUsername.value;
    let password = this.refs.signupPassword.value;
    let passwordAgain = this.refs.signupPasswordAgain.value;

    function trimInput(val) {
       return val.replace(/^\s*|\s*$/g, "");
    }
    email = trimInput(email);

    // Compare passwords
    function compare(v1, v2) {
      if (v1 == v2) {
        return v1;
      } else {
        console.log("error, don't match");
      }
    }

    // Checks if any form fields are empty
    function validateForm(a,b,c,d,e,f) {
      if (a==null || a=="" ||
          b==null || b=="" ||
          c==null || c=="" ||
          d==null || d=="" ||
          e==null || e=="" ||
          f==null || f=="") {
        return console.log("Fill in all fields");
      } else {
        return true;
      }
    }

    // Check password is at least 6 chars long
    function isValidPassword(pwd, pwd2) {
       if (pwd === pwd2) {
         let length = pwd.length >= 6 ? true : false;
         if (length === false) {
           return console.log("Password too short");
         } else {
           return true;
         }
       } else {
         return console.log("Passwords don't match");
       }
    }

    // Strip extraneous stuff from error messages
    function cleanError(str, find, find2, replace) {
      str = str.toString().replace(/[^a-zA-Z0-9\s]/g, replace);
      str = str.replace(/^-+|-+$|(-)+/g, replace);
      str = str.replace(new RegExp(find, 'g'), replace);
      return str.replace(new RegExp(find2, 'g'), replace);
    }
    
    if (!validateForm(first,last,username,email,password,passwordAgain)){
      console.log(error);
    } else if (!isValidPassword(password,passwordAgain)) {
      console.log(error);
    } else {
      console.log("Success! User account created!");
      Accounts.createUser({
        username: username,
        email: email,
        password: compare(password, passwordAgain),
        createdAt: new Date()
      }, function(error){
        if (error){
          console.log(error);
        }
        else {
          FlowRouter.go('/');
        }
      });
    }
  },

  render() {
    if (Meteor.userId()) {
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-12 center-block">
                <h2 className="text-center">You are already register :)</h2>
              </div>
            </div>
          </div>
        )
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 center-block">
            <h2 className="text-center">Register to Saltea.</h2>
            <form className="form loginForm">
              <div className="form-group col-md-6 col-md-offset-3">
                <input type="text" className="loginFormEffects center-block" ref="signupFirstname" placeholder="First Name" />
              </div>
              <div className="form-group col-md-6 col-md-offset-3">
                <input type="text" className="loginFormEffects center-block" ref="signupLastname" placeholder="Last Name" />
              </div>
              <div className="form-group col-md-6 col-md-offset-3">
                <input type="text" className="loginFormEffects center-block" ref="signupEmail" placeholder="Email" />
              </div>
              <div className="form-group col-md-6 col-md-offset-3">
                <input type="text" className="loginFormEffects center-block" ref="signupUsername" placeholder="Username" />
              </div>
              <div className="form-group col-md-6 col-md-offset-3">
                <input type="text" className="loginFormEffects center-block" ref="signupPassword" placeholder="Password" />
              </div>
              <div className="form-group col-md-6 col-md-offset-3">
                <input type="text" className="loginFormEffects center-block" ref="signupPasswordAgain" placeholder="Confirm Password" />
              </div>
              <div className="form-group col-md-6 col-md-offset-3">
                <input type="button" className="center-block" value="Register" onClick={this._submitRegister} />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

RegisterWrapper = React.createClass({
  render() {
    return (
      <Register key={Register} />
    );
  }
});
