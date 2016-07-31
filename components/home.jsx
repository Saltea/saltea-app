const styles = {
  gifFrame: {
    backgroundImage: 'url(http://res.cloudinary.com/galore/video/upload/b_rgb:000,eo_10,so_10/v1463859839/galore/aaron/saltea_smallerIcons_moreIcons_041916.gif)',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    position: 'absolute',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    width: '100%',
    height: '100vh'
  }
};

Home = React.createClass({

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
    $('#featuredSlider').owlCarousel({
      items: 1,
      loop: true,
      nav: true,
      // navText: [&#x27;next&#x27;,&#x27;prev&#x27;],
      navText: ['<i class="btl bt-circle-arrow-left"></i>', '<i class="btl bt-circle-arrow-right"></i>'],
      // transitionStyle: "fade"
      // autoplay: true,
      autoplayTimeout: 6000
      // autoplayHoverPause: true
    });
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

  loadBackground() {

    let vid = "http://res.cloudinary.com/galore/video/upload/c_fit,f_auto,q_70,w_1400/v1463859839/galore/aaron/saltea_smallerIcons_moreIcons_041916.mp4";

    // if (this.isTouchDevice()===false) {
    if (Meteor.Device.isDesktop()) {
      // return <div id="videoFrame" className="hidden-xs"></div>
      return (
        <video id="vidFrame" autoPlay loop>
          <source src={vid} type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
      );
    } else {
      return (
        <div id="gifFrame" style={styles.gifFrame}></div>
      );
    }
  },

  render() {

    return (
      <div>

        <div className="container-fluid noPadding">
          <div id="heroContainer" className="col-sm-12 col-lg-12 col-lg-offset-0 noPadding">
            <div id="videoCover"></div>
            {this.loadBackground()}
            <div id="slider">
              <div id="featuredSlider" className="owl-carousel">
                <div className="slide col-sm-8 col-sm-offset-2">
                  <div className="slideInfo">
                    <h1 className="slideTitle">You Have Never Tasted Anything Like It.</h1>
                    <p className="slideDesc">Everybody likes a good balance, there is such a thing as "too much of a good thing".</p>
                    <a href="/drink" className="btn btn-primary slideAction">Find A Store</a>
                  </div>
                </div>
                <div className="slide col-sm-8 col-sm-offset-2">
                  <div className="slideInfo">
                    <h1 className="slideTitle">The Best of Both Worlds.</h1>
                    <p className="slideDesc">Lots of people agree</p>
                    <a href="/drink" className="btn btn-primary slideAction">Get It</a>
                  </div>
                </div>
                <div className="slide col-sm-8 col-sm-offset-2">
                  <div className="slideInfo">
                    <h1 className="slideTitle">Or Just Savor It.</h1>
                    <p className="slideDesc">Lots of people agree</p>
                    <a href="/drink" className="btn btn-primary slideAction">Get It</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div id="contentContainer" className="col-sm-12">
            <div className="container-fluid">
              <div className="col-sm-4 flavorImg">
                <img src="img/caribbean.gif" title="The Caribbean Sea" alt="The Caribbean Sea"></img>
                <h1>Caribbean Sea</h1>
                <p>
                  "Fresh strawberries, dried rose petals, hibiscus tea, a touch of pure himalayan crystal sea salt, and a touch of pure cane sugar."
                </p>
              </div>
              <div className="col-sm-4 flavorImg">
                <img src="img/rio-grande.gif" title="The Rio Grande" alt="The Rio Grande"></img>
                <h1>Rio Grande</h1>
                <p>
                  "Fresh lemons, fresh mint, a touch of pure himalayan crystal sea salt, and a touch of pure cane sugar."
                </p>
              </div>
              <div className="col-sm-4 flavorImg">
                <img src="img/finger-lakes.gif" title="The Finger Lakes" alt="The Finger Lakes"></img>
                <h1>Finger Lakes</h1>
                <p>
                  "Fresh green apples, fresh rosemary, jasmine green tea, a touch of pure himalayan crystal sea salt, and a touch of pure cane sugar."
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }

});

HomeWrapper = React.createClass({

    render() {

        return(
            <Home key={Home} />
        )
    }
});
