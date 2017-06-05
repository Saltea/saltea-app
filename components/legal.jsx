const styles = {
};

Legal = React.createClass({

  // LIFECYCLE SHIT

  // getInitialState() {
  //     return {
  //     }
  // },
  //
  // componentWillMount() {
  //   // this.setState({
  //   //   songs: this.props.songs,
  //   //   currentSong: this.props.currentSong,
  //   //   nextSong: this.props.nextSong
  //   // });
  //   return {
  //
  //   }
  // },
  //
  // componentWillMount() {
  // },

  componentDidMount() {
  },

  // componentWillReceiveProps() {
  // },

  // shouldComponentUpdate() {
  //   return true;
  // },
  //
  // componentWillUnmount() {
  //     // document.getElementById("progressBar").removeEventListener("mouseup", false);
  //     // document.getElementById("fullscreen").removeEventListener("mouseup", false);
  //     // document.getElementById("mute").removeEventListener("mouseup", false);
  // },

  // isTouchDevice() {
  //   return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
  // },

  render() {

    return (
      <div>

        <div id="contentContainer" className="container">

          <div className="contentBlock col-sm-12 noPadding">
            <div className="container-fluid noPadding">
              <div className="col-sm-6 noPadding">
                <img src="http://res.cloudinary.com/saltea/image/upload/c_scale,dpr_1.0,f_auto,fl_lossy.progressive,q_70,w_800/v1473748307/saltea.co/caribbean-sea-close.jpg" alt="The Caribbean Sea" />
              </div>
              <div className="col-sm-6">
                <p id="citations">
                  <h4>References</h4>
                  <hr></hr>
                  <ul>
                    <li><sup>[1]</sup><a href="http://www.positivehealth.com/review/water-salt-the-essence-of-life" target="_blank" title="">Water & Salt - The Essence of Life</a></li>
                    <li><sup>[2]</sup><a href="http://www.nytimes.com/2002/02/24/books/nacl.html" target="_blank" title="">Salt, A World History</a></li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

        </div>

        <Footer />

      </div>
    );
  }

});

LegalWrapper = React.createClass({

    render() {

        return(
            <Legal key={Legal} />
        )
    }
});
