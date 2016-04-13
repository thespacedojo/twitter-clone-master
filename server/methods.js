Meteor.methods({
  followUser(followId) {
    check(followId, String);
    if (this.userId)
      Meteor.users.update(this.userId, {$push: {"profile.followingIds": followId}})
  },
  unfollowUser(followId) {
    check(followId, String);
    if (this.userId)
      Meteor.users.update(this.userId, {$pull: {"profile.followingIds": followId}})
  }
});
