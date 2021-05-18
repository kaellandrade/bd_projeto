import React from 'react';

/**
 * Componente Botão com Icon
 * Classes do Bootstrap [primary, secondary, success, dangers, info, light, dark]
 */
const BtnIcon = (props) => {
    let color =  props.color || 'primary';
    let style = props.outline? `outline-` : '';
    console.log(`btn btn-${style}${color}`);
    return (
        <button icon onClick={props.onClick} className={`btn btn-${style}${color}`}>
            {props.children}
        </button>
    )

}
export default BtnIcon;