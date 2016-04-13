import React from 'react';
import {Alert} from 'react-bootstrap';
import {Mongo} from 'meteor/mongo';

const FlashMessages = new Mongo.Collection(null);

class FlashDisplay extends React.Component {
  constructor() {
    super();
  }
  dismiss(message, event) {
    FlashMessages.remove({_id: message._id});
  }
  render() {
    return (
      <div className="col-sm-offset-2 col-sm-8">
        {this.props.messages.map((m) => {
            return <Alert key={m._id} bsStyle={m.type} onDismiss={this.dismiss.bind(this, m)}>{m.message}</Alert>
          }
        )}
      </div>
    )
  }
}

const clearFlashMessages = function() {
  FlashMessages.remove({});
};
export {FlashMessages, FlashDisplay, clearFlashMessages}
