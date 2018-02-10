if (Meteor.isServer) {
  // Server: Define a method that the client can call.
  Meteor.methods({
    sendEmail(to, from, subject, text) {
      // Make sure that all arguments are strings.
      check([to, from, subject, text], [String]);

      // Let other method calls from the same client start running, without
      // waiting for the email sending to complete.
      this.unblock();

      Email.send({ to, from, subject, text });

      return "success";
    }
  });

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

  BrowserPolicy.content.allowOriginForAll( '*.list-manage.com' );
  BrowserPolicy.content.allowOriginForAll( '*.amazonaws.com' );
  BrowserPolicy.content.allowOriginForAll( '*.mailchimp.com' );
  BrowserPolicy.content.allowOriginForAll( '*.googleapis.com' );
  BrowserPolicy.content.allowOriginForAll( '*.google-analytics.com' );
  BrowserPolicy.content.allowOriginForAll( '*.gstatic.com' );
  BrowserPolicy.content.allowOriginForAll( '*.cloudinary.com' );
  BrowserPolicy.content.allowOriginForAll( '*.doubleclick.net' );

  // Function once Meteor starts up
  Meteor.startup(function() {
    
  });

}
