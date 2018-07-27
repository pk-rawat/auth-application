import React from 'react';
import { connect } from 'react-redux';
import updateName from '../../actions/name';

class Home extends React.Component {
  updateName = () => {
    this.props.dispatch(updateName(document.getElementById('name').value))
  }

  render() {
    return (
      <div className="container home">
        <h1>Home</h1>
        Enter your name:{' '}
        <input name="name" id="name" onKeyUp={() => this.updateName()} />
        <h3>Hello {this.props.name}</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    name: state.name.name
  }
}

export default connect(mapStateToProps)(Home);
