Contact = React.createClass({

  _submitEmail(event) {
    event.preventDefault();

    // Find the text field via the React ref
    let first = this.refs.firstname.value;
    let last = this.refs.lastname.value;
    let email = this.refs.email.value;
    let message = this.refs.message.value;

    Meteor.call(
      'sendEmail',
      'Mike <mikeparisi@gmail.com>',
      'whateverdudeyea@gmail.com',
      'Hello from Meteor!',
      'This is a test of Email.send.'
    );
  },

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 center-block">
            <h2 className="text-center">Contact Saltea.</h2>
            <form className="form loginForm">
              <div className="form-group col-md-6 col-md-offset-3">
                <input type="text" className="loginFormEffects center-block" ref="firstname" placeholder="First Name" />
              </div>
              <div className="form-group col-md-6 col-md-offset-3">
                <input type="text" className="loginFormEffects center-block" ref="lastname" placeholder="Last Name" />
              </div>
              <div className="form-group col-md-6 col-md-offset-3">
                <input type="text" className="loginFormEffects center-block" ref="email" placeholder="Email" />
              </div>
              <div className="form-group col-md-6 col-md-offset-3">
                <input type="text" className="loginFormEffects center-block" ref="message" placeholder="Message" />
              </div>
              <div className="form-group col-md-6 col-md-offset-3">
                <input type="button" className="center-block" value="Send" onClick={this._submitEmail} />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

ContactWrapper = React.createClass({
  render() {
    return (
      <Contact key={Contact} />
    );
  }
});
