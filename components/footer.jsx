Footer = React.createClass({

  browse() {
    return FlowRouter.go("/");
  },

  render() {

    let year = new Date().getFullYear();

    return (

      <div>

        <div id="footerContainer" className="container-fluid">

          <div id="footer" className="col-sm-8 col-sm-offset-2">

            <div className="row-fluid">

              <div className="col-sm-4">
                <ul>
                  <li><a href="javascript:;" onClick={this.browse} title="Browse">Why Salt?</a></li>
                  <li><a href="javascript:;" onClick={this.browse} title="Browse">The History</a></li>
                  <li><a href="javascript:;" onClick={this.browse} title="Browse">Where To Buy</a></li>
                </ul>
              </div>

              <hr className="visible-xs"></hr>

              <div className="col-sm-4">
                <ul>
                  <li><a href="" title="About" target="_blank">Contact</a></li>
                  <li><a href="" title="Legal" target="_blank">Legal</a></li>
                  <li><a href="" title="Feedback" target="_blank">Feedback</a></li>
                </ul>
              </div>

              <hr className="visible-xs"></hr>

              <div className="col-sm-4">
                <ul>
                  <li><a href="https://www.facebook.com/saltea.drinks" title="Facebook" target="_blank">Facebook</a></li>
                  <li><a href="https://www.instagram.com/saltea.co/" title="Instagram" target="_blank">Instagram</a></li>
                  <li><a href="https://twitter.com/drinksaltea" title="Twitter" target="_blank">Twitter</a></li>
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
