import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Tweets } from '/lib/collections.js';

Meteor.startup(() => {
  Tweets.rawCollection().createIndex({userId: 1}, {background: true}, function() {})
});
