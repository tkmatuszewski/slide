import * as React from "react";
import './Button.scss';

const Button = ({ name, cl }) => {
    return (
        <button className={cl}>
            {name}
        </button>
    )
};

export default Button;