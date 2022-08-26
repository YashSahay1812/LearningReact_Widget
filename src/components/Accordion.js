import React, { useState, useEffect, useRef } from "react";

const Accordion = ({items}) => {

    const [activeIndex, setActiveIndex] = useState(null);
    const ref = useRef();

    const onTitleClick = (index) => {
        setActiveIndex(index);
    }

    const renderedItems = items.map(({title,content}, index) => {

        const active = (index === activeIndex) ? 'active' : '';

        return (
            <React.Fragment key={title}>
                <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
                    <i className="dropdown icon"></i>
                    {title}
                </div>
                <div className={`content ${active}`}>
                    <p>{content}</p>
                </div>
            </React.Fragment>
        );
    });

    useEffect(() => {

        const onBodyClick = (event) => {
            if(!ref.current.contains(event.target))   
                setActiveIndex(-1);
        }

        document.body.addEventListener('click', onBodyClick);

        return () => document.body.removeEventListener('click', onBodyClick);

    },[]);

    return (
        <div className="ui styled accordion" ref={ref}> 
            {renderedItems}
        </div>
    );
}

export default Accordion;