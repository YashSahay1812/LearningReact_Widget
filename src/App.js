import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

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
    
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <>
                    <Dropdown 
                        options={options} 
                        selected={selected} 
                        onSelectedChange={setSelected}
                        dropdownLabel={"Select a color"} 
                    />
                    <h3 style={{color:`${selected.value}`, fontStyle:"italic"}}>This text is {selected.label}!</h3>
                </>
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
}

export default App;