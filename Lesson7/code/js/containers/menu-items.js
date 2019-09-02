import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index';

class MenuItems extends Component {
	showItems (){
		return this.props.menu.map((item)=>{
			return (
			<li onClick={()=>this.props.select (item)} key={item.id}>{item.name}</li>
			)
		});
	}
	render(){
		return(
		<ul>
			{this.showItems()}	
		</ul>
		);
	}
}

function mapStateToProps(state){
	return{
		menu: state.menu
	};
}

function matchDispatchToProps (dispatch){
	return bindActionCreators({select: select},dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(MenuItems);