import {Tweets} from '/lib/collections.js';

Meteor.publish('tweets', function() {
  return Tweets.find();
});

Meteor.publish('profile', function(username) {
  check(username, String);
  return Meteor.users.find({username: username}, {fields: {username: 1, emails: 1, profile: 1}});
});

Meteor.publish('profileTweets', function(username) {
  check(username, String);
  let user = Meteor.users.findOne({username: username});
  return Tweets.find({userId: user._id});
});
