import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import sideNavReducer from './sidenav_reducer';

export default combineReducers({
    modal: modalReducer,
    sideNav: sideNavReducer
});