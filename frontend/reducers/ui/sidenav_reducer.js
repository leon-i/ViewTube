import { OPEN_SIDENAV, CLOSE_SIDENAV } from '../../actions/sidenav_actions';

export default (state = true, action) => {
    switch (action.type) {
        case OPEN_SIDENAV:
            return true;
        case CLOSE_SIDENAV:
            return false;
        default:
            return state;
    }
}