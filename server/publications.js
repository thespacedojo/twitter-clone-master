import {Tweets} from '/lib/collections.js';

Meteor.publish('tweets', function() {
  this.autorun(function() {
    let cursors = [];

    let user = Meteor.users.findOne(this.userId);
    let followingIds = [];
    followingIds.push(user.profile.followingIds);
    followingIds.push(this.userId);
    followingIds = _.flatten(followingIds);

    users = Meteor.users.find({_id: {$in: followingIds}}, {fields: {profile: 1, username: 1}});
    tweets = Tweets.find({userId: {$in: followingIds}});

    cursors.push(tweets);
    cursors.push(users);
    return cursors;
  });
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

Meteor.publish('notifications', function() {
  return Tweets.find({mentionIds: this.userId});
});
