import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as offeringActions from './offeringAction';
import Offering from './offering';


//state is redux state (global)
const mapStateToProps = state => {
    return {
        offerDetail: {}
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(
            {
                GetOfferingDetail: offeringActions.ReadOfferingDetail
            },
            dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Offering);
