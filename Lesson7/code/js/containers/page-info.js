import React, {Component} from 'react';
import {connect} from 'react-redux';

class PageInfo extends Component{
	render(){
		return(
		<div>
			<h2>{this.props.item.name}</h2>	
		<p>{this.props.item.desc}</p>
		</div>
		)
	}
}


function mapStateToProps(state){
	return{
		item: state.active
	};
}

export default connect(mapStateToProps)(PageInfo);