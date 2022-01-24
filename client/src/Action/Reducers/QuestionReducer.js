import * as actionType from '../ActionTypes'

export default function QuestionReducer(state={},action)
{
    switch(action.type)
    {
        case actionType.POST_QUESTION: return {
                                ...state, loginstatus:true,
                                deptId : action.payload.deptId,
                                subId : action.payload.subjectId,
                                quesId : action.payload.quesId,
                                email : action.payload.email
                                }
        case actionType.GET_QUESTIONS: return {
                                ...state, loginstatus:true,
                                deptId : action.payload.deptId,
                                subId : action.payload.subjectId,
                                quesId : action.payload.quesId,
                                email : action.payload.email
                                
                            }
        case actionType.POST_ANSWER: return {
                                ...state, loginstatus:true,
                                subId : action.payload.subjectId,
                                quesId : action.payload.quesId,
                                email : action.payload.email

                            }                            
        default: return state                                
    }
}