import {Mongo} from 'meteor/mongo';
import moment from 'moment';

const Tweets = new Mongo.Collection('tweets');

const processTweet = function(text) {
  let ids = [];
  if (_.contains(text, "@")) {
    let mentions = _.select(text.split(" "), function(word) {
      return _.contains(word, '@');
    });
    let usernames = _.map(mentions, function(mention) {
      return mention.substring(1);
    });
    let users = Meteor.users.find({username: {$in: usernames}}).fetch();
    ids = _.pluck(users, "_id");
  }
  return ids;
}

Tweets.before.insert(function(userId, doc) {
  doc.tweetedAt = new Date();
  doc.userId = userId;
  doc.mentionIds = processTweet(doc.tweetText);
});

Tweets.helpers({
  user() {
    return Meteor.users.findOne({_id: this.userId});
  },
  fullName() {
    if (this.user() && this.user().profile) {
      return this.user().profile.name;
    }
  },
  username() {
    if (this.user()) {
      return this.user().username;
    }
  },
  tweetedTime() {
    return moment(this.tweetedAt).fromNow();
  }
});

Tweets.allow({
  insert(userId, doc) {
    return userId;
  },
  update(userId, doc, fields, modifier) {
    return false;
  },
  remove(userId, doc) {
    return doc.userId === userId;
  }
});

export {Tweets};
