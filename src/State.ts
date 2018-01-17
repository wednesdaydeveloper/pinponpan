export enum Side {
    Left,
    Right
}

export interface Message {
    message: string;
    name: string;
    img: string;
    side: Side;
}

export interface PinponpanState {
    messages: Message[];
    turn: Side;
}
