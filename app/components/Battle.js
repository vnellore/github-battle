var React = require('react');
var Link = require('react-router-dom').Link;
var PropTypes = require('prop-types');

class PlayerInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.onSubmit(
            this.props.id,
            this.state.userName
        )
    }

    handleChange(event) {
        var value = event.target.value;

        this.setState(function () {

            return {
                userName: value
            }

        })
    }

    render() {
        return (
            <form className='column' onSubmit={this.handleSubmit}>
                <label className='header' htmlFor='userName'>
                    {this.props.label}
                </label>
                <input
                    id='userName'
                    placeholder='github username'
                    type='text'
                    autoComplete='off'
                    value={this.state.userName}
                    onChange={this.handleChange}
                />
                <button
                    className='button'
                    type='submit'
                    disabled={!this.state.userName}>
                    Submit
                </button>
            </form>
        )
    }
}

PlayerInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
}

class Battle extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            playerOneName: '',
            playerTwoName: '',
            playerOneImage: null,
            playerTwoImage: null,

        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(id, userName) {
        this.setState(function () {
            var newState = {};

            newState[id + 'Name'] = userName;
            newState[id + 'Image'] = 'https://github.com/' + userName + '.png?size=200';

            return newState;

        })
    }

    render() {
        var playerOneName = this.state.playerOneName;
        var playerTwoName = this.state.playerTwoName;

        return (<div>

            <div class="row">
                {!playerOneName &&
                    <PlayerInput id='playerOne'
                        label='Player One'
                        onSubmit={this.handleSubmit} />}
                {!playerTwoName &&
                    <PlayerInput id='playerTwo'
                        label='Player Two'
                        onSubmit={this.handleSubmit} />}
            </div>
        </div>
        )
    }
}

module.exports = Battle;