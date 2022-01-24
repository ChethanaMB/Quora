import { combineReducers ,createStore} from 'redux'
import QuestionReducer from './Reducers/QuestionReducer'

/* import MasterReducer from './reducers/MasterReducer'
import FilterReducer from './reducers/FilterReducer'
import UserReducer from './reducers/UserReducer'
 */
import UserReducer from './Reducers/UserReducer'
var store = createStore(combineReducers({
    /* masterdata : MasterReducer,
    filter : FilterReducer, */
    Users :UserReducer,
    Questions : QuestionReducer
}),{
    /* masterdata : { categories : [] , brands : [] , products : [] } ,
    filter : { categories : [] , brands : []  } , */
    Users : { loginstatus : false , token : undefined,email: undefined, deptId: undefined},
    Questions : {email : undefined, deptId : undefined, quesId : undefined, subId : undefined }
})

export default store