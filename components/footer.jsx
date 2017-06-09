Footer = React.createClass({

  _flowLink() {
    return FlowRouter.go("/");
  },

  render() {

    let year = new Date().getFullYear();

    return (

      <div>

        <div id="footerContainer" className="container-fluid">

          <div id="footer" className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">

            <div className="row-fluid">

              <div className="col-sm-4">
                <ul>
                  <li><a id="what" href={this._flowLink("what-is-this")}>What Salt?</a></li>
                  <li><a id="about" href={this._flowLink("why-salt")}>Why Salt?</a></li>
                  <li><a id="history" href={this._flowLink("the-history")}>The History</a></li>
                  <li><a id="about" href={this._flowLink("where-to-buy")}>Where Can I Buy It?</a></li>
                  <li><a id="seller" href={this._flowLink("sellers")}>Become A Seller</a></li>
                </ul>
              </div>

              <hr className="visible-xs"></hr>

              <div className="col-sm-4">
                <ul>
                  <li><a id="blog" title="The Daily Brine - Saltea Blog" href="http://blog.saltea.co">Blog</a></li>
                  <li><a href={this._flowLink("contact")} title="About">Contact</a></li>
                  <li><a href={this._flowLink("legal")} title="Legal">Legal</a></li>
                  <li><a href={this._flowLink("feedback")} title="Feedback">Feedback</a></li>
                </ul>
              </div>

              <hr className="visible-xs"></hr>

              <div className="col-sm-4">
                <ul>
                  <li><a href="https://www.facebook.com/saltea.drinks" title="Facebook" target="_blank"><i className="fa fa-facebook"></i>&nbsp; Facebook</a></li>
                  <li><a href="https://www.instagram.com/saltea.co/" title="Instagram" target="_blank"><i className="fa fa-instagram"></i>&nbsp; Instagram</a></li>
                  <li><a href="https://twitter.com/drinksaltea" title="Twitter" target="_blank"><i className="fa fa-twitter"></i>&nbsp; Twitter</a></li>
                </ul>
              </div>

            <div className="copyright row-fluid">
              <div className="col-xs-12">
                <br></br>
                <p className="text-center">&copy; {year} Saltea. All Rights Reserved</p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
    );
  }

});
