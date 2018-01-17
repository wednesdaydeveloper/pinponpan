import * as React from 'react';
import LineMessage from '../LineMessage/LineMessage';
import { Message } from '../State';

export interface StateProps {
    messages: Message[];
}

const MessageList = (props: StateProps) => {
    return (
        <section className="talk-llist">
{props.messages.map(message => (
            <LineMessage {...message}  />
))}        
        </section>
    );
};

export default MessageList;