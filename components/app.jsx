// App component - represents the whole app
App = React.createClass({

  render() {
    return (

      <div id="globalContainer">

        <MenuWrap />
        <div id="globalWrap">

          <div>
            <Header key={Header} title={this.props.title} />
          </div>

          {this.props.content}

        </div>

      </div>
    );
  }
});
