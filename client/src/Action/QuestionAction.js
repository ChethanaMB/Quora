import * as actionType from './ActionTypes'

export const ACTION_POST_QUESTION= {
    type : actionType.POST_QUESTION,
    payload : {       
       
        email: undefined,
        deptId: undefined,
        quesId: undefined,
        subId : undefined

    }
}
export const ACTION_GET_QUESTIONS = {
    type : actionType.GET_QUESTIONS,
    payload : {

        email: undefined,
        deptId: undefined,
        quesId: undefined,
        subId : undefined
    }
}

export const ACTION_POST_ANSWER = {
    type : actionType.POST_ANSWER,
    payload : {
        
        email: undefined,
        quesId: undefined,
        subId : undefined
    }
}