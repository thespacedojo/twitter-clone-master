import {composeWithTracker} from 'react-komposer';
import {Profile} from '/imports/client/ui/components/profile.jsx';
import {Tweets} from '/lib/collections.js';

function composer(props, onData) {
  var profileHandle = Meteor.subscribe('profile', props.username);
  var profileTweetsHandle = Meteor.subscribe('profileTweets', props.username);
  var userProfile = Meteor.users.findOne({username: props.username});
  var tweets = Tweets.find().fetch();
  var currentUser = Meteor.user();
  if (profileHandle.ready() && profileTweetsHandle.ready()) {
    onData(null, {userProfile, tweets, currentUser})
  }
};

export default composeWithTracker(composer)(Profile);
