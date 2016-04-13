import React from 'react';

class FollowUser extends React.Component {
  constructor() {
    super();
    this.following = this.following.bind(this);
    this.followUser = this.followUser.bind(this);
  }
  following() {
    if (_.contains(this.props.followingIds, this.props.userId)) {
      return <UnfollowButton /> 
    } else {
      return <FollowButton followUser={this.followUser} />
    }
  }
  followUser(event) {
    Meteor.call('followUser', this.props.userId);
  }
  render() {
    return this.following() 
  }
}

const FollowButton = ({followUser}) => (
  <li className="follow-me"><button onClick={followUser} className="btn btn-primary"><i className="fa fa-plus"></i>&nbsp; Follow</button></li>
)

const UnfollowButton = ({}) => (
  null
)

export {FollowUser}
