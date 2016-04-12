import {Mongo} from 'meteor/mongo';

const Tweets = new Mongo.Collection('tweets');

Tweets.before.insert(function(userId, doc) {
  doc.tweetedAt = new Date();
  doc.userId = userId;
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
