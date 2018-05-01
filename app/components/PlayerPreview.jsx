import React from 'react';
import Link from 'react-router-dom';
import PropTypes from 'prop-types';

function PlayerPreview({ userName, children, avatar }) {
    return (
        <div>
            <div className='column'>
                <img
                    className='avatar'
                    src={avatar}
                    alt={'Avatar for ' + userName}
                />
                <h2 className='userName'>@{userName}</h2>
            </div>
            {children}

        </div>
    )
}

PlayerPreview.propTypes = {
    avatar: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired
}

export default PlayerPreview;