import React from 'react';
import {mount} from 'react-mounter';
import { Accounts, STATES } from 'meteor/std:accounts-ui';

import AppLayout from '/imports/client/ui/layout.jsx';
import {TweetStream} from '/imports/client/ui/components/tweet_stream.jsx';
import {Profile} from '/imports/client/ui/components/profile.jsx';
import {Notifications} from '/imports/client/ui/components/notifications.jsx';

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

FlowRouter.route('/sign-in', {
  action(params) {
    mount(AppLayout, {
      content: <Accounts.ui.LoginForm {...{formState: STATES.SIGN_IN, signUpPath: '/sign-up'}}/>
    });
  }
});

FlowRouter.route('/sign-up', {
  action(params) {
    mount(AppLayout, {
      content: <Accounts.ui.LoginForm {...{formState: STATES.SIGN_UP, loginPath: '/sign-in'}}/>
    });
  }
});

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
