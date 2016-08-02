if (Meteor.isServer) {

  // Add default user roles
  Accounts.onLogin(function(user) {
    var user = user.user;
    var defaultRole = ['user'];
    if (!user.roles){
        Roles.addUsersToRoles(user, defaultRole)
    };

    FlowRouter.go("/", {});
  });

  // Add super admin role to user account
  Roles.addUsersToRoles("P33iz8ghWX72GNXKt", ['super-admin','admin']);

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
