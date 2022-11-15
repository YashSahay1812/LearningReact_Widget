import React, { useEffect, useState, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange, dropdownLabel }) => {

    const [open, setOpen] = useState(false);
    const ref = useRef();

    const renderedOptions = options.map(
        (option) => {

            if(selected.value === option.value) return null;    //if selected don't show in dropdown

            return (
                <div key={option.value} className="item" onClick={ () => onSelectedChange(option) }>
                    {option.label}
                </div>
            );
        }
    );

    useEffect(() => {
        
        const onBodyClick = (event) => {
            if(!ref.current.contains(event.target))    // This condition ensures that function only setOpen->false if event is triggered somewhere outside the Dropdown component
                setOpen(false);
        }
        // We could have also checked event bubbling instead, but that's not a good practice

        document.body.addEventListener('click', onBodyClick, {capture: true});

        return () => { document.body.removeEventListener('click', onBodyClick, {capture: true}); };

    },[]);

    return (

        <div className="ui form" ref={ref}>     {/* Assigning ref to outermost parent element returned by Dropdown component*/}
            <div className="field">
                <label className="label">{dropdownLabel}</label>
                <div className={`ui selection dropdown ${open ? 'visible active' : ''}`} onClick={() => {setOpen(!open)}} >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`} >{renderedOptions}</div>
                </div>
            </div>
        </div>

    );
    
}

export default Dropdown;