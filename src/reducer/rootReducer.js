import { combineReducers  } from 'redux';
import loginReducer from './loginReducer';
import userReducer from './userReducer';
import cutawayReducer from './cutawayReducer';

const rootReducer = combineReducers({
    cutaway: cutawayReducer,
    user: userReducer,
    login: loginReducer,
});

export default rootReducer;
