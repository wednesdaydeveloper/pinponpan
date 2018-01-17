import { MiddlewareAPI, Dispatch, Middleware } from 'redux';
import { Action } from 'redux-actions';
import { PinponpanState, Side } from '../State';
import * as Controller from '../Controller/actions';

interface ExtendedMiddleware<PinponpanState> extends Middleware {
    <S extends PinponpanState>(api: MiddlewareAPI<S>): (next: Dispatch<S>) => Dispatch<S>;
}

const calling: ExtendedMiddleware<PinponpanState> = (api: MiddlewareAPI<PinponpanState>) => (next: Dispatch<PinponpanState>) => <A extends Action<{}>>(action: A): A => {
    const state: PinponpanState = api.getState();
    if (state.turn === Side.Left) {
        state.turn = Side.Right;
        api.dispatch(Controller.aAsync());
    }
console.log("turn: " + state.turn);
    return next(action);
};

export default calling;