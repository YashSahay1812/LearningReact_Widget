import React from "react";

const Link = ({href, className, children}) => {

    const onLinkClick = (event) => {
        event.preventDefault();

        window.history.pushState({}, '', href);
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);  
        
    }

    return (
        <a href={href} className={className} onClick={onLinkClick} > {children} </a>
    );

}

export default Link;