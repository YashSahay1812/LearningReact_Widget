import React from "react";

const Accordion = ({items}) => {

    const renderedItems = items.map(({title,content}) => 
        <React.Fragment key={title}>
            <div className="title active">
                <i className="dropdown icon"></i>
                {title}
            </div>
            <div className="content active">
                <p>{content}</p>
            </div>
        </React.Fragment>
    )

    return (
        <div className="ui styled accordion"> 
            {renderedItems}
        </div>
    );
}

export default Accordion;