import React from 'react';
import Tweet from '/imports/client/ui/components/tweet.jsx';

export const Notifications = ({tweets, unseenTweets, updateTweets}) => (
  <div id="stream" className="container">
    <div className="row">
      <div className="col-md-4 col-lg-3">
        <div id="profile-panel" className="panel panel-default">
          <div className="media panel-body">

            <a className="pull-left" href="#">
              <img className="media-object" src="https://pbs.twimg.com/profile_images/431476628166696960/xQCVJI_u_bigger.jpeg" alt="..." />
            </a>

            <div className="media-body">
              <span className="username"><strong>josh owens</strong></span> <br />
              <span className="handle">@joshowens</span>
            </div>

            <table id="profile-stats" className="table">
              <tr className="head">
                <td><strong>Tweets</strong></td>
                <td><strong>Following</strong></td>
                <td><strong>Followers</strong></td>
              </tr>
              <tr className="numbers">
                <td>500</td>
                <td>240</td>
                <td>1,600</td>
              </tr>
            </table>
          </div>

          <div className="panel-footer">
            <input type="text" className="form-control" placeholder="Compose new Tweet..." />
          </div>
        </div>

        <div id="trending" className="panel panel-default">
          <div className="panel-body">
            <h4>Trending Topics</h4>
          </div>
          <ul className="list-group">
            <a href="#" className="list-group-item">#food</a>
            <a href="#" className="list-group-item">#meteorclub</a>
            <a href="#" className="list-group-item">#loremipsumdolor</a>
            <a href="#" className="list-group-item">#dracodormiens</a>
            <a href="#" className="list-group-item">#atmospherejs</a>
          </ul>
        </div>
      </div>

      <div className="col-md-8 col-lg-6">
        <ul id="notification-stream" className="list-group">
          <li className="list-group-item">
            <h4 className="list-group-item-heading">Notifications</h4>
          </li>

          <UnseenTweets unseenTweets={unseenTweets} updateTweets={updateTweets} />
          {
            tweets.map(function(tweet) {
              return <Tweet tweet={tweet} key={tweet._id} />
            })
          }

          <li className="list-group-item load-more">
            <a href="#">Load more tweets</a>
          </li>
        </ul>
      </div>


      <div className="col-md-8 col-md-offset-4 col-lg-3 col-lg-offset-0">
        <div className="panel panel-default">
          <div className="panel-body">
            <h4>Who to follow</h4>
          </div>

          <ul className="list-group">
            <a href="#" className="list-group-item"><strong>Josh Owens</strong> @joshowens</a>
            <a href="#" className="list-group-item"><strong>Sacha Greif</strong> @sachagreif</a>
            <a href="#" className="list-group-item"><strong>Tom Coleman</strong> @tmeasday</a>
          </ul>

          <div className="panel-footer short">
            <p>Find <a href="#">people you know</a>?</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

class UnseenTweets extends React.Component {
  constructor() {
    super();
    this.renderUnseen = this.renderUnseen.bind(this);
  }
  renderUnseen() {
    if (this.props.unseenTweets.length > 0) {
      return (
        <li className="list-group-item tweet">
          <p>
            There are {this.props.unseenTweets.length} new tweets!&nbsp;
            <a className="show-new-tweets" onClick={this.props.updateTweets}>Show</a>
          </p>
        </li>
        )
    }
  }
  render() {
    return <div>{this.renderUnseen()}</div>
  }
}
