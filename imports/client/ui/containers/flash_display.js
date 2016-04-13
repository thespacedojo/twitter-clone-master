import {composeWithTracker} from 'react-komposer';
import {FlashDisplay, FlashMessages} from '/imports/client/ui/components/flash_message.jsx';

function composer(props, onData) {
  messages = FlashMessages.find().fetch();
  onData(null, {messages: messages});
};

export default composeWithTracker(composer)(FlashDisplay);
