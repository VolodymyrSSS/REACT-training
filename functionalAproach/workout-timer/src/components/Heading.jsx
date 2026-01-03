import React from 'react';

export default function Heading(props) {
  return (
    <div>
        <h1
            style={{fontSize: props.size + "px", color: props.color, textAlign: props.align}}
            onClick={props.click}>
                {props.children}
        </h1>
    </div>
  )
}
