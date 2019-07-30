import React from 'react';

export default class Post extends React.Component {
  render() {
    return (
      <li><p text={this.props.text}>{this.props.children}</p></li>
    );
  }
}


