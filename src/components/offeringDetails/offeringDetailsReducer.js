import {offeringsTypes} from 'actionTypes/offeringsActionTypes';

const initialState = {
    offeringDetail: {} ,
    error: {}
}
//reducer function that returns offerings state
export const Offerings = (state = initialState, action) => {
    switch (action.type) {
        case offeringsTypes.read_offering_detail_success:
            state = {
                ...state,
                offeringDetail: action.payload,
            };
            return state;
       
        case actionType.read_offering_detail_error:
            state = {
                ...state,
               error:action.error
            };
            return state;
        default:
            return state;
    }
};
