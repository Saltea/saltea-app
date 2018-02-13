Contact = React.createClass({

  _submitEmail(event) {
    //event.preventDefault();

    // Find the text field via the React ref
    let name = this.refs.name.value;
    let email = this.refs.email.value;
    let message = this.refs.message.value;
    let emailSent = false;
    let emailError = false;

    Meteor.call(
      'sendEmail',
      'Aaron - Saltea.co <aaron@saltea.co>',
      email,
      'New Saltea inquiry from ' + name,
      message,
      (err,result) => {
        if (err) {
          emailError = true;
          return sweetAlert({
            title: "whoops!",
            text: "Something went wrong.",
            showConfirmButton: true,
            type: "error"
          });
        } else {
          return sweetAlert({
            title: "Thanks!",
            text: "Your message has been sent.",
            showConfirmButton: true,
            type: "success"
          });

          this.refs.name.value = "";
          this.refs.email.value = "";
          this.refs.message.value = "";
        }
      }
    );

    return false;

  },

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 center-block">
            <h2 className="text-center">Contact Saltea.</h2>
            <form className="form loginForm">
              <div className="form-group col-md-6 col-md-offset-3">
                <input type="text" className="loginFormEffects center-block" ref="name" placeholder="Name" required />
              </div>
              <div className="form-group col-md-6 col-md-offset-3">
                <input type="text" className="loginFormEffects center-block" ref="email" placeholder="Email" required />
              </div>
              <div className="form-group col-md-6 col-md-offset-3">
                <textarea type="text" className="loginFormEffects center-block" ref="message" placeholder="Message" required />
              </div>
              <div className="form-group col-md-6 col-md-offset-3">
                <button className="contactSubmit" onClick={this._submitEmail}>Send</button>
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
