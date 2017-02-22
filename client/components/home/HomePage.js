import React, {PropTypes, Component} from 'react';
import { connect } from 'react-redux';

import PostList from './postList';

class HomePage extends Component {

	render() {
	  return(
	    <div>
	      <h1>Random Posts</h1>
        <PostList posts={this.props.posts} />
      </div>
    );
	}
}

function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps)(HomePage);
