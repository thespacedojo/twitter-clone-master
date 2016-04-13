import React from 'react';

class FollowUser extends React.Component {
  constructor() {
    super();
    this.following = this.following.bind(this);
    this.followUser = this.followUser.bind(this);
    this.unfollowUser = this.unfollowUser.bind(this);
  }
  following() {
    if (_.contains(this.props.followingIds, this.props.userId)) {
      return <UnfollowButton unfollowUser={this.unfollowUser} /> 
    } else {
      return <FollowButton followUser={this.followUser} />
    }
  }
  followUser(event) {
    Meteor.call('followUser', this.props.userId);
  }
  unfollowUser(event) {
    Meteor.call('unfollowUser', this.props.userId);
  }
  render() {
    return this.following() 
  }
}

const FollowButton = ({followUser}) => (
  <li className="follow-me"><button onClick={followUser} className="btn btn-primary"><i className="fa fa-plus"></i>&nbsp; Follow</button></li>
)

const UnfollowButton = ({unfollowUser}) => (
  <li className="follow-me"><button onClick={unfollowUser} className="btn btn-danger"><i className="fa fa-minus"></i>&nbsp; Unfollow</button></li>
)

export {FollowUser}
