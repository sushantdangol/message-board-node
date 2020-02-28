import React from 'react';

//import component
import AddPost from './AddPost';

import { connect } from 'react-redux';
import { getPost, deletePost } from '../actions/postAction';

import PropTypes from 'prop-types';

class Posts extends React.Component {

    componentDidMount() {
        this.props.getPost();
    }

    onDelete = id => {
        console.log(id)
        this.props.deletePost(id);
    }

    render() {
        const { post } = this.props.post;
        return(
            <div className="notice">
                <div className="container">
                    <AddPost />
                <div className="row">
                {post.map(post => 
                    <div key={post._id} className="col-sm">
                        <div className="card custom-card">
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <span className="subtitle">{post.username} </span>|
                                <span className="subtitle"> {post.date}</span>
                                <p className="card-text">{post.post}</p>
                                <p className="post-id">{post._id}</p>
                                <button type="button" className="btn btn-custom btn-danger" onClick={this.onDelete.bind(this, post._id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                )}
                    </div>
                </div>
            </div>
        );
    }
}

Posts.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    deletePost: PropTypes.func.isRequired
}

const mapStateProps = (state) => {
    return {
        post: state.post
    }
}

export default connect(mapStateProps, { getPost, deletePost })(Posts);