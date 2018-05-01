import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PlayerPreview from './PlayerPreview';

class PlayerInput extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onSubmit: PropTypes.func.isRequired,
    }
    static defaultProps = {
        label: 'Username',
    }
    state = {
        userName: ''
    }
    handleChange = (event) => {
        const value = event.target.value;

        this.setState(() => ({ userName: value }))
    }
    handleSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(
            this.props.id,
            this.state.userName
        );
    }
    render() {
        const { userName } = this.state
        const { label } = this.props

        return (
            <form className='column' onSubmit={this.handleSubmit}>
                <label className='header' htmlFor='userName'>{label}</label>
                <input
                    id='userName'
                    placeholder='github username'
                    type='text'
                    value={userName}
                    autoComplete='off'
                    onChange={this.handleChange}
                />
                <button
                    className='button'
                    type='submit'
                    disabled={!userName}>
                    Submit
        </button>
            </form>
        )
    }
}

class Battle extends React.Component {
    state = {
        playerOneName: '',
        playerTwoName: '',
        playerOneImage: null,
        playerTwoImage: null,
    }
    handleSubmit = (id, userName) => {
        this.setState(() => ({
            [id + 'Name']: userName,
            [id + 'Image']: `https://github.com/${userName}.png?size=200`
        }))
    }
    handleReset = (id) => {
        this.setState(() => ({
            [id + 'Name']: '',
            [id + 'Image']: null
        }))
    }
    render() {
        const { match } = this.props;
        const { playerOneName, playerOneImage, playerTwoName, playerTwoImage } = this.state;

        return (
            <div>
                <div className='row'>
                    {!playerOneName &&
                        <PlayerInput
                            id='playerOne'
                            label='Player One'
                            onSubmit={this.handleSubmit}
                        />}

                    {playerOneImage !== null &&
                        <PlayerPreview
                            avatar={playerOneImage}
                            userName={playerOneName}>
                            <button
                                className='reset'
                                onClick={() => this.handleReset('playerOne')}>
                                Reset
                </button>
                        </PlayerPreview>}

                    {!playerTwoName &&
                        <PlayerInput
                            id='playerTwo'
                            label='Player Two'
                            onSubmit={this.handleSubmit}
                        />}

                    {playerTwoImage !== null &&
                        <PlayerPreview
                            avatar={playerTwoImage}
                            userName={playerTwoName}>
                            <button
                                className='reset'
                                onClick={() => this.handleReset('playerTwo')}>
                                Reset
                </button>
                        </PlayerPreview>}
                </div>

                {playerOneImage && playerTwoImage &&
                    <Link
                        className='button'
                        to={{
                            pathname: match.url + '/results',
                            search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`
                        }}>
                        Battle
          </Link>}
            </div>
        )
    }
}

export default Battle;