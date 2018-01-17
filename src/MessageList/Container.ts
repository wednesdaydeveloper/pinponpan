import MessageList, { StateProps } from './MessageList';
import { connect } from 'react-redux';
import { PinponpanState } from '../State';

const mapStateToProps = (state: PinponpanState): StateProps => ({
    messages: state.messages,
});

export default connect(
    mapStateToProps,
)(MessageList);