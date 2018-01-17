import Controller, { StateProps, DispatchProps } from './Controller';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as Actions from './actions';
import { PinponpanState } from '../State';

const mapStateToProps = (state: PinponpanState): StateProps => ({
});

const mapDispatchToProps = (dispatch: Dispatch<{}>): DispatchProps => ({
    b1: () => dispatch(Actions.b1()),
    b2: () => dispatch(Actions.b2()),
    b3: () => dispatch(Actions.b3()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Controller);