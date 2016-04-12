import React from 'react';
import {mount} from 'react-mounter';

import AppLayout from '/imports/client/ui/layout.jsx';
import {TweetStream} from '/imports/client/ui/components/tweet_stream.jsx';
import {Profile} from '/imports/client/ui/components/profile.jsx';
import {Notifications} from '/imports/client/ui/components/notifications.jsx';

FlowRouter.route('/', {
  name: 'Home',
  action() {
    mount(AppLayout, {
      content: <TweetStream />
    });
  }
});


FlowRouter.route('/profile', {
  name: 'Profile',
  action() {
    mount(AppLayout, {
      content: <Profile />
    });
  }
});

FlowRouter.route('/notifications', {
  name: 'Notifications',
  action() {
    mount(AppLayout, {
      content: <Notifications />
    });
  }
});
