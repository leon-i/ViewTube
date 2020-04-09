import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import uiReducer from './ui/ui_reducer';
import errorsReducer from './errors/errors_reducer';

export default combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    ui: uiReducer,
    errors: errorsReducer
});