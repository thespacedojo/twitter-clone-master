import {composeWithTracker} from 'react-komposer';

import {TweetStream} from '/imports/client/ui/components/tweet_stream.jsx';
import {Tweets} from '/lib/collections.js';

function composer(props, onData) {
  const handle = Meteor.subscribe('tweets');
  if (handle.ready()) {
    const tweets = Tweets.find().fetch();
    onData(null, {tweets});
  }
}

export default composeWithTracker(composer)(TweetStream);