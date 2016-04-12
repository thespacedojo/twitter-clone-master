import {composeWithTracker} from 'react-komposer';
import AccountButton from '/imports/client/ui/components/account_button.jsx';

function composer(props, onData) {
  user = Meteor.user();
  if (user) {
    onData(null, {user});
  } else {
    onData(null, {});
  }
};

export default composeWithTracker(composer)(AccountButton);

