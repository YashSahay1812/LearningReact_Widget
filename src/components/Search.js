import React, {useState, useEffect} from "react";
import axios from "axios";

const Search = () => {

    const [ term, setTerm ] = useState("Programming");
    const [ results, setResult ] = useState([]);

    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get("https://en.wikipedia.org/w/api.php",{
                params : {
                    action: 'query',
                    list: 'search',
                    format: 'json',
                    origin: '*',
                    srsearch: term
                }
            });

            setResult(data.query.search);
            console.log(results);
        }
        
        // Search will not be triggered with blank term parameter
        if(term) {
            if(!results.length) search();   //This will run only if code is rendering for the first time (Since we don't want any delay)
            else{
                const timeoutId = setTimeout(search,1000);
                return () => clearTimeout(timeoutId);            
            }
        } 

    },[term]);

    const renderedResult = results.map((result) => {
    return (
        <div key={result.pageid} className="item">
            <div className="right floated content">
                <a
                    className="ui button"
                    href={`https://en.wikipedia.org?curid=${result.pageid}`}
                >
                    Go
                </a>
            </div>
            <div className="content">
                <div className="header">{result.title}</div>
                <span dangerouslySetInnerHTML={{__html: result.snippet }}></span>
            </div>
        </div>
    );
    }
);

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label> 
                    <input className="input" value={term} onChange={(event) => setTerm(event.target.value)} />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResult}
            </div>
        </div>
    );
}

export default Search;