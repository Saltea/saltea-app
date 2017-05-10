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
                <div className="slide col-sm-8 col-sm-offset-2 noPadding">
                  <div className="slideImage col-md-6 noPadding">
                    <img src="http://res.cloudinary.com/saltea/image/upload/dpr_1.0,f_auto,fl_lossy.progressive,q_70/v1473645494/saltea.co/globe-caribbean-sea.gif"></img>
                  </div>
                  <div className="slideInfo col-md-6">
                    <h1 className="slideTitle">You Have Never Tasted Anything Like It</h1>
                    <p className="slideDesc">
                      But you'll be wondering why it wasn't there all along, when really it was. Its just never quite been this good.
                    </p>
                    <a href="/" className="btn btn-default slideAction">Wait, what?</a>
                    <a href="/" className="btn btn-primary slideAction pull-right">OMG, I get it.</a>
                  </div>
                </div>
                <div className="slide col-sm-8 col-sm-offset-2 noPadding">
                  <div className="slideImage col-md-6 noPadding">
                    <img src="http://res.cloudinary.com/saltea/image/upload/dpr_1.0,f_auto,fl_lossy.progressive,q_70/v1473645493/saltea.co/globe-rio-grande.gif"></img>
                  </div>
                  <div className="slideInfo col-md-6">
                    <h1 className="slideTitle">A New Class of Tea</h1>
                    <p className="slideDesc">Its like an all natural organic healthier (and tastier) version of that orange drink with the lightning bolt.</p>
                    <a href="/" className="btn btn-default slideAction">Still Clueless</a>
                    <a href="/" className="btn btn-primary slideAction pull-right">Find A Store</a>
                  </div>
                </div>
                <div className="slide col-sm-8 col-sm-offset-2 noPadding">
                  <div className="slideImage col-md-6 noPadding">
                    <img src="http://res.cloudinary.com/saltea/image/upload/dpr_1.0,f_auto,fl_lossy.progressive,q_70/v1473647398/saltea.co/globe-finger-lakes.gif"></img>
                  </div>
                  <div className="slideInfo col-md-6">
                    <h1 className="slideTitle">Total Balance 4 Tongues + Bodies</h1>
                    <p className="slideDesc">
                      Some would say its the "roundest" tasting drink. Imagine if coconut water and your favorite sports drink had a baby.
                    </p>
                    <a href="/" className="btn btn-default slideAction">You Crazy</a>
                    <a href="/" className="btn btn-primary slideAction pull-right">Genius, Buy Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="contentContainer" className="container">
          <div id="featuredFlavors" className="contentBlock col-sm-12">
            <div className="container-fluid">
              <div className="col-sm-4 flavorImg">
                <img src="http://res.cloudinary.com/saltea/image/upload/c_scale,dpr_1.0,f_auto,fl_lossy.progressive,q_70,w_800/v1473645492/saltea.co/caribbean-sea.gif" title="The Caribbean Sea" alt="The Caribbean Sea"></img>
                <h1>The Caribbean Sea</h1>
                <p>
                  Fresh strawberries, dried rose petals, hibiscus tea, a touch of pure himalayan crystal sea salt, and a touch of pure cane sugar.
                </p>
              </div>
              <div className="col-sm-4 flavorImg">
                <img src="http://res.cloudinary.com/saltea/image/upload/c_scale,dpr_1.0,f_auto,fl_lossy.progressive,q_70,w_800/v1473645492/saltea.co/rio-grande.gif" title="The Rio Grande" alt="The Rio Grande"></img>
                <h1>The Rio Grande</h1>
                <p>
                  Fresh lemons, fresh mint, a touch of pure himalayan crystal sea salt, and a touch of pure cane sugar.
                </p>
              </div>
              <div className="col-sm-4 flavorImg">
                <img src="http://res.cloudinary.com/saltea/image/upload/c_scale,dpr_1.0,f_auto,fl_lossy.progressive,q_70,w_800/v1473645492/saltea.co/finger-lakes.gif" title="The Finger Lakes" alt="The Finger Lakes"></img>
                <h1>The Finger Lakes</h1>
                <p>
                  Fresh green apples, fresh rosemary, jasmine green tea, a touch of pure himalayan crystal sea salt, and a touch of pure cane sugar.
                </p>
              </div>
            </div>
          </div>

          <div className="contentBlock col-sm-12 noPadding">
            <div className="container-fluid noPadding">
              <div className="col-sm-6 noPadding">
                <img src="http://res.cloudinary.com/saltea/image/upload/c_scale,dpr_1.0,f_auto,fl_lossy.progressive,q_70,w_800/v1473748307/saltea.co/caribbean-sea-close.jpg" alt="The Caribbean Sea" />
              </div>
              <div className="col-sm-6">
                <h1>But Is It Healthy?</h1>
                <p>
                  The truth is, adding unrefined natural crystal salt to water is extremely good for your body. The combination turns into a healing formula that helps balance blood sugar, keep bones strong, regulates metabolism, boosts the immune system, and more.
                </p>
                <h1>Why So Salty?</h1>
                <p>
                  Since the beginning of recorded history, people have been adding salt to drinks. The Tibetans have been making salted tea called cha süma (butter tea) since the 10th century. The Mongolians have a traditional drink called suutei tsai, which has milk and salt in it.
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

HomeWrapper = React.createClass({

    render() {

        return(
            <Home key={Home} />
        )
    }
});
