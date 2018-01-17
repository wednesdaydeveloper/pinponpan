import { handleActions, Action } from 'redux-actions';
import { PinponpanState, Side } from './State';
import * as Controller from './Controller/actions';

/**
 * ステート
 */
const INITIAL_STATE: PinponpanState = {
    messages: [
        // createLeftMessage('msg1'),
        // createLeftMessage('msg2'),
    ],
    turn: Side.Right
};

function addRightMessage(state: PinponpanState, message: string): PinponpanState {
    return {...state, turn: Side.Left, messages: state.messages.concat({img: '/img/icon_002750_64.png', name: 'bbb', message: message, side: Side.Right})};
}

function addLeftMessage(state: PinponpanState, message: string): PinponpanState {
    return {...state, turn: Side.Right, messages: state.messages.concat({img: '/img/icon_002520_64.png', name: 'aaa', message: message, side: Side.Left})};
}

/**
 * reducer
 */
export default handleActions<PinponpanState, {}>(
    {
        [Controller.B1]: (state: PinponpanState, action: Action<{}>) => {
            return addRightMessage(state, 'b1');
        },
        [Controller.B2]: (state: PinponpanState, action: Action<{}>) => {
            return addRightMessage(state, 'b2');
        },
        [Controller.B3]: (state: PinponpanState, action: Action<{}>) => {
            return addRightMessage(state, 'b3');
        },
        [Controller.A]: (state: PinponpanState, action: Action<{}>) => {
            return addLeftMessage(state, 'a1');
        },
    }, 
    INITIAL_STATE);