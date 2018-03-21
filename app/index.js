var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

class UserInfo extends React.Component {
  render() {
    return (
      <div>Hello {this.props.name}!</div>
    )
  }
}

ReactDOM.render(
  <UserInfo name="Vamsi" />,
  document.getElementById('app')
);