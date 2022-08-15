import React from 'react';
import Accordion from './components/Accordion';

const items = [
    {
        title: "What is React?",
        content: "React is a Javascript fron-end library. It is used to show content to users and handle user events. Enginners use React to create reusable components."
    },
    {
        title: "How do we show content with React?",
        content: "We show content in React with the help of JSX."
    },
    {
        title: "Why is React useful for enginners?",
        content: "React is useful for engineer, because it allows them to create reusable components and structured code."
    }
];

const App = () => {
    return (
        <div>
            <Accordion items={items} />
        </div>
    );
}

export default App;