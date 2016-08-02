Footer = React.createClass({

  render() {

    let year = new Date().getFullYear();

    return (

      <div>

        <div className="footer container-fluid">

          <div className="row-fluid">

            <div className="col-sm-4">
              <ul>
                <li><a href="javascript:;" onClick={this.browse} title="Browse">Browse</a></li>
                <li><a href="javascript:;" onClick={this.browse} title="Browse">Browse</a></li>
                <li><a href="javascript:;" onClick={this.browse} title="Browse">Browse</a></li>
              </ul>
            </div>

            <hr className="visible-xs"></hr>

            <div className="col-sm-4">
              <ul>
                <li><a href="" title="About" target="_blank">About</a></li>
                <li><a href="" title="Legal" target="_blank">Test</a></li>
                <li><a href="" title="Legal" target="_blank">Legal</a></li>
              </ul>
            </div>

            <hr className="visible-xs"></hr>

            <div className="col-sm-4">
              <ul>
                <li><a href="" title="Facebook" target="_blank">Facebook</a></li>
                <li><a href="" title="Instagram" target="_blank">Instagram</a></li>
                <li><a href="" title="Twitter" target="_blank">Twitter</a></li>
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
    );
  }

});
