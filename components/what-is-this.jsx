const styles = {
};

What = React.createClass({

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

WhatWrapper = React.createClass({

    render() {

        return(
            <What key={What} />
        )
    }
});
