import React from 'react';
import MenuItems from '../containers/menu-items';
import PageInfo from '../containers/page-info';


const WebPage=()=>(
	<div>
		<MenuItems />
	<hr/>
		<PageInfo />
	<hr/>
	<footer className="card-footer">&copy; 2019</footer>
	</div>
);

export default WebPage;