// import React from 'react';
// import {mount} from 'react-mounter';
//
// import BlogLayout from './layouts/blog.jsx';
// import PostList from './containers/post_list';
// import PostPage from './containers/post_page';

let pathFor = (path, params) => {
  FlowRouter.watchPathChange();
  let query = params && params.query ? FlowRouter._qs.parse( params.query ) : {};
  return FlowRouter.path( path, params, query );
};

let urlFor = (path, params) => {
  return Meteor.absoluteUrl( pathFor(path, params) );
};

let currentRoute = (route) => {
  FlowRouter.watchPathChange();
  return FlowRouter.current().route.name === route ? 'active' : '';
};

FlowHelpers = {
  pathFor: pathFor,
  urlFor: urlFor,
  currentRoute: currentRoute
};

FlowRouter.route('/', {
  action: function() {
    ReactLayout.render(App, {
      content: <HomeWrapper key={1} />
    });
  },
  name: 'home'
});

FlowRouter.route('/what-is-this', {
  action: function() {
    ReactLayout.render(App, {
      content: <WhatWrapper key={1} />
    });
  },
  name: 'what'
});

FlowRouter.route('/why-salt', {
  action: function() {
    ReactLayout.render(App, {
      content: <WhatWrapper key={1} />
    });
  },
  name: 'why'
});

FlowRouter.route('/the-history', {
  action: function() {
    ReactLayout.render(App, {
      content: <WhatWrapper key={1} />
    });
  },
  name: 'history'
});

FlowRouter.route('/where-to-buy', {
  action: function() {
    ReactLayout.render(App, {
      content: <WhatWrapper key={1} />
    });
  },
  name: 'where'
});

FlowRouter.route('/sellers', {
  action: function() {
    ReactLayout.render(App, {
      content: <WhatWrapper key={1} />
    });
  },
  name: 'sellers'
});

FlowRouter.route('/contact', {
  action: function() {
    ReactLayout.render(App, {
      content: <WhatWrapper key={1} />
    });
  },
  name: 'contact'
});

FlowRouter.route('/legal', {
  action: function() {
    ReactLayout.render(App, {
      content: <LegalWrapper key={1} />
    });
  },
  name: 'legal'
});

FlowRouter.route('/login', {
    action: function() {
      ReactLayout.render(App, {
        title: "Login",
        hash: 'maintainScroll=1',
        content: <LoginWrapper key={LoginWrapper} />
      });
    },
    name: "Login"
});

FlowRouter.route('/register', {
    action: function() {
      ReactLayout.render(App, {
        title: "Register",
        hash: 'maintainScroll=1',
        content: <RegisterWrapper key={RegisterWrapper} />
      });
    },
    name: "Register"
});

FlowRouter.triggers.enter( [ enterFunction ] );
// FlowRouter.triggers.exit( [ exitFunction ] );

function enterFunction(context) {
  window.scrollTo(0,0);
  // ga('send', 'pageview', context.path);
}
