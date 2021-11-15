import React, { Component } from 'react';

class Layout extends Component {
  render() {
    return (
      <div className='app'>
        <h2>{this.props.children}</h2>
      </div>
    );
  }
}

export default Layout;