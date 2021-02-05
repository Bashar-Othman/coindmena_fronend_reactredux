import React, { Component } from 'react';
import Post from './Post';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

function PostWall(props) {
    return (<div>
        <div className="photo-grid">
            {props.posts.map((post, index) => <Post history={props.history} removePhoto={props.removePhoto} key={index} post={post} />)}
        </div>
    </div>)
}



export default PostWall;

