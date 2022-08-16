import React, {useState, useEffect} from "react";
import axios from "axios";

const Search = () => {

    const [term,setTerm] = useState("");

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

            console.log(data);
        }

        search();

    },[term]);

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label> 
                    <input className="input" value={term} onChange={(event) => setTerm(event.target.value)} />
                </div>
            </div>
        </div>
    );
}

export default Search;