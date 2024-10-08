import React from 'react';



const ScrollList = (props) => {
    return (
        <div style = {{overflow : 'scroll', border: '5px solid black', height: '80vh'}}>
            {props.children}
        </div>
    );
}

export default ScrollList;