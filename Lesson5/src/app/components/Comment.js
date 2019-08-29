import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Comment extends Component {
	render(){
		return(
		<div className="card border-secondary mb-3">
			<div className="card-header">
			<Link to={`/comments/${this.props.id}`}>
				{this.props.email}
				
			</Link>
			</div>
			<div className="card-body text-secondary">
				<p>{this.props.name}</p>
				<p>{this.props.body}</p>
			</div>
		</div>
		)
	}
}