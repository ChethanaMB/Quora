import * as actionType from '../ActionTypes'

export default function UserReducer(state={},action)
{
    switch(action.type)
    {
        case actionType.USER_LOGIN: return {
                                ...state, loginstatus:true,
                                token : action.payload.token,
                                email : action.payload.email,
                                deptId : action.payload.deptId
                                }
        case actionType.USER_LOGOUT: return {
                                ...state, loginstatus:false,
                                token : undefined,
                                name : undefined
                            }
        case actionType.USER_UPDATE_TOKEN: return {
                            ...state,token : action.payload.token
                            }          
        default: return state                                
    }
}