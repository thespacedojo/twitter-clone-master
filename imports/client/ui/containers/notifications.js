import {composeWithTracker} from 'react-komposer';
import {ReactiveVar} from 'meteor/reactive-var';

import {Notifications} from '/imports/client/ui/components/notifications.jsx';
import {Tweets} from '/lib/collections.js';

function composer(props, onData) {
  const handle = Meteor.subscribe('notifications');
  if (typeof timestamp === 'undefined') {
    timestamp = new ReactiveVar();
    timestamp.set(new Date());
    console.log(timestamp.get());
  }
  const updateTweets = function() {
    timestamp.set(new Date());
  }
  if (handle.ready()) {
    const tweets = Tweets.find({tweetedAt: {$lte: timestamp.get()}}, {sort: {tweetedAt: -1}}).fetch();
    const unseenTweets = Tweets.find({tweetedAt: {$gt: timestamp.get()}}).fetch();
    onData(null, {tweets, unseenTweets, updateTweets});
  }
}

export default composeWithTracker(composer)(Notifications);
