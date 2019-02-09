import {offeringsTypes} from 'actionTypes';
import api from "../../services/api/baseServiceApi";

const actions = {
    ReadOrderDetailSuccess: (payload) => {
        return {
            type: offeringsTypes.read_offering_detail_success,
            payload: payload
        }
    },
    ReadOrderDetailError: (error) => {
        return {
            type: offeringsTypes.read_offering_detail_error,
            payload: error
        }
    }
}

export const ReadOfferingDetail = (inputObj) => (dispatch, getstate) => {
    return api.processServiceCall(inputObj).then((result) => {
        dispatch(actions.ReadOrderDetailSuccess(result));
    }).catch(error => {
        dispatch(actions.ReadOrderDetailError(error));
    });
}

