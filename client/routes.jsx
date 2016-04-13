import React from 'react';
import {mount} from 'react-mounter';
import { Accounts, STATES } from 'meteor/std:accounts-ui';

import AppLayout from '/imports/client/ui/layout.jsx';
import TweetStream from '/imports/client/ui/containers/tweet_stream.js';
import Profile from '/imports/client/ui/containers/profile.js';
import {Notifications} from '/imports/client/ui/components/notifications.jsx';
import {clearFlashMessages} from '/imports/client/ui/components/flash_message.jsx';

Accounts.config({
  sendVerificationEmail: true,
  forbidClientAccountCreation: false
});

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL',
  loginPath: '/sign-in',
  signUpPath: '/sign-up',
  resetPasswordPath: '/reset-password',
  profilePath: '/profile',
  onSignedInHook: () => FlowRouter.go('/'),
  onSignedOutHook: () => FlowRouter.go('/sign-in'),
  minimumPasswordLength: 6
});

FlowRouter.triggers.exit([clearFlashMessages]);

FlowRouter.route('/sign-in', {
  action(params) {
    mount(AppLayout, {
      content: () => (<Accounts.ui.LoginForm {...{formState: STATES.SIGN_IN, signUpPath: '/sign-up'}}/>)
    });
  }
});

FlowRouter.route('/sign-out', {
  action(params) {
    Meteor.logout();
    FlowRouter.go('/');
  }
});

FlowRouter.route('/sign-up', {
  action(params) {
    mount(AppLayout, {
      content: () => (<Accounts.ui.LoginForm {...{formState: STATES.SIGN_UP, loginPath: '/sign-in'}}/>)
    });
  }
});

FlowRouter.route('/', {
  name: 'Home',
  action() {
    mount(AppLayout, {
      content: () => (<TweetStream />)
    });
  }
});


FlowRouter.route('/u/:username', {
  name: 'Profile',
  action(params) {
    mount(AppLayout, {
      content: () => (<Profile username={params.username}/>)
    });
  }
});

FlowRouter.route('/notifications', {
  name: 'Notifications',
  action() {
    mount(AppLayout, {
      content: () => (<Notifications />)
    });
  }
});
