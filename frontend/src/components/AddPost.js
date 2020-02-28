import React from 'react';

import { addPost } from '../actions/postAction';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

class AddPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            title: '',
            post: '',
            image: ''
        }
    }

    handleUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handleTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleMessage = (e) => {
        this.setState({
            post: e.target.value
        })
    }

    handleImage = (e) => {
        console.log(e.target.files[0])
        this.setState({
            image: e.target.files[0]
        })
    }
    
    handleSubmit = async (e) => {
        e.preventDefault(); 

        const data = {
            username: this.state.username,
            title: this.state.title,
            post: this.state.post,
            postImage: this.state.image
        }

        console.log(data)
        console.log('Submited')

        this.props.addPost(data);
    }

    render() {
        return(
            <div className="add-post">
                <h2>Add Post</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text" required onChange={this.handleUsername} className="form-control" placeholder="Enter Username" />
                    </div>
                    <div className="form-group">
                        <label>Title: </label>
                        <input type="text" onChange={this.handleTitle} className="form-control" placeholder="Title of Post" />
                    </div>
                    <div className="form-group">
                        <label>Message: </label>
                        <textarea className="form-control" required onChange={this.handleMessage} placeholder="Message (Not more that 25 characters)"></textarea>
                    </div>
                    <div className="form-group">
                        <label>Upload Image</label>
                        <input type="file" className="form-control-file" onChange={this.handleImage} />
                    </div>
                    <button type="submit" className="btn btn-warning" onClick={this.handleClick}>Add</button>
                </form>
            </div>
        );
    }
}

AddPost.propTypes = {
    addPost: PropTypes.func.isRequired
}

const mapStateProps = (state) => ({
    post: state.post
})

export default connect(mapStateProps, { addPost })(AddPost);