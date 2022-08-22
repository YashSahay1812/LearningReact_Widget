import React, { useEffect, useState, useRef } from "react";

const Dropdown = ({options}) => {

    const renderedOptions = options.map(
        ({value, label}) => {
            return (
                <div key={value} className="item">
                    {label}
                </div>
            );
        }
    );

    return (

        <>
            <div className="ui form">
                <div className="field">
                    <label className="label">Select a Color</label>
                    <div className="ui selection dropdown visible active">
                        <i className="dropdown icon"></i>
                        <div className="text">Select Color</div>
                        <div className="menu visible transition">{renderedOptions}</div>
                    </div>
                </div>
            </div>
            <h3 style={{color:"red", fontStyle:"italic"}}>This text is {"Red"}!</h3>
        </>

    );

}

export default Dropdown;