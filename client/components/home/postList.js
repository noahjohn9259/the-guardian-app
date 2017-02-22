import React, {PropTypes} from 'react';
import shortid from 'shortid';

import { Image } from 'react-bootstrap';

const PostItem = ({post}) => {
  return (
      <div className="col-md-4 clearfix">
        <div className="post-entry">
          <div className="image-thumb">
            <a target="_blank" href={post.webUrl}>
              <Image width="360" height="210" src={post.fields.thumbnail} responsive />
            </a>
          </div>
          <div className="post-content">
            <h3><a target="_blank" href={post.webUrl}>{post.webTitle}</a></h3>
            <p>{post.fields.trailText}</p>
          </div>
        </div>
      </div>
  );
};

const postList = ({ posts }) => {
	return (
    <div className="posts-wrapper">
      <div className="row">
        {posts.map(post =>
          <PostItem key={shortid.generate()} post={post} />
        )}
      </div>
    </div>
	);
};

postList.propTypes = {
	posts: PropTypes.array.isRequired
};

export default postList;
