Footer = React.createClass({

  render() {

    let year = new Date().getFullYear();

    return (

      <div>

        <div id="footerContainer" className="container-fluid">

          <div id="footer" className="col-sm-12">

            <div className="row-fluid">

              <div className="col-sm-4">
                <ul>
                  <li><a id="what" className="menu-item" href={this._flowLink("what-is-this")}>What Salt?</a></li>
                  <li><a id="about" className="menu-item" href={this._flowLink("why-salt")}>Why Salt?</a></li>
                  <li><a id="history" className="menu-item" href={this._flowLink("the-history")}>The History</a></li>
                  <li><a id="about" className="menu-item" href={this._flowLink("where-to-buy")}>Where Can I Buy It?</a></li>
                  <li><a id="seller" className="menu-item" href={this._flowLink("sellers")}>Become A Seller</a></li>
                </ul>
              </div>

              <hr className="visible-xs"></hr>

              <div className="col-sm-4">
                <ul>
                  <li><a href="/what-is-this" title="About">About</a></li>
                  <li><a href="" title="Legal">Test</a></li>
                  <li><a href="/legal" title="Legal">Legal</a></li>
                </ul>
              </div>

              <hr className="visible-xs"></hr>

              <div className="col-sm-4">
                <ul>
                  <li><a href="" title="Facebook" target="_blank"><i className="fa fa-facebook"></i>&nbsp; Facebook</a></li>
                  <li><a href="" title="Instagram" target="_blank"><i className="fa fa-instagram"></i>&nbsp; Instagram</a></li>
                  <li><a href="" title="Twitter" target="_blank"><i className="fa fa-twitter"></i>&nbsp; Twitter</a></li>
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
