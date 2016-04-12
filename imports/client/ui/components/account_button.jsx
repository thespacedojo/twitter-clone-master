import React from 'react';

const Username = ({user}) => (
  <li>
    <a href="#">{user && user.emails && _.first(user.emails).address}</a>
  </li>
)

const LoginButton = () => (
  <li className="dropdown">
    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Account? <span class="caret"></span></a>
    <ul className="dropdown-menu">
      <li><a href="/sign-in">Sign In</a></li>
      <li><a href="/sign-up">Sign Up</a></li>
    </ul>
  </li>
)

const AccountButton = ({user}) => {
  var button;
  if (user) {
    button = <Username user={user} />
  } else {
    button = <LoginButton />
  }
  return button;
}

export default AccountButton;
