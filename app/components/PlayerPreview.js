import React from 'react';
var Link = require('react-router-dom').Link;
var PropTypes = require('prop-types');

function PlayerPreview(props) {
    return (
        <div>
            <div className='column'>
                <img
                    className='avatar'
                    src={props.avatar}
                    alt={'Avatar for ' +  props.userName}
                />
                <h2 className='userName'>@{props.userName}</h2>
            </div>
            { props.children } 
            
        </div>
    )
}

PlayerPreview.propTypes = {
    avatar: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired    
}

module.exports = PlayerPreview;