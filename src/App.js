import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

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

const options = [
    {
        label: 'Red',
        value: 'red'
    },
    {
        label: 'Green',
        value: 'green'
    },
    {
        label: 'Blue',
        value: 'blue'
    }
]

const App = () => {
    return (
        <div>
            {/* <Accordion items={items} /> */}
            {/* <Search /> */}
            <Dropdown options={options} />
        </div>
    );
}

export default App;