import * as React from 'react';
import './LineMessage.css';
import { Side } from '../State';

export interface StateProps {
    message: string;
    name: string;
    img: string;
    side: Side;
}

const LineMessage = (props: StateProps) => {
    let imageClass: string;
    let textClass: string;
    if (props.side === Side.Left) {
        imageClass = 'talk-img-left';
        textClass  = 'talk-text-left';
    } else {
        imageClass = 'talk-img-right';
        textClass  = 'talk-text-right';
    }
    return (
        <div className="talk">
            <figure className={imageClass}>
                <img src={props.img} alt="no-img" />
                <figcaption className="talk-img-description">{props.name}</figcaption>
            </figure>
            <div className={textClass}>
                <p className="talk-text">{props.message}</p>
            </div>
        </div>
    );
};

export default LineMessage;