MainMenu = React.createClass({

  _flowLink(link) {
    return FlowRouter.path("/" + link, {});
  },

  render() {

    return (
      <Menu pageWrapId={"globalWrap"} outerContainerId={"globalContainer"} id={"menuWrapInner"}>

        <div id="menuHeader">
          <a href="/" title="Kitten Agency"><div id="anicat"></div></a>
        </div>

        <a id="what" className="menu-item" href={this._flowLink("what")}>What Salt?</a>
        <a id="about" className="menu-item" href={this._flowLink("why")}>Why Salt?</a>
        <a id="history" className="menu-item" href={this._flowLink("history")}>The History</a>
        <a id="about" className="menu-item" href={this._flowLink("where")}>Where Can I Buy It?</a>
        <a id="seller" className="menu-item" href={this._flowLink("seller")}>Become A Seller</a>

        <hr></hr>

        <ul id="menuSub">
          <li><a id="home" className="menu-item-mini" href={this._flowLink("contact")}>Contact</a></li>
          <li><a id="about" className="menu-item-mini" href="//galoremag.com/dmca">Legal</a></li>
          <li><a id="contact" className="menu-item-mini" href={this._flowLink("contact")}>Feedback</a></li>
        </ul>

        <div id="menuFollow">
          <p>Follow Saltea</p>
          <ul className="list-inline">
            <li><a className="share-facebook" href="https://facebook.com/galore"><i className="fa fa-facebook fa-2x"></i></a></li>
            <li><a className="share-facebook" href="https://instagram.com/galore"><i className="fa fa-instagram fa-2x"></i></a></li>
            <li><a className="share-twitter" href="https://twitter.com/thegaloremag"><i className="fa fa-twitter fa-2x"></i></a></li>
          </ul>
        </div>

        <div id="menuOptions" className="visible-xs">
          <ul className="list-inline">
            <li><a className="btn btn-default menuLogin" href={this._flowLink("login")}>Login</a></li>
          </ul>
        </div>

        {/*<a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>*/}

      </Menu>
    );
  }
});

MenuWrap = React.createClass({
  render() {
    return (
      <div className="text-center menuWrap">
        <MainMenu key={MainMenu} />
      </div>
    );
  }
});
