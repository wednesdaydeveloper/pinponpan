import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export interface StateProps {
}

export interface DispatchProps {
    b1: () => void;
    b2: () => void;
    b3: () => void;
}

const Controller = (props: StateProps & DispatchProps) => (
    <div className="controller">
        <RaisedButton 
            label="b1"
            onClick={() => props.b1()}
        />
        <RaisedButton 
            label="b2"
            onClick={() => props.b2()}
        />
        <RaisedButton 
            label="b3"
            onClick={() => props.b3()}
        />
    </div>
);

export default Controller;