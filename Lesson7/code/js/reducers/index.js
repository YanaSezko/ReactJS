import {combineReducers} from 'redux';
import MenuReducers from './menu';
import ActiveMenu from './menuItem-active';

const allReducers = combineReducers ({
	menu: MenuReducers,
	active: ActiveMenu
});

export default allReducers

