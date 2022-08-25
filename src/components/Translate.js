import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert"

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Spanish',
        value: 'es'
    }
];

const Translate = () => {

    const [term, setTerm] = useState("")
    const [language, setLanguage] = useState(options[0]);

    const onTermChange = (event) => {
        setTerm(event.target.value);
        // console.log(term);
    }

    return (
        <>
            <div className="ui form">
                <div className="field">
                    <label>Enter text : </label>
                    <input type="text" value={term} onChange={onTermChange}/>
                </div>
            </div>
            <p></p>
            <Dropdown 
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
                dropdownLabel={"Select a language"}
            />
            <h1>Output : </h1>
            <Convert term={term} language={language} />
        </>
    );

}

export default Translate;