if (Meteor.isServer) {

  BrowserPolicy.content.allowOriginForAll( '*.youtube.com' );
  BrowserPolicy.content.allowOriginForAll( '*.googleapis.com' );
  BrowserPolicy.content.allowOriginForAll( '*.google-analytics.com' );
  BrowserPolicy.content.allowOriginForAll( '*.gstatic.com' );
  BrowserPolicy.content.allowOriginForAll( '*.cloudinary.com' );
  BrowserPolicy.content.allowOriginForAll( '*.doubleclick.net' );

  // Function once Meteor starts up
  Meteor.startup(function() {
  });

}
