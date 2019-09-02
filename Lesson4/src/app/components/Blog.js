import React from 'react';
import Post from './Post';

export default class Blog extends React.Component {
  render() {

    const items = this.props.items.map((item, index) => {
      return <Post key={index}>
        <strong>{item.title}</strong> <br/>
		{item.text} <br/>
		{item.data}
	
      </Post>;
    })


    return (
      <div>
        <h1>{this.props.titleBlog}</h1>
        <ul>
          {items}
		</ul>
      </div>
    );
  }
}