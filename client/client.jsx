if (Meteor.isClient) {
  // This code is executed on the client only

  Meteor.startup(function () {
    Meteor.subscribe('emojis');

  });
}
