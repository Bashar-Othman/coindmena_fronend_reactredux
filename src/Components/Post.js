import React, { Component } from 'react';
import PropTypes from 'prop-types';

function Post (props) {
    const {post} = props;
    return (
        <figure className="figure">
            <img className="single-photo" src={post.url} alt={post.product_name} />
            <figcaption><p>{post.unit_cost}</p></figcaption>
            <div className="button-container">
                {post.isEditable &&
                <button onClick={()=>props.history.push(
                    {
                        pathname: '/EditPost',
                        state: { id: post._id }
                      }
                )} className="remove-button" style={{color:"#065784", borderColor:"#065784"}}>Edit</button>
                }
                </div>
        </figure>
    )
}



export default Post;


