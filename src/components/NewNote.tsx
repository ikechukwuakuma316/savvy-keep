import * as React from 'react';
import {Fragment} from 'react';

export default function NewNote() {
    return (
        <Fragment>
            <div
                contentEditable
                style={{fontWeight: "bolder", fontSize: "x-large", margin: 10, padding:10}}
                className="text-heading"> Write
                something..
            </div>
            <div style={{height: 300, marginTop: 40}} contentEditable> Note content</div>
        </Fragment>
    );
}