var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types')

require('./index.css');

class User extends React.Component {
  render() {
    let friends = this.props.contacts.filter(function(contact){
      return (contact.friend === true);
    })

    let nonFriends = this.props.contacts.filter(function(contact){
      return (contact.friend !== true);
    })

    return (
      <div>
        <h2>{this.props.name}</h2>
        <h3> Friends </h3>
        <ul>
          {friends.map(function(contact){
            return <li> {contact.name} </li>;
          })}
        </ul>
        <h3> Non-friends </h3>
        <ul>
          {nonFriends.map(function(contact){
            return <li> {contact.name} </li>;
          })}
        </ul>
      </div>
    )
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired
}

ReactDOM.render(
  <User 
  name={ "Harry Potter" }
  contacts={[{ name: 'Ron Weasley', friend: true },
              {name: 'Draco Malfoy', friend: false},
              {name: 'Severus Snape', friend: false},
              {name: 'Hermione Granger', friend: true},
              {name: 'Luna Lovegood', friend: true},
              {name: 'Tom Riddle', friend: false}
            ]}
  possessions={['Invisibility Cloak', 'Marauder\'s Map']} 
            />,
  document.getElementById('app')
);
