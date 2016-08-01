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
                    <h1 className="slideTitle">You Have Never Tasted Anything Like It</h1>
                    <p className="slideDesc">
                      But you'll be wondering why it wasn't there all along.
                    </p>
                    <a href="/drink" className="btn btn-default slideAction">Wait, what?</a>
                    <a href="/drink" className="btn btn-primary slideAction pull-right">OMG, I get it.</a>
                  </div>
                </div>
                <div className="slide col-sm-8 col-sm-offset-2">
                  <div className="slideInfo">
                    <h1 className="slideTitle">A New Class of Tea</h1>
                    <p className="slideDesc">Its like an all natural organic healthier (and tastier) version of that orange drink with the lightning bolt.</p>
                    <a href="/drink" className="btn btn-default slideAction">Still Clueless</a>
                    <a href="/drink" className="btn btn-primary slideAction pull-right">Find A Store</a>
                  </div>
                </div>
                <div className="slide col-sm-8 col-sm-offset-2">
                  <div className="slideInfo">
                    <h1 className="slideTitle">Total Balance 4 Tongues + Bodies</h1>
                    <p className="slideDesc">
                      Some would say its the "roundest" tasting drink. Imagine if coconut water and your favorite sports drink had a baby.
                    </p>
                    <a href="/drink" className="btn btn-default slideAction">You Crazy</a>
                    <a href="/drink" className="btn btn-primary slideAction pull-right">Genius, Buy Now</a>
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
                <h1>The Caribbean Sea</h1>
                <p>
                  Fresh strawberries, dried rose petals, hibiscus tea, a touch of pure himalayan crystal sea salt, and a touch of pure cane sugar.
                </p>
              </div>
              <div className="col-sm-4 flavorImg">
                <img src="img/rio-grande.gif" title="The Rio Grande" alt="The Rio Grande"></img>
                <h1>The Rio Grande</h1>
                <p>
                  Fresh lemons, fresh mint, a touch of pure himalayan crystal sea salt, and a touch of pure cane sugar.
                </p>
              </div>
              <div className="col-sm-4 flavorImg">
                <img src="img/finger-lakes.gif" title="The Finger Lakes" alt="The Finger Lakes"></img>
                <h1>The Finger Lakes</h1>
                <p>
                  Fresh green apples, fresh rosemary, jasmine green tea, a touch of pure himalayan crystal sea salt, and a touch of pure cane sugar.
                </p>
              </div>
            </div>
          </div>

          <div id="contentContainer" className="col-sm-12">
            <div className="container-fluid">
              <div className="col-sm-6">
                <img src="" alt="" />
              </div>
              <div className="col-sm-6">
                <h1 className="text-center">Heading</h1>
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique elit justo, vitae mattis nisl eleifend viverra. Morbi nec ultricies lacus. Vestibulum imperdiet gravida massa vitae posuere. In ut lectus massa. Nullam consequat tellus nec lacus porta vestibulum. Pellentesque non ullamcorper odio, sit amet ultrices tortor. Praesent varius faucibus tellus, a congue leo congue sit amet.
                  Fusce id elit eget orci egestas lobortis. Fusce aliquam vehicula magna, eget ultrices lorem
                  condimentum a. Donec vel risus rutrum, scelerisque quam eget, porta metus. Etiam vestibulum rhoncus
                  accumsan. Maecenas varius suscipit tristique. Nulla sollicitudin commodo dolor in eleifend.
                </p>
              </div>
            </div>
          </div>

          <div>
            <Footer />
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
