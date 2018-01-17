import { createAction } from 'redux-actions';
//
//  action
//
export const A: string  = 'controller/a';
export const A_ASYNC: string  = 'controller/a_async';

export const B1: string  = 'controller/b1';
export const B2: string  = 'controller/b2';
export const B3: string  = 'controller/b3';

export const b1 = createAction(B1);
export const b2 = createAction(B2);
export const b3 = createAction(B3);

export const a = createAction(A);
export const aAsync = createAction(A_ASYNC);
