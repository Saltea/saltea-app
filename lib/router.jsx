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

FlowRouter.triggers.enter( [ enterFunction ] );
// FlowRouter.triggers.exit( [ exitFunction ] );

function enterFunction(context) {
  window.scrollTo(0,0);
  // ga('send', 'pageview', context.path);
}
